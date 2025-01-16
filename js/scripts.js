// Custom Scripts for Hypnosis Worx Website

// Smooth scrolling for internal navigation links
document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar toggle button for mobile view
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('#navbarNav');

navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});
