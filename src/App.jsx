import "./App.css";
import Header from "./components/Header";
import TabBar from "./components/TabBar";
import ChatWindow from "./components/ChatWindow";
import UploadZone from "./components/UploadZone";
import InputBar from "./components/InputBar";
import QuickButtons from "./components/QuickButtons";
import useChat from "./hooks/useChat";
import MODES from "./config/agentModes";

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
    <div className="app-shell">
      <div className="app-frame">
        <Header />
        <TabBar currentMode={activeMode} onSwitch={switchMode} />

        <main className="app-main">
          {error ? (
            <div className="error-banner">
              <span>{error}</span>
              <button
                type="button"
                onClick={clearError}
                aria-label="Dismiss error"
                className="error-banner__dismiss"
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

          <div className="utility-row">
            {showQuickButtons ? (
              <QuickButtons
                questions={quickQuestions}
                suggestions={currentSuggestions}
                loading={loading}
                onSelect={sendMessage}
                mode={activeMode}
              />
            ) : null}

            {activeMode === "report" ? (
              <UploadZone
                attachedFile={attachedFile}
                onFile={attachFile}
                onClear={clearFile}
                mode={activeMode}
              />
            ) : null}

            <div className="disclaimer">
              For informational purposes only. Always consult a real doctor.
            </div>
          </div>
        </main>

        <InputBar onSend={sendMessage} loading={loading} mode={activeMode} />
      </div>
    </div>
  );
}
