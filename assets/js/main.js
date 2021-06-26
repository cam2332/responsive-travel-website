const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.getElementById('nav-link')

if (navLink) {
    navLink.forEach(navLink => navLink.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('show-menu')
        }
    }))
}

window.addEventListener('scroll', () => {
    const header = document.getElementById('header')
    if (this.scrollY >= 100) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
})


let swiper = new Swiper('.discover__container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0
    }
})