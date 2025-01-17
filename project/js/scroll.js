// document.addEventListener('DOMContentLoaded', () => {
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             // When element enters viewport
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('show');
//             } else {
//                 // When element leaves viewport
//                 entry.target.classList.remove('show');
//             }
//         });
//     }, {
//         // Customize these options as needed
//         threshold: 0.1, // Percentage of element visibility needed to trigger animation
//         rootMargin: '0px 0px -50px 0px' // Adjusts the effective viewport
//     });

//     // Select all sections you want to animate
//     const sections = document.querySelectorAll('section');
    
//     // Add hidden class and observe each section
//     sections.forEach((section, index) => {
//         section.classList.add('hidden');
//         // Optionally add delay classes
//         section.classList.add(`delay-${(index % 3) + 1}`);
//         observer.observe(section);
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a small delay before adding the show class
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, 100);
            } else {
                // Add delay before hiding to ensure smooth exit
                setTimeout(() => {
                    // Only hide if element is still not intersecting
                    if (!entry.target.isIntersecting) {
                        entry.target.classList.remove('show');
                    }
                }, 200);
            }
        });
    }, {
        threshold: 0.15, // Slightly increased threshold for better timing
        rootMargin: '0px 0px -100px 0px' // Adjusted trigger point
    });

    // Select all sections you want to animate
    const sections = document.querySelectorAll('section');
    
    // Add hidden class and observe each section
    sections.forEach((section, index) => {
        section.classList.add('hidden');
        // Add staggered delays based on position
        section.classList.add(`delay-${(index % 3) + 1}`);
        observer.observe(section);
    });
});