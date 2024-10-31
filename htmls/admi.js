document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('adminForm');
    const messageList = document.getElementById('messageList');
    let messages = JSON.parse(localStorage.getItem('messages')) || [];

    function updateMessageList() {
        messageList.innerHTML = '';
        messages.forEach((msg, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${msg.message}</strong><br>
                Duración: ${msg.duration} segundos
                ${msg.image ? `<br><img src="${msg.image}" class="message-image">` : ''}
                <button onclick="deleteMessage(${index})">Eliminar</button>
            `;
            messageList.appendChild(li);
        });
    }

    function deleteMessage(index) {
        messages.splice(index, 1);
        localStorage.setItem('messages', JSON.stringify(messages));
        updateMessageList();
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = document.getElementById('message').value;
        const duration = document.getElementById('duration').value;
        const imageFile = document.getElementById('image').files[0];

        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const imageData = event.target.result;
                messages.push({ message, duration, image: imageData });
                localStorage.setItem('messages', JSON.stringify(messages));
                updateMessageList();
                form.reset();
            };
            reader.readAsDataURL(imageFile);
        } else {
            messages.push({ message, duration });
            localStorage.setItem('messages', JSON.stringify(messages));
            updateMessageList();
            form.reset();
        }
    });

    updateMessageList();
    window.deleteMessage = deleteMessage;
});