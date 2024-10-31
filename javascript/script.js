document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Usuario y contraseña predefinidos
    const adminUser = "admin";
    const adminPassword = "admin123";

    // Verificar si se está intentando acceder a la administración
    if (document.activeElement.textContent === "Administracion") {
        if (username === adminUser && password === adminPassword) {
            window.location.href = "./htmls/admi.html";
        } else {
            messageDiv.textContent = "Usuario o contraseña de administración incorrectos.";
        }
    } else {
        messageDiv.textContent = "Error desconocido.";
    }
});
