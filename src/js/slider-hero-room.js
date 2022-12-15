// Ініціалізація Swiper
const swiper = new Swiper ('.hero-slider', {

    // Стрілки
    navigation: {
        nextEl: '#hero-slider-next',
        prevEl: '#hero-slider-prev'
    },

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

    // Зміна прозорості
    effect: 'fade',
});