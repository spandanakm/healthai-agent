const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
console.log("🔑 API Key Status:", process.env.ANTHROPIC_API_KEY ? "LOADED ✅" : "MISSING ❌");

const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ CORS fix - allows ANY localhost port
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
    const apiKey =
      process.env.ANTHROPIC_API_KEY || process.env.REACT_APP_ANTHROPIC_KEY;

    console.log("✅ API Key found:", apiKey ? "YES" : "NO - CHECK .env FILE!");

    if (!apiKey) {
      return res.status(500).json({
        error: "Missing API key. Add ANTHROPIC_API_KEY to .env file.",
      });
    }

    const safeMessages = Array.isArray(messages)
      ? messages
          .filter((m) => m && (m.role === "user" || m.role === "assistant"))
          .map((m) => ({
            role: m.role,
            content: Array.isArray(m.content)
              ? m.content
              : [{ type: "text", text: String(m.content || "") }],
          }))
      : [{ role: "user", content: [{ type: "text", text: "Hello" }] }];

    if (safeMessages.length === 0) {
      safeMessages.push({
        role: "user",
        content: [{ type: "text", text: "Hello" }],
      });
    }

    // Handle file attachment on last user message
    const lastUserIdx = safeMessages.map(m => m.role).lastIndexOf("user");
    if (lastUserIdx !== -1 && fileData?.data) {
      if (fileData.type === "image") {
        safeMessages[lastUserIdx].content.push({
          type: "image",
          source: {
            type: "base64",
            media_type: fileData.mimeType || "image/png",
            data: String(fileData.data).replace(/^data:[^;]+;base64,/, ""),
          },
        });
      } else if (fileData.type === "text") {
        safeMessages[lastUserIdx].content.unshift({
          type: "text",
          text: `File: ${fileData.name || "uploaded"}\n\n${fileData.data}\n\n`,
        });
      }
    }

    const payload = {
      model: "claude-sonnet-4-20250514",
      max_tokens: 1500,
      messages: safeMessages,
    };

    if (systemPrompt?.trim()) {
      payload.system = systemPrompt.trim();
    }

    console.log("📤 Sending to Anthropic...");

    const response = await axios.post(
      "https://api.anthropic.com/v1/messages",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
        },
        timeout: 30000,
      }
    );

    const reply = response.data?.content
      ?.filter((b) => b?.type === "text")
      ?.map((b) => b.text)
      ?.join("\n")
      ?.trim();

    console.log("✅ Got reply from Anthropic!");

    return res.json({ reply: reply || "No response received." });
  } catch (error) {
    console.error("❌ Error:", error.response?.data || error.message);
    return res.status(error.response?.status || 500).json({
      error:
        error.response?.data?.error?.message ||
        error.message ||
        "Something went wrong.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📋 API Key loaded: ${process.env.ANTHROPIC_API_KEY ? "YES ✅" : "NO ❌ - Add to .env file!"}`);
});