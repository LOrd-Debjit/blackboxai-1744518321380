// AI Health Companion - Main Application Logic
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const chatContainer = document.querySelector('.chat-container');
    const messageInput = document.querySelector('input[type="text"]');
    const sendButton = document.querySelector('button');
    const quickReplyButtons = document.querySelectorAll('.bg-gray-200');
    const healthToggle = document.querySelector('input[type="checkbox"]');
    const reportButton = document.querySelector('.bg-indigo-600');
    
    // Emotion tracking data
    const emotions = {
        days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        values: [3, 4, 2, 5, 4, 3, 2] // Sample data (1-5 scale)
    };

    // Initialize chat
    function initChat() {
        // Add welcome message
        addMessage('ai', 'Hello! I\'m your AI Health Companion. How can I help you today?');
    }

    // Add message to chat
    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `mb-4 p-3 rounded-lg max-w-xs ${sender === 'user' ? 'bg-indigo-100 ml-auto' : 'bg-gray-100'}`;
        messageDiv.textContent = text;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Handle user message
    function handleUserMessage() {
        const message = messageInput.value.trim();
        if (message) {
            addMessage('user', message);
            messageInput.value = '';
            
            // Simulate AI response
            setTimeout(() => {
                const responses = [
                    "I understand how you're feeling. Let's work through this together.",
                    "That's an important observation about your health. Would you like to explore this further?",
                    "I'm here to support you. Can you tell me more about what you're experiencing?",
                    "Thank you for sharing. Your wellbeing is important to me."
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addMessage('ai', randomResponse);
            }, 1000);
        }
    }

    // Event Listeners
    sendButton.addEventListener('click', handleUserMessage);
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleUserMessage();
    });

    // Quick reply buttons
    quickReplyButtons.forEach(button => {
        button.addEventListener('click', function() {
            messageInput.value = this.textContent;
            handleUserMessage();
        });
    });

    // Health toggle
    healthToggle.addEventListener('change', function() {
        if (this.checked) {
            addMessage('ai', 'Good Health Mode activated. I\'ll focus on positive reinforcement!');
        } else {
            addMessage('ai', 'Good Health Mode deactivated. I\'ll provide balanced feedback.');
        }
    });

    // Report button
    reportButton.addEventListener('click', function() {
        addMessage('ai', 'Generating your weekly health report...');
        // In a real app, this would generate and display a report
    });

    // Initialize
    initChat();
});
