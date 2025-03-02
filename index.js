// JavaScript.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    const banner = document.querySelector('.banner span');
    banner.addEventListener('animationiteration', () => {
        banner.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    });
});
