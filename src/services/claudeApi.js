const API_URL = process.env.REACT_APP_API_URL || "/api/chat";

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
      const responseText = await response.text();

      if (responseText) {
        try {
          const errorPayload = JSON.parse(responseText);
          errorMessage = errorPayload.error || errorMessage;
        } catch {
          errorMessage = responseText;
        }
      }

      throw new Error(errorMessage);
    }

    const result = await response.json();
    return result.reply;
  } catch (error) {
    throw new Error(error?.message || "Failed to send message.");
  }
}

export default sendMessage;
