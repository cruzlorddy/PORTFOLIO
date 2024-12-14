import { themeManager, scrollManager, progressManager, formManager } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false
    });

    // Initialize Typed.js
    const typed = new Typed('#typed-text', {
        strings: ['Software Developer', 'UI/UX Designer', 'Problem Solver'],
        typeSpeed: 100,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });

    // Initialize VanillaTilt
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    });

    // Initialize managers
    themeManager.init();
    scrollManager.init();
    progressManager.init();
    formManager.init();

    // Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function toggleFlip(card) {
    const inner = card.querySelector('.card-inner');
    inner.classList.toggle('turn');
}