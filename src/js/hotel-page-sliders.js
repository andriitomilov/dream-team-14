let swiper = new Swiper ('.doubleluxe-slider', {

    // Стрілки
    navigation: {
        nextEl: '#button-next-doubleluxe',
        prevEl: '#button-prev-doubleluxe'
    },

    // З якого слайду починається показ
    initialSlide: 1,
    
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
                spaceBetween: 16,
            },
            414: {
                slidesPerView: 'auto',
                spaceBetween: 16,
            },
            458: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
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