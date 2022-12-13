// Ініціалізація Swiper
const swiper = new Swiper ('.hero-slider', {

    // Стрілки
    navigation: {
        nextEl: '#hero-slider-next',
        prevEl: '#hero-slider-prev'
    },

    // Автовисота
    // autoHeight: true,

    // Перемикання при кліку на слайд
    // slideToClickedSlide: true,
    // Курсор перетягування
    // grabCursor: true,

    // Керування клавіатурою
    keyboard: {
        // Вмикання/вимикання
        enabled: true,
        // Вмикання/вимикання, коли слайдер у вьюпорті
        onlyInViewport: true,
    },

    // Кількість слайдів для показу
    slidesPerView: 1,

    // Відключення функціоналу, якщо слайдів меньше ніж треба
    watchOverflow: true,

    // Активний слайд по центру
    centeredSlides: true,

    // Безкінечність
    autoplay: true,
    loop: true,

    // Ефект перемикання слайдерів
    // Зміна прозорості
    effect: 'fade',

    // Перемикання коліщатком миші
    //mousewheel: {
    //    invert: true,
    //  },

    // Вмикання/вимикання перетягування на ПК
    // simulateTouch: true,
    // Чутливість свайпу 
    // touchRatio: 1,

});