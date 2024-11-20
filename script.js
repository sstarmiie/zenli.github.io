// Contador de visitas usando localStorage
document.addEventListener('DOMContentLoaded', () => {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);

    // Mostrar el contador en el pie de página
    const footer = document.querySelector('footer');
    const visitElement = document.createElement('p');
    visitElement.textContent = `Has visitado esta página ${visitCount} ${visitCount === 1 ? 'vez' : 'veces'}.`;
    visitElement.style.fontSize = '14px';
    visitElement.style.color = '#ccc';
    footer.appendChild(visitElement);
});
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200,
        once: true,
        easing: 'ease-in-out',
    });
});
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carrusel Automático 
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    let index = 0;
    const intervalTime = 3000;

    const updateCarousel = () => {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    };

    const nextImage = () => {
        index = (index + 1) % images.length;
        updateCarousel();
    };

    const prevImage = () => {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    };

    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    // Desplazamiento Automático
    let autoSlide = setInterval(nextImage, intervalTime);

    // Detener y reanudar desplazamiento al interactuar
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseover', () => clearInterval(autoSlide));
    carouselContainer.addEventListener('mouseout', () => {
        autoSlide = setInterval(nextImage, intervalTime);
    });
});


// Desplazamiento suave para los enlaces del menú
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Validación básica del formulario de contacto
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    alert('Gracias por contactarnos, pronto te responderemos.');
    contactForm.reset(); // Limpia el formulario después del envío
});
document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    let count = 0;
    const target = 100; // Cambia según tu objetivo
    const duration = 4000; // Duración de la animación en ms
    const increment = target / (duration / 50); // Incremento por frame

    const animateCounter = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(animateCounter);
        }
        counter.textContent = Math.floor(count);
    }, 50);
});
