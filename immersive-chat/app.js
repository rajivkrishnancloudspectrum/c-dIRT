// Move chat into your container
function moveChatToContainer() {
    const container = document.getElementById('chatContainer');

    const chatElement =
        document.querySelector('.embeddedMessagingFrame') ||
        document.querySelector('.embeddedServiceSidebar') ||
        document.querySelector('embeddedservice-chat-header');

    if (chatElement && container) {
        container.innerHTML = ''; // remove welcome screen
        container.appendChild(chatElement);

        chatElement.classList.add('chat-ready');

        console.log('✅ Chat moved into container');
    } else {
        setTimeout(moveChatToContainer, 300);
    }
}


// ✅ Correct lifecycle handling
window.addEventListener("onEmbeddedMessagingReady", () => {
    console.log("✅ Messaging Ready");

    setTimeout(() => {
        embeddedservice_bootstrap.utilAPI.launchChat()
            .then(() => {
                console.log("✅ Chat launched");

                // 👉 Move ONLY after launch
                setTimeout(moveChatToContainer, 500);
            })
            .catch(err => console.error("Launch failed:", err));
    }, 300);
});
