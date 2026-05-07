const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = process.env.PORT || 3001;
const buildPath = path.join(__dirname, "build");

function mapGeminiError(error) {
  const rawMessage = String(error?.message || "");
  const normalizedMessage = rawMessage.toLowerCase();
  const statusCode =
    error?.status ||
    error?.statusCode ||
    error?.response?.status ||
    error?.cause?.status;

  if (
    statusCode === 429 ||
    normalizedMessage.includes("429") ||
    normalizedMessage.includes("quota") ||
    normalizedMessage.includes("rate limit") ||
    normalizedMessage.includes("too many requests")
  ) {
    return {
      status: 429,
      error:
        "The AI service is temporarily busy or out of quota. Please try again in a little while.",
    };
  }

  if (
    statusCode === 401 ||
    statusCode === 403 ||
    normalizedMessage.includes("api key") ||
    normalizedMessage.includes("permission denied") ||
    normalizedMessage.includes("unauthorized")
  ) {
    return {
      status: 500,
      error:
        "The AI service is not configured correctly right now. Please check the API key and access settings.",
    };
  }

  return {
    status: 500,
    error: "The AI service could not respond right now. Please try again.",
  };
}

console.log(
  "Gemini Key:",
  process.env.GEMINI_API_KEY ? "LOADED" : "MISSING"
);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (!origin || origin.startsWith("http://localhost:")) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
  }

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json({ limit: "10mb" }));

app.post("/api/chat", async (req, res) => {
  try {
    const { messages, systemPrompt, fileData } = req.body || {};

    if (!process.env.GEMINI_API_KEY) {
      return res
        .status(500)
        .json({ error: "Missing GEMINI_API_KEY in .env file." });
    }

    if (!Array.isArray(messages) || messages.length === 0) {
      return res
        .status(400)
        .json({ error: "messages must be a non-empty array." });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-lite",
    });

    const safeMessages = messages.filter(
      (message) =>
        message && (message.role === "user" || message.role === "assistant")
    );

    if (safeMessages.length === 0) {
      return res.status(400).json({ error: "No valid messages found." });
    }

    const history = safeMessages.slice(0, -1).map((message) => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [{ text: String(message.content || "") }],
    }));

    const lastMessage = safeMessages[safeMessages.length - 1];

    let userText = systemPrompt ? `[Instructions: ${systemPrompt}]\n\n` : "";
    userText += String(lastMessage?.content || "Hello");

    if (fileData?.type === "text" && fileData?.data) {
      userText =
        `[Instructions: ${systemPrompt || ""}]\n\n` +
        `Medical Report File: ${fileData.name || "report"}\n\n` +
        `${fileData.data}\n\n` +
        String(lastMessage?.content || "Please analyse this report.");
    }

    const chat = model.startChat({ history });

    const result =
      fileData?.type === "image" && fileData?.data
        ? await chat.sendMessage([
            { text: userText },
            {
              inlineData: {
                mimeType: fileData.mimeType || "image/png",
                data: String(fileData.data).replace(
                  /^data:[^;]+;base64,/,
                  ""
                ),
              },
            },
          ])
        : await chat.sendMessage(userText);

    const reply = result.response.text();
    console.log("Gemini replied successfully.");
    return res.json({ reply });
  } catch (error) {
    const mappedError = mapGeminiError(error);
    console.error("Gemini Error:", {
      message: error?.message,
      status: error?.status || error?.statusCode || error?.response?.status,
    });
    return res.status(mappedError.status).json({
      error: mappedError.error,
    });
  }
});

app.use(express.static(buildPath));

app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
