require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3001;
const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_MODEL = "claude-sonnet-4-20250514";

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json({ limit: "10mb" }));

function buildTextBlock(text) {
  return { type: "text", text };
}

function normalizeMessages(messages, fileData) {
  const safeMessages = Array.isArray(messages)
    ? messages
        .filter(
          (message) =>
            message &&
            (message.role === "user" || message.role === "assistant")
        )
        .map((message) => ({
          role: message.role,
          content: message.content,
        }))
    : [];

  if (safeMessages.length === 0) {
    safeMessages.push({
      role: "user",
      content: [buildTextBlock("Hello")],
    });
  }

  const lastUserIndex = [...safeMessages]
    .reverse()
    .findIndex((message) => message?.role === "user");

  const userMessageIndex =
    lastUserIndex === -1 ? -1 : safeMessages.length - 1 - lastUserIndex;

  if (userMessageIndex === -1) {
    safeMessages.push({
      role: "user",
      content: [buildTextBlock("Hello")],
    });
  }

  const targetIndex = userMessageIndex === -1 ? safeMessages.length - 1 : userMessageIndex;
  const targetMessage = safeMessages[targetIndex] || { role: "user", content: [] };
  const contentBlocks = Array.isArray(targetMessage.content)
    ? [...targetMessage.content]
    : typeof targetMessage.content === "string"
      ? [buildTextBlock(targetMessage.content)]
      : [];

  if (fileData?.type === "text" && fileData.data) {
    contentBlocks.unshift(
      buildTextBlock(`Attached file content from ${fileData.name || "uploaded file"}:\n${fileData.data}\n\n`)
    );
  }

  if (fileData?.type === "image" && fileData.data) {
    const mediaType = fileData.mediaType || fileData.mimeType || "image/png";
    const base64Data = String(fileData.data).replace(
      /^data:[^;]+;base64,/,
      ""
    );

    contentBlocks.push({
      type: "image",
      source: {
        type: "base64",
        media_type: mediaType,
        data: base64Data,
      },
    });
  }

  safeMessages[targetIndex] = {
    role: targetMessage.role || "user",
    content: contentBlocks.length > 0 ? contentBlocks : [buildTextBlock("Hello")],
  };

  return safeMessages.map((message) => ({
    role: message.role,
    content: Array.isArray(message.content)
      ? message.content
      : [buildTextBlock(String(message.content || ""))],
  }));
}

function extractAssistantText(responseData) {
  const blocks = responseData?.content;

  if (!Array.isArray(blocks)) {
    return "";
  }

  return blocks
    .filter((block) => block?.type === "text" && typeof block.text === "string")
    .map((block) => block.text)
    .join("\n")
    .trim();
}

app.post("/api/chat", async (req, res) => {
  try {
    const { messages, systemPrompt, fileData } = req.body || {};
    const apiKey =
      process.env.ANTHROPIC_API_KEY || process.env.REACT_APP_ANTHROPIC_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error:
          "Missing ANTHROPIC_API_KEY in environment variables.",
      });
    }

    if (!Array.isArray(messages)) {
      return res.status(400).json({
        error: "Invalid request body: messages must be an array.",
      });
    }

    const anthropicPayload = {
      model: ANTHROPIC_MODEL,
      max_tokens: 1500,
      messages: normalizeMessages(messages, fileData),
    };

    if (typeof systemPrompt === "string" && systemPrompt.trim()) {
      anthropicPayload.system = systemPrompt.trim();
    }

    const response = await axios.post(ANTHROPIC_URL, anthropicPayload, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      timeout: 30000,
    });

    const assistantText = extractAssistantText(response.data);

    if (!assistantText) {
      return res.status(502).json({
        error: "Anthropic returned no assistant text in the response.",
      });
    }

    return res.json({ reply: assistantText });
  } catch (error) {
    const statusCode = error.response?.status || 500;
    const providerError =
      error.response?.data?.error?.message ||
      error.response?.data?.message ||
      error.message;

    return res.status(statusCode).json({
      error: `Chat request failed: ${providerError}`,
    });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
