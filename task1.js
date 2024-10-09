document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const registerButtons = document.querySelectorAll('.event button');
registerButtons.forEach(button => {
    button.addEventListener('click', function() {
        const eventTitle = this.parentElement.querySelector('h3').innerText;
        alert(`You have successfully registered for the ${eventTitle}!`);
    });
});


const form = document.querySelector('.form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields before submitting.');
    } else {
        alert('Thank you for your message!');
        
        form.querySelector('input[type="text"]').value = '';
        form.querySelector('input[type="email"]').value = '';
        form.querySelector('textarea').value = '';
    }
});



window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

