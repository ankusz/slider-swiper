import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

const firstSlider = {
    a11y: true,
    autoplay: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

};

new Swiper('.slider-first', firstSlider);