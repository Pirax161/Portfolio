const sections = document.querySelectorAll('section')
const linksNav = document.querySelectorAll('.navigation a')
const header = document.querySelector('.header')
const btnHome = document.querySelector('.btn-home')
const menuIcon = document.querySelector('#menu-burger')
const nav = document.querySelector('.navigation')
const mode = document.querySelector('#mode')

const burgerActive = () => {
    menuIcon.classList.toggle("bx-x")
    nav.classList.toggle("active")
}

const scrollActive = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height){
            linksNav.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`.navigation a[href*=${id}]`).classList.add('active')
            })
        }
    })
}

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .section-title', {origin: 'top'})
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'})
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'})
ScrollReveal().reveal('.home-img, .services-content, .portfolio-box, .contact form', {origin: 'bottom'})

const typed = new Typed('.multiple', {
    //strings: ["Pentesteur", "Consultant en cybersécurité", "Administrateur sécurité"],
    strings: ["Cybersecurity Engineering Student", "Ethical Hacker", "Beginner Pentester", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})

menuIcon.addEventListener('click', burgerActive);
window.addEventListener('scroll', scrollActive);

mode.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    mode.classList.toggle('bx-moon');
    mode.classList.toggle('bx-sun');
});
