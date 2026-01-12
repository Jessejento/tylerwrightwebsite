// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // For now, just show an alert
            // In production, you'd send this to a server/email service
            alert('Thank you for your message! Tyler will get back to you soon.\n\nNote: This is a demo. In production, this would send an email.');

            // Reset form
            contactForm.reset();
        });
    }
});
