// Contact Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form fields
    if (!name || !email || !message) {
        alert('Please fill in all the fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been received.`);
    document.getElementById('contact-form').reset(); // Reset the form fields
});

// Email Validation Function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Get the target section
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Scroll to the target section smoothly
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for any fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Collapsible Sections for Services
document.querySelectorAll('.collapsible-toggle').forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.service-card'); // Get the parent card
        const content = card.querySelector('.collapsible-content'); // Get the content inside the card

        // Debugging logs
        console.log("Clicked card:", card);
        console.log("Content to expand:", content);
        console.log("Content scroll height:", content.scrollHeight);

        // Close all other collapsible sections
        document.querySelectorAll('.service-card').forEach(item => {
            if (item !== card) {
                item.classList.remove('open');
                item.querySelector('.collapsible-content').style.maxHeight = null;
                item.querySelector('.collapsible-toggle').textContent = "Learn More";
            }
        });

        // Toggle the current card
        card.classList.toggle('open');
        if (content.style.maxHeight) {
            content.style.maxHeight = null; // Collapse if already open
            this.textContent = "Learn More";
        } else {
            // Dynamically set max-height based on content's scroll height
            content.style.maxHeight = content.scrollHeight + "px"; // Expand if closed
            this.textContent = "Show Less";
        }
    });
});

// Testimonials Accordion
document.querySelectorAll('.testimonial-header').forEach(item => {
    item.addEventListener('click', function () {
        const parent = this.parentElement; // Get the parent testimonial item
        const isOpen = parent.classList.contains('open');

        // Close all testimonials first
        document.querySelectorAll('.testimonial-item').forEach(item => item.classList.remove('open'));

        // If it wasn't already open, open the clicked one
        if (!isOpen) {
            parent.classList.add('open');
        }
    });
});

// Show/Hide Back to Top Button
window.addEventListener('scroll', function () {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) { // Show button after scrolling 300px
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});