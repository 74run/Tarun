document.addEventListener('DOMContentLoaded', function () {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        
        // Toggle between moon and sun icons
        const icon = darkModeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Smooth scrolling with offset for navigation links and "Learn More" button
    const headerHeight = document.querySelector('header').offsetHeight;
    const navLinks = document.querySelectorAll('a.nav-link');
    const learnMoreButton = document.querySelector('.btn[href="#about"]'); // Select Learn More button

    function smoothScroll(targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const targetPosition = targetSection.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Apply smooth scrolling for nav links
    navLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });

    // Apply smooth scrolling for "Learn More" button
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    }

    // Typing effect for welcome text
    const textElement = document.getElementById("typing-text");
    const text = "Tarun Janapati";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    textElement.textContent = "";
    typeEffect();

    // Scroll-based fade-in effect using IntersectionObserver
    const fadeElements = document.querySelectorAll('.fade-in, .timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    fadeElements.forEach((el) => observer.observe(el));

    // Update active link based on scroll position
    const sections = document.querySelectorAll('section');
    function updateActiveLink() {
        let currentSection = '';

        // Determine which section is in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        // Update active link in the navbar
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateActiveLink);

    // Initial scroll position check to set active link
    updateActiveLink();
});


function toggleSkill(element) {
    // Remove active class from other skill circles
    document.querySelectorAll('.skill-circle').forEach((circle) => {
        if (circle !== element) {
            circle.classList.remove('active');
        }
    });
    
    // Toggle active class on clicked skill circle
    element.classList.toggle('active');
}