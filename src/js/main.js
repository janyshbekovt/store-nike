
let btn = document.querySelector('.header__btn')
let overlay = document.querySelector('.overlay')
let close = document.querySelector('.popup__close')

btn.addEventListener('click', () => {
    overlay.style.display = 'flex'
})

close.addEventListener('click', () => {
    overlay.style.display = 'none'
})
overlay.addEventListener('click', (e) => {
    if (e.target.className === 'overlay') {
        overlay.style.display = 'none'
    }
})
AOS.init();
