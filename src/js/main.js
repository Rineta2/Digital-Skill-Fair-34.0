// Marquee
var copy = document.querySelector(".marque-content").cloneNode(true);
document.querySelector(".marque").appendChild(copy);

// Navbar
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__item a');

// Open Menu On Click Hamburger

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

// Remove Menu On Click Close

menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Remove Menu On Click A Href
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});