export default function Header() {
  return (
    <>
      <header className="app-header">
        <div className="app-header__meta">
          <div aria-hidden="true" className="app-header__icon">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 20.25C11.72 20.25 11.44 20.15 11.22 19.96C6.14 15.61 3 12.73 3 8.98C3 6.08 5.28 3.75 8.12 3.75C9.76 3.75 11.32 4.51 12.3 5.79C13.28 4.51 14.84 3.75 16.48 3.75C19.32 3.75 21.6 6.08 21.6 8.98C21.6 12.73 18.46 15.61 13.38 19.96C13.16 20.15 12.88 20.25 12.6 20.25H12Z"
                fill="white"
                fillOpacity="0.18"
              />
              <path
                d="M4.5 12.25H8.1L9.65 9L11.55 15.1L13.55 11.25H19.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div>
            <div className="app-header__title">HealthAI Agent</div>
            <div className="app-header__subtitle">
              {"Symptom checker \u00B7 Medical Q&A \u00B7 Mental health \u00B7 Reports"}
            </div>
          </div>
        </div>

        <div className="status-pill">Live</div>
      </header>
    </>
  );
}
