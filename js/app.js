document.getElementById('contact-form').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Por favor, ingresa un email válido.');
        event.preventDefault();  // Evita que se envíe el formulario
    }
});
