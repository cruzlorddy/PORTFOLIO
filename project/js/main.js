import { themeManager, scrollManager, progressManager, formManager } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false
    });

   // Typed.js Initialization
const typedElement = document.querySelector('#typed-text');
if (typedElement) {
    new Typed('#typed-text', {
        strings: ['FullStack Developer', 'Problem Solver', 'n AI Developer'],
        typeSpeed: 100,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
    });
}

// VanillaTilt Initialization with Auto Effect
const tiltElements = document.querySelectorAll("[data-tilt]");
if (tiltElements.length > 0) {
    VanillaTilt.init(tiltElements, {
        max: 15,         // Maximum tilt
        speed: 400,      // Speed of tilt
        glare: true,     // Enable glare effect
        "max-glare": 0.2,// Maximum glare opacity
        gyroscope: true, // Enable gyroscope effect
    });

    // Simulate continuous motion by overriding VanillaTilt's default behavior
    tiltElements.forEach((tiltElement) => {
        let angle = 0;
        const interval = setInterval(() => {
            angle += 1;
            const tiltX = 15 * Math.sin(angle * (Math.PI / 180)); // Oscillates between -15 and 15
            const tiltY = 15 * Math.cos(angle * (Math.PI / 180)); // Oscillates between -15 and 15

            tiltElement.vanillaTilt.setValues({
                tiltX,
                tiltY,
                glare: 0.1 + 0.1 * Math.sin(angle * (Math.PI / 90)), // Oscillating glare
            });
        }, 30); // Adjust speed here
    });
}



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
    // const languageButtons = document.querySelectorAll('.language-btn');
    // const languageInfos = document.querySelectorAll('.language-info');

    // languageButtons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         const language = button.dataset.language;
            
    //         // Update active button
    //         languageButtons.forEach(btn => btn.classList.remove('active'));
    //         button.classList.add('active');
            
    //         // Show selected language info
    //         languageInfos.forEach(info => {
    //             info.classList.remove('active');
    //             if (info.id === language) {
    //                 info.classList.add('active');
    //             }
    //         });
    //     });
    // });
    const languageButtons = document.querySelectorAll('.language-btn');
    const languageInfos = document.querySelectorAll('.language-info');
    
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLanguage = button.dataset.language;
            console.log(`Selected language: ${selectedLanguage}`);
    
            // Update active button
            languageButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
    
            // Show selected language info
            languageInfos.forEach(info => {
                if (info.id === selectedLanguage) {
                    info.classList.add('active');
                } else {
                    info.classList.remove('active');
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