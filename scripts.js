// Menu Responsivo
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FAQ
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        button.classList.toggle('active');
        if (button.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = 0;
        }
    });
});

// Alternar entre modelos 3D
function mostrarModelo(idModelo) {
    // Oculta todos os modelos
    document.querySelectorAll('model-viewer').forEach(modelo => {
        modelo.style.display = 'none';
    });

    // Mostra o modelo selecionado
    const modeloSelecionado = document.getElementById(idModelo);
    if (modeloSelecionado) {
        modeloSelecionado.style.display = 'block';
    }
}

// Mostra o modelo completo por padrão ao carregar a página
window.onload = () => {
    mostrarModelo('modelo-tudo');
};

// Carrossel
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function mudarSlide(n) {
    slides[slideIndex].classList.remove('active');
    indicators[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
    indicators[slideIndex].classList.add('active');
}

// Troca automática de slides a cada 5 segundos
setInterval(() => mudarSlide(1), 10000);

// Adiciona animação ao trocar slides
slides.forEach((slide, index) => {
    slide.addEventListener('transitionend', () => {
        if (index === slideIndex) {
            slide.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
        }
    });
});

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de scroll no cabeçalho
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});