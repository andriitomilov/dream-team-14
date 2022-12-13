// Ініціалізація Swiper rest-slider
var swiper = new Swiper ('.rest-slider', {

    // Стрілки
    navigation: {
        nextEl: '#button-next-rest',
        prevEl: '#button-prev-rest'
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
                slidesPerView: 1.3,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 40,
            }
        },
    
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


// Ініціалізація Swiper dishes-slider
var swiper = new Swiper ('.dishes-slider', {

    // Стрілки
    navigation: {
        nextEl: '#button-next-dishes',
        prevEl: '#button-prev-dishes'
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

// Ініціалізація Swiper hotel-slider
var swiper = new Swiper ('.hotel-slider', {

    // Стрілки
    navigation: {
        nextEl: '#button-next-hotel',
        prevEl: '#button-prev-hotel'
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
                slidesPerView: 1.3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1280: {
                slidesPerView: 2,
                spaceBetween: 65,
            }
        },
    
        // Відключення функціоналу, якщо слайдів меньше ніж треба
        watchOverflow: true,
    
        // Активний слайд по центру
        centeredSlides: false,
    
        // Безкінечність
        loop: true,
    
        // Вмикання/вимикання перетягування на ПК
        simulateTouch: true,
        // Чутливість свайпу 
        //touchRatio: 1,
    
    });