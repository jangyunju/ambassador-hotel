document.addEventListener('DOMContentLoaded', function () {
            // Visual Swiper
            const visualSwiper = new Swiper('.visual-swiper', {
                loop: true,
                effect: 'fade',
                fadeEffect: { crossFade: true },
                speed: 1500,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            // Stay Swiper
            const staySwiper = new Swiper('.stay-swiper', {
                loop: true,
                effect: 'fade',
                fadeEffect: { crossFade: true },
                speed: 1000,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
            });

            // Restaurant Swiper
            const totalRestSlides = 5;
            const restSwiper = new Swiper('.restaurant-swiper', {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 127,
                speed: 600,
                loop: true,
                on: {
                    init: function () {
                        updateRestProgress(this);
                    },
                    slideChange: function () {
                        updateRestProgress(this);
                    },
                },
            });

            function updateRestProgress(swiper) {
                const current = swiper.realIndex + 1;
                const progressPercent = (current / totalRestSlides) * 100;
                document.getElementById('restProgressFill').style.width = progressPercent + '%';
                document.getElementById('restPageNum').textContent = current + ' / ' + totalRestSlides;
            }

            document.getElementById('restPrev').addEventListener('click', function () {
                restSwiper.slidePrev();
            });
            document.getElementById('restNext').addEventListener('click', function () {
                restSwiper.slideNext();
            });
        });
