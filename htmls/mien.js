document.addEventListener('DOMContentLoaded', () => {
    const currentMessage = document.getElementById('currentMessage');
    const currentImage = document.getElementById('currentImage');
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    let currentIndex = 0;

    function displayMessage() {
        if (messages.length === 0) {
            currentMessage.textContent = 'No hay mensajes para mostrar.';
            currentImage.style.display = 'none';
            return;
        }

        const message = messages[currentIndex];
        currentMessage.textContent = message.message;
        
        if (message.image) {
            currentImage.src = message.image;
            currentImage.style.display = 'block';
        } else {
            currentImage.style.display = 'none';
        }

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % messages.length;
            displayMessage();
        }, message.duration * 1000);
    }

    displayMessage();
});