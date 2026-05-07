import { useState } from "react";
import MODES from "../config/agentModes";
import sendChatMessage from "../services/claudeApi";

const INITIAL_HISTORY = {
  symptom: [],
  qa: [],
  mental: [],
  report: [],
};

export default function useChat() {
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const [mode, setMode] = useState("symptom");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [attachedFile, setAttachedFile] = useState(null);

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
      const { reply, sev } = await sendChatMessage(
        nextModeHistory
          .filter((message) => message.role === "user" || message.role === "assistant")
          .map((message) => ({
            role: message.role,
            content: message.content ?? "",
          })),
        MODES[activeMode].system,
        activeFile,
        activeMode
      );

      setHistory((prevHistory) => ({
        ...prevHistory,
        [activeMode]: [
          ...(prevHistory[activeMode] ?? []),
          {
            role: "assistant",
            content: reply,
            sev: sev || null,
            mode: activeMode,
          },
        ],
      }));
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
    switchMode,
    sendMessage,
    attachFile,
    clearFile,
    clearError,
  };
}
