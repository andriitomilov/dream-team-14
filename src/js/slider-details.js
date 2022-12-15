// Ініціалізація Swiper dishes-slider
var swiper = new Swiper ('.slider-details', {

    // Стрілки
    navigation: {
        nextEl: '.swiper-button-next-details',
        prevEl: '.swiper-button-prev-details'
    },

    // Перемикання при кліку на слайд
    slideToClickedSlide: true,
    // Курсор перетягування
    grabCursor: true,

    // Керування клавіатурою
    keyboard: {
        // Вмикання/вимикання
        enabled: true,
        // Вмикання/вимикання, коли слайдер у вьюпорті
        onlyInViewport: true,
    },

    // Брейк поінти (адаптив)
    // Ширина єкрану
    // slidesPerView - кількість слайдів на екрані
    // spaceBetween - відступ між слайдами
    breakpoints: {
        320: {
            slidesPerView: 'auto',
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 34,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 86,
        }
    },
    
    // стартовий слайд
    //initialSlide: 0,

    // Відключення функціоналу, якщо слайдів меньше ніж треба
    watchOverflow: true,

    // Активний слайд по центру
    centeredSlides: false,

    // Безкінечність
    loop: true,

    // Вмикання/вимикання перетягування на ПК
    simulateTouch: true,
    // Чутливість свайпу 
    touchRatio: 1,

});