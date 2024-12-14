import { themeManager, scrollManager, progressManager, formManager } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false
    });

    // Initialize Typed.js
    new Typed('#typed-text', {
        strings: ['Software Developer', 'UI/UX Designer', 'Graphics/video Editor'],
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

    // Navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('hidden');
    });

    // Hide navigation when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
            nav.classList.add('hidden');
        }
    });

    // Programming Language Selector
    const languageButtons = document.querySelectorAll('.language-btn');
    const languageInfos = document.querySelectorAll('.language-info');

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const language = button.dataset.language;
            
            // Update active button
            languageButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show selected language info
            languageInfos.forEach(info => {
                info.classList.remove('active');
                if (info.id === language) {
                    info.classList.add('active');
                }
            });
        });
    });

    



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
    // drag down arrow
    document.querySelectorAll('.scroll-down').forEach((arrow) => {
        arrow.addEventListener('click', () => {
            const nextSection = arrow.closest('section').nextElementSibling;
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});