import { useState } from "react";
import MODES from "../config/agentModes";
import sendChatMessage, { findBestMatch, selectDataset } from "../services/claudeApi";

const INITIAL_HISTORY = {
  symptom: [],
  qa: [],
  mental: [],
  report: [],
};

const INTENT_MAP = {
  symptoms: ["symptom", "symptoms", "signs", "what are the symptoms", "signs of", "how does it feel"],
  duration: ["how long", "how many days", "duration", "lasts", "recover", "recovery time", "get better"],
  medicine: ["medicine", "medicines", "medication", "tablet", "pill", "treat", "treatment", "remedy", "home remedy", "paracetamol", "ibuprofen"],
  causes: ["cause", "causes", "why", "reason", "what causes", "how do i get", "how does it spread"],
  prevention: ["prevent", "prevention", "avoid", "precaution", "how to avoid", "protect"],
  diet: ["eat", "food", "drink", "diet", "what to eat", "what not to eat", "can i eat"],
  contagious: ["contagious", "spread", "spreading", "can others get", "infect", "infectious", "transmit"],
  doctor: ["doctor", "hospital", "when to go", "should i see", "emergency", "urgent", "serious"],
  test: ["test", "diagnosis", "diagnose", "blood test", "check", "detect", "report"],
};

let lastMatchedTopic = null;

function normalizeAssistantResponse(response) {
  if (typeof response === "string") {
    return {
      reply: response,
      suggestions: [],
      sev: null,
    };
  }

  if (response && typeof response === "object") {
    return {
      reply:
        typeof response.reply === "string"
          ? response.reply
          : typeof response.response === "string"
            ? response.response
            : "",
      suggestions: Array.isArray(response.suggestions) ? response.suggestions : [],
      sev: response.sev || null,
    };
  }

  return {
    reply: "",
    suggestions: [],
    sev: null,
  };
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function detectIntent(text) {
  const normalizedText = normalizeText(text);

  if (!normalizedText) {
    return null;
  }

  return Object.entries(INTENT_MAP).find(([, phrases]) =>
    phrases.some((phrase) => normalizedText.includes(normalizeText(phrase)))
  )?.[0] || null;
}

function buildIntentSection(entry, key) {
  const section = entry?.[key];
  return typeof section === "string" && section.trim() ? section : entry?.response || "";
}

function buildIntentResponse(entry, intent) {
  const topic = entry.name || "this condition";
  const map = {
    symptoms: `Symptoms of ${topic}:\n\n${buildIntentSection(entry, "symptoms")}`,
    duration: `How long ${topic} lasts:\n\n${buildIntentSection(entry, "duration")}`,
    medicine: `Medicines for ${topic}:\n\n${buildIntentSection(entry, "medicine")}\n\n\u2695\uFE0F Consult a doctor before giving medicines to children.`,
    causes: `Causes of ${topic}:\n\n${buildIntentSection(entry, "causes")}`,
    prevention: `How to prevent ${topic}:\n\n${buildIntentSection(entry, "prevention")}`,
    diet: `Diet advice for ${topic}:\n\n${buildIntentSection(entry, "diet")}`,
    contagious: `Is ${topic} contagious?\n\n${buildIntentSection(entry, "contagious")}`,
    doctor: `When to see a doctor for ${topic}:\n\n${buildIntentSection(entry, "doctor")}`,
    test: `Tests used to diagnose ${topic}:\n\n${buildIntentSection(entry, "test")}`,
  };

  return map[intent] || entry.response;
}

function buildEntrySuggestions(entry) {
  const topic = entry?.name || "this condition";

  return [
    `Symptoms of ${topic}`,
    `How long does ${topic} last?`,
    `Medicines for ${topic}`,
    `Diet for ${topic}`,
    `When to see a doctor for ${topic}?`,
    `Is ${topic} contagious?`,
  ];
}

function buildIntentSuggestions(topic) {
  const resolvedTopic = topic || "this condition";

  return [
    `Tell me more about ${resolvedTopic}`,
    `Medicines for ${resolvedTopic}`,
    `How to prevent ${resolvedTopic}`,
    `Is ${resolvedTopic} contagious?`,
    `Diet advice for ${resolvedTopic}`,
    `When to see a doctor for ${resolvedTopic}?`,
  ];
}

function buildEntryResponse(entry, text) {
  const detectedIntent = detectIntent(text);

  if (detectedIntent) {
    return {
      response: buildIntentResponse(entry, detectedIntent),
      suggestions: buildIntentSuggestions(entry?.name),
    };
  }

  return {
    response: entry.response,
    suggestions: buildEntrySuggestions(entry),
  };
}

export default function useChat() {
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const [mode, setMode] = useState("symptom");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [attachedFile, setAttachedFile] = useState(null);
  const [currentSuggestions, setCurrentSuggestions] = useState([]);

  const switchMode = (newMode) => {
    setMode(newMode);
    setError(null);
    setAttachedFile(null);
  };

  const sendMessage = async (text) => {
    const trimmedText = text?.trim() ?? "";
    const activeMode = mode;
    const activeFile = attachedFile;
    const currentHistory = history[activeMode] ?? [];

    if (!trimmedText && !activeFile) {
      return;
    }

    setLoading(true);
    setError(null);
    setCurrentSuggestions([]);
    const userMessage = {
      role: "user",
      content: trimmedText || activeFile.name,
    };
    const fileMessage = activeFile
      ? { role: "file", fileName: activeFile.name }
      : null;
    const nextModeHistory = fileMessage
      ? [...currentHistory, userMessage, fileMessage]
      : [...currentHistory, userMessage];

    setHistory((prevHistory) => ({
      ...prevHistory,
      [activeMode]: nextModeHistory,
    }));

    try {
      const apiMessages = nextModeHistory
        .filter((message) => message.role === "user" || message.role === "assistant")
        .map((message) => ({
          role: message.role,
          content: message.content ?? "",
        }));
      let assistantResponse;
      let suggestions = [];

      if (activeMode === "report") {
        const reportResponse = await sendChatMessage(
          apiMessages,
          MODES[activeMode].system,
          activeFile,
          activeMode
        );
        assistantResponse = reportResponse;
        suggestions = reportResponse?.suggestions || [];
      } else {
        const dataset = selectDataset(activeMode);
        const bestEntry = findBestMatch(trimmedText, dataset);

        if (bestEntry) {
          lastMatchedTopic = bestEntry;
          assistantResponse = buildEntryResponse(bestEntry, trimmedText);
        } else if (lastMatchedTopic) {
          assistantResponse = buildEntryResponse(lastMatchedTopic, trimmedText);
        } else {
          assistantResponse = await sendChatMessage(
            apiMessages,
            MODES[activeMode].system,
            activeFile,
            activeMode
          );
        }

        suggestions = assistantResponse?.suggestions || [];
      }

      const { reply, sev } = normalizeAssistantResponse(assistantResponse);

      if (!reply) {
        throw new Error("The assistant returned an empty response.");
      }

      setHistory((prevHistory) => ({
        ...prevHistory,
        [activeMode]: [
          ...(prevHistory[activeMode] ?? []),
          {
            role: "assistant",
            content: assistantResponse?.response || reply,
            suggestions: suggestions || [],
            sev: sev || null,
            mode: activeMode,
          },
        ],
      }));
      setCurrentSuggestions(suggestions || []);
      setAttachedFile(null);
    } catch (err) {
      setError(err?.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const attachFile = async (fileData) => {
    if (!fileData) {
      setAttachedFile(null);
      return false;
    }

    try {
      setAttachedFile(fileData);
      setError(null);
      return true;
    } catch (err) {
      setAttachedFile(null);
      setError(err?.message || "Failed to read file.");
      return false;
    }
  };

  const clearFile = () => {
    setAttachedFile(null);
  };

  const clearError = () => {
    setError(null);
  };

  return {
    history,
    mode,
    loading,
    error,
    attachedFile,
    currentSuggestions,
    switchMode,
    sendMessage,
    attachFile,
    clearFile,
    clearError,
  };
}
