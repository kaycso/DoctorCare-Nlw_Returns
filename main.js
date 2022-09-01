window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

}

function showNavOnScroll() {
    const nav = document.getElementById("navigation").classList;
    if (scrollY > 0) {
        nav.add('scroll')
    }else {
        nav.remove("scroll")
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    }else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu () {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 900,
}).reveal(`#home, 
    #home img, 
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content p,
    #about .content img,
    #contact,
    #contact header,
    #contact .content,
    #contact .content img,
    footer`);
