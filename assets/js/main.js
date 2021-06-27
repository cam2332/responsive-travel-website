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

const videoFile = document.getElementById('video-file')
const videoButton = document.getElementById('video-button')
const videoIcon = document.getElementById('video-icon')

videoButton.addEventListener('click', () => {
    if (videoFile.paused) {
        videoFile.play()

        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else {
        videoFile.pause()

        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
})

videoFile.addEventListener('ended', () => {
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
})

window.addEventListener('scroll', () => {
    const scrollUp = document.getElementById('scroll-up')
    if (this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
})

const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
})