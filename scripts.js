// Scroll Reveal Animations
window.addEventListener('scroll', revealElements);

function revealElements() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjusts for fixed navbar height
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dark/Light Mode Toggle
const toggleBtn = document.querySelector('.mode-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Custom Cursor
const customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY}px`;
});

document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('mouseover', () => {
        customCursor.classList.add('hover');
    });
    element.addEventListener('mouseout', () => {
        customCursor.classList.remove('hover');
    });
});

// Parallax Scrolling for Hero Section (Optional)
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});
window.addEventListener('scroll', revealElements);

function revealElements() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}

