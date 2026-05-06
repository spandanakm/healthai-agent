const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = process.env.PORT || 3001;
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

console.log("🔑 Gemini Key:", process.env.GEMINI_API_KEY ? "LOADED ✅" : "MISSING ❌");

// CORS - allow any localhost port
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (!origin || origin.startsWith("http://localhost:")) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

app.use(express.json({ limit: "10mb" }));

app.post("/api/chat", async (req, res) => {
  try {
    const { messages, systemPrompt, fileData } = req.body || {};

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "Missing GEMINI_API_KEY in .env file." });
    }

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages must be a non-empty array." });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: systemPrompt || "You are a helpful healthcare assistant.",
    });

    const safeMessages = messages.filter(
      (m) => m && (m.role === "user" || m.role === "assistant")
    );

    const history = safeMessages.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: String(m.content || "") }],
    }));

    const lastMessage = safeMessages[safeMessages.length - 1];
    let userContent = String(lastMessage?.content || "Hello");

    // Handle text file
    if (fileData?.type === "text" && fileData?.data) {
      userContent = "Medical Report:\n" + fileData.data + "\n\n" + userContent;
    }

    const chat = model.startChat({ history });

    let result;

    // Handle image file
    if (fileData?.type === "image" && fileData?.data) {
      result = await chat.sendMessage([
        { text: userContent },
        {
          inlineData: {
            mimeType: fileData.mimeType || "image/png",
            data: fileData.data,
          },
        },
      ]);
    } else {
      result = await chat.sendMessage(userContent);
    }

    const reply = result.response.text();
    console.log("✅ Gemini replied!");
    return res.json({ reply });

  } catch (error) {
    console.error("❌ Gemini Error:", error.message);
    return res.status(500).json({
      error: error.message || "Something went wrong.",
    });
  }
});

app.listen(PORT, () => {
  console.log("✅ Server running on http://localhost:" + PORT);
});
