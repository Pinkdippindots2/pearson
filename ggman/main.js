// DOM Elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const loader = document.querySelector('.loader');
const filterButtons = document.querySelectorAll('.filter-buttons .btn');
const gameCards = document.querySelectorAll('.game-card');
const faqQuestions = document.querySelectorAll('.faq-question');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialPrev = document.querySelector('.testimonial-prev');
const testimonialNext = document.querySelector('.testimonial-next');
const contactForm = document.getElementById('contactForm');

// Mobile Navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Page Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 1500);
});

// Games Filter
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        gameCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// FAQ Accordion
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

// Testimonial Slider
let currentSlide = 0;

function showSlide(index) {
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    testimonialSlides[index].classList.add('active');
}

testimonialPrev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
    showSlide(currentSlide);
});

testimonialNext.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % testimonialSlides.length;
    showSlide(currentSlide);
});

// Auto slide change
setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonialSlides.length;
    showSlide(currentSlide);
}, 5000);

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    console.log({ name, email, subject, message });
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Scroll Reveal Animation
function scrollReveal() {
    const elements = document.querySelectorAll('.animate-pop-in, .slide-in-left, .slide-in-right, .fade-in');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        }
    });
}

window.addEventListener('scroll', scrollReveal);

// Initialize scroll reveal on page load
window.addEventListener('load', scrollReveal);