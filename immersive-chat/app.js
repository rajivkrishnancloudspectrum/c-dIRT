function startPolling() {
  let attempts = 0;

  const interval = setInterval(() => {
    const api = window.embeddedservice_bootstrap?.utilAPI;

    if (api) {
      clearInterval(interval);

      console.log("✅ API Ready");

      // Launch chat automatically
      api.launchChat();

      // Move chat after render
      setTimeout(moveChat, 1200);
    }

    // Timeout (~10 sec)
    if (attempts++ > 50) {
      clearInterval(interval);
      console.warn("❌ API not found");
    }

  }, 200);
}

function moveChat() {
  const container = document.getElementById('chatContainer');

  const frame =
    document.querySelector('iframe.embeddedMessagingFrame') ||
    document.querySelector('iframe[src*="embeddedService"]');

  if (frame && container) {
    console.log("✅ Moving chat");

    container.appendChild(frame);

    setTimeout(() => {
      frame.classList.add('chat-ready');
    }, 100);

  } else {
    console.log("⏳ Retrying...");
    setTimeout(moveChat, 500);
  }
}
