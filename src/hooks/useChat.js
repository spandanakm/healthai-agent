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
        activeFile
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

  const attachFile = (file) =>
    new Promise((resolve, reject) => {
      if (!file) {
        setAttachedFile(null);
        resolve();
        return;
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
        const typeError = "Only image and text-based files are supported.";
        setError(typeError);
        reject(new Error(typeError));
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result;
        const data =
          isImage && typeof result === "string"
            ? result.split(",")[1] ?? ""
            : result;

        setAttachedFile({
          file,
          data,
          type: isImage ? "image" : "text",
          mimeType: file.type,
          name: file.name,
        });
        setError(null);
        resolve();
      };

      reader.onerror = () => {
        const fileError = "Failed to read file.";
        setError(fileError);
        reject(new Error(fileError));
      };

      if (file.type.startsWith("image/")) {
        reader.readAsDataURL(file);
        return;
      }

      reader.readAsText(file);
    });

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
