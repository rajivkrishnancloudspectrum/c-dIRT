// Move chat into your container
function moveChatToContainer() {
    const container = document.getElementById('chatContainer');

    const chatElements =
        document.querySelector('.embeddedMessagingFrame') ||
        document.querySelector('.embeddedServiceSidebar') ||
        document.querySelector('embeddedservice-chat-header');

    if (chatElements && container) {
        container.appendChild(chatElements);

        // Make it full screen
        chatElements.classList.add('chat-ready');

        console.log('✅ Chat moved into container');
    } else {
        setTimeout(moveChatToContainer, 300);
    }
}

// Run after slight delay
setTimeout(moveChatToContainer, 1000);
