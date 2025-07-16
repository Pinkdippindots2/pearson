// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Initialize counter animation when scrolled to
function initCounters() {
    const statsSection = document.querySelector('.stats');
    const statsPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (statsPosition < screenPosition) {
        animateCounters();
        window.removeEventListener('scroll', initCounters);
    }
}

window.addEventListener('scroll', initCounters);

// Staggered Animations
function applyStaggeredAnimations() {
    const elements = document.querySelectorAll('[class*="delay-"]');
    
    elements.forEach(element => {
        const classes = element.className.split(' ');
        const delayClass = classes.find(cls => cls.startsWith('delay-'));
        
        if (delayClass) {
            const delay = delayClass.split('-')[1];
            element.style.animationDelay = `${delay * 0.2}s`;
        }
    });
}

// Initialize all animations
function initAnimations() {
    applyStaggeredAnimations();
    
    // Add hover effects
    const hoverZoomElements = document.querySelectorAll('.hover-zoom');
    hoverZoomElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.classList.add('hover-zoom');
        });
    });
    
    const hoverRotateElements = document.querySelectorAll('.hover-rotate');
    hoverRotateElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.classList.add('hover-rotate');
        });
    });
    
    // Floating animation for elements with .floating class
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach(el => {
        el.style.animation = 'floating 3s ease-in-out infinite';
    });
    
    // Rotate animation for elements with .rotate class
    const rotateElements = document.querySelectorAll('.rotate');
    rotateElements.forEach(el => {
        el.style.animation = 'rotate 2s linear infinite';
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initAnimations);