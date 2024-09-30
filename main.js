// Função para o botão "Voltar ao Topo"
window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Formulário de validação
document.querySelector('form').addEventListener('submit', function(event) {
    const email = document.getElementById('email');
    if (!validateEmail(email.value)) {
        alert('Por favor, insira um email válido.');
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
