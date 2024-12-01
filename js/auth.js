document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Lógica de autenticación
            console.log('Iniciando sesión con:', email, password);
            // Redirigir al dashboard después de autenticar
            window.location.href = 'dashboard.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Lógica de registro
            console.log('Registrando usuario:', name, email, password);
            // Redirigir al dashboard después de registrar
            window.location.href = 'dashboard.html';
        });
    }
});

