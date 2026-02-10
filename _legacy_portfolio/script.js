console.log('Folioblox initialized');

// Simple scroll reveal effect (to be expanded)
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    // Select elements to animate
    const hiddenElements = document.querySelectorAll('.hero-statement, .hero-stats');
    hiddenElements.forEach((el) => observer.observe(el));
});
