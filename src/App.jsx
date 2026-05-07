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
  background: "#0f0f1a",
};

const errorBannerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  padding: "8px 12px",
  background: "#2d1515",
  color: "#fca5a5",
  borderBottom: "1px solid #EF444440",
  fontSize: "12px",
  lineHeight: 1.5,
};

const sectionPaddingStyle = {
  padding: "0 12px",
};

const disclaimerStyle = {
  background: "#0f0f1a",
  color: "#94a3b8",
  fontSize: "10px",
  textAlign: "center",
  padding: "6px",
  letterSpacing: "0.3px",
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
    mode: activeMode,
    loading,
    error,
    attachedFile,
    currentSuggestions,
    switchMode,
    sendMessage,
    attachFile,
    clearFile,
    clearError,
  } = useChat();

  const activeHistory = history[activeMode] ?? [];
  const quickQuestions = MODES[activeMode]?.quick ?? [];
  const showQuickButtons = activeHistory.length === 0;

  return (
    <div style={appStyle}>
      <Header />
      <TabBar currentMode={activeMode} onSwitch={switchMode} />

      {error ? (
        <div style={errorBannerStyle}>
          <span style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
            {error}
          </span>
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

      <ChatWindow
        messages={activeHistory}
        loading={loading}
        mode={activeMode}
        onSuggestionClick={sendMessage}
      />

      {showQuickButtons ? (
        <QuickButtons
          questions={quickQuestions}
          suggestions={currentSuggestions}
          loading={loading}
          onSelect={sendMessage}
          mode={activeMode}
          style={{ padding: "10px 12px 0" }}
        />
      ) : null}

      {activeMode === "report" ? (
        <div style={sectionPaddingStyle}>
          <UploadZone
            attachedFile={attachedFile}
            onFile={attachFile}
            onClear={clearFile}
            mode={activeMode}
          />
        </div>
      ) : null}

      <div style={disclaimerStyle}>
        For informational purposes only. Always consult a real doctor.
      </div>

      <InputBar onSend={sendMessage} loading={loading} mode={activeMode} />
    </div>
  );
}
