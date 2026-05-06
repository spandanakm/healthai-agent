const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3001/api/chat";

async function sendMessage(messages, systemPrompt, fileData) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages,
        systemPrompt,
        fileData,
      }),
    });

    if (!response.ok) {
      let errorMessage = `Request failed (${response.status}).`;

      try {
        const errorPayload = await response.json();
        errorMessage = errorPayload.error || errorMessage;
      } catch {
        const errorText = await response.text();
        if (errorText) {
          errorMessage = errorText;
        }
      }

      throw new Error(errorMessage);
    }

    const result = await response.json();
    return result.reply;
  } catch (error) {
    throw new Error(`Failed to send message to chat API: ${error.message}`);
  }
}

export default sendMessage;
