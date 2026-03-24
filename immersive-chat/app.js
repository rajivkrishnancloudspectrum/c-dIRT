// ✅ BEST PRACTICE: Use Salesforce Ready Event
window.addEventListener("onEmbeddedMessagingReady", () => {
  console.log("✅ Salesforce Ready Event Fired");

  const api = window.embeddedservice_bootstrap.utilAPI;

  if (api) {
    console.log("🚀 Launching Chat");

    api.launchChat();

    // Move chat after render
    setTimeout(moveChat, 1200);
  }
});

function moveChat() {
  const container = document.getElementById("chatContainer");

  const frame =
    document.querySelector("iframe.embeddedMessagingFrame") ||
    document.querySelector("iframe[src*='embeddedService']");

  if (frame && container) {
    console.log("✅ Moving chat into container");

    container.appendChild(frame);

    setTimeout(() => {
      frame.classList.add("chat-ready");
    }, 100);

  } else {
    console.log("⏳ Retrying iframe...");
    setTimeout(moveChat, 500);
  }
}
