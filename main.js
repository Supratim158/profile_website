var typed = new Typed(".text", {
    strings: ["App Developer", "Flutter Developer", "Video Editor"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Smooth scrolling and active link handling
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });

        // Update active class
        document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Image animation on section change
const aboutSection = document.querySelector('#about');
const homeImageContainer = document.querySelector('.home_content_1a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            homeImageContainer.classList.add('active-img');
        } else {
            homeImageContainer.classList.remove('active-img');
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutSection);