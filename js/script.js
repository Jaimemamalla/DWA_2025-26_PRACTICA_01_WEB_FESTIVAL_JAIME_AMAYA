//MENU HAM

const burger = document.querySelector('.burger i');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
});

//MODAL 
