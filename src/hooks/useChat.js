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
      const reply = await sendChatMessage(
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
          { role: "assistant", content: reply },
        ],
      }));
      setAttachedFile(null);
    } catch (err) {
      setError(err?.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const attachFile = async (file) => {
    if (!file) {
      setAttachedFile(null);
      return false;
    }

    const isImage = file.type.startsWith("image/");
    const isTextFile =
      file.type.startsWith("text/") ||
      [
        "application/json",
        "application/xml",
      ].includes(file.type) ||
      /\.(txt|csv|md|json|xml)$/i.test(file.name);

    if (!isImage && !isTextFile) {
      setAttachedFile(null);
      setError("Only image and text-based files are supported.");
      return false;
    }

    try {
      const data = await new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          const result = reader.result;
          const nextData =
            isImage && typeof result === "string"
              ? result.split(",")[1] ?? ""
              : result;

          resolve(nextData);
        };

        reader.onerror = () => {
          reject(new Error("Failed to read file."));
        };

        if (isImage) {
          reader.readAsDataURL(file);
          return;
        }

        reader.readAsText(file);
      });

      setAttachedFile({
        file,
        data,
        type: isImage ? "image" : "text",
        mimeType: file.type,
        name: file.name,
      });
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
