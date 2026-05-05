import "./App.css";
import Header from "./components/Header";
import TabBar from "./components/TabBar";
import ChatWindow from "./components/ChatWindow";
import UploadZone from "./components/UploadZone";
import InputBar from "./components/InputBar";
import QuickButtons from "./components/QuickButtons";
import useChat from "./hooks/useChat";
import MODES from "./config/agentModes";

const appStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  background: "#FFFFFF",
};

const errorBannerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  padding: "8px 12px",
  background: "#FCEBEB",
  color: "#A32D2D",
  fontSize: "12px",
};

const sectionPaddingStyle = {
  padding: "0 12px",
};

const disclaimerStyle = {
  padding: "10px 16px 6px",
  textAlign: "center",
  fontSize: "10px",
  color: "#667085",
};

const clearButtonStyle = {
  border: "none",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
  fontSize: "14px",
  lineHeight: 1,
  padding: 0,
  flexShrink: 0,
};

export default function App() {
  const {
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
  } = useChat();

  const activeHistory = history[mode] ?? [];
  const quickQuestions = MODES[mode]?.quick ?? [];
  const showQuickButtons = activeHistory.length === 0;

  return (
    <div style={appStyle}>
      <Header />
      <TabBar currentMode={mode} onSwitch={switchMode} />

      {error ? (
        <div style={errorBannerStyle}>
          <span>{error}</span>
          <button
            type="button"
            onClick={clearError}
            aria-label="Dismiss error"
            style={clearButtonStyle}
          >
            {"\u2715"}
          </button>
        </div>
      ) : null}

      <ChatWindow messages={activeHistory} loading={loading} />

      {showQuickButtons ? (
        <QuickButtons
          questions={quickQuestions}
          loading={loading}
          onSelect={sendMessage}
        />
      ) : null}

      {mode === "report" ? (
        <div style={sectionPaddingStyle}>
          <UploadZone
            attachedFile={attachedFile}
            onFile={attachFile}
            onClear={clearFile}
          />
        </div>
      ) : null}

      <div style={disclaimerStyle}>
        For informational purposes only. Always consult a real doctor.
      </div>

      <InputBar onSend={sendMessage} loading={loading} />
    </div>
  );
}
