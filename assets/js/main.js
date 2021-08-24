"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu__btn')
    const nav = document.querySelector('nav')

    mobileMenuBtn.addEventListener('click' , e => {
        nav.classList.add('show')

        const close = document.createElement('div')

        close.classList.add('close-button')
        close.innerHTML = '✖'
        close.addEventListener('click', e => {
            nav.classList.remove('show')
            nav.removeChild(close)
        })

        nav.appendChild(close)
    })
})