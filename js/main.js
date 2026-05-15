document.addEventListener('DOMContentLoaded', function () {

            /* ─── 모바일 드로어 메뉴 ─── */
            const hamburgerBtn = document.getElementById('hamburger-btn');
            const drawerClose  = document.getElementById('drawer-close');
            const drawer       = document.getElementById('mobile-drawer');
            const panel        = document.getElementById('drawer-panel');
            const overlay      = document.getElementById('drawer-overlay');
            const lines        = document.querySelectorAll('.hamburger-line');

            function openDrawer() {
                drawer.classList.remove('pointer-events-none');
                overlay.classList.add('opacity-100');
                overlay.classList.remove('opacity-0');
                panel.classList.remove('-translate-x-full');
                panel.classList.add('translate-x-0');
                // 햄버거 → X 변환
                lines[0].style.transform = 'translateY(0.65rem) rotate(45deg)';
                lines[1].style.opacity   = '0';
                lines[2].style.transform = 'translateY(-0.65rem) rotate(-45deg)';
            }

            function closeDrawer() {
                drawer.classList.add('pointer-events-none');
                overlay.classList.remove('opacity-100');
                overlay.classList.add('opacity-0');
                panel.classList.add('-translate-x-full');
                panel.classList.remove('translate-x-0');
                // X → 햄버거 복원
                lines[0].style.transform = '';
                lines[1].style.opacity   = '';
                lines[2].style.transform = '';
            }

            hamburgerBtn.addEventListener('click', openDrawer);
            drawerClose.addEventListener('click', closeDrawer);
            overlay.addEventListener('click', closeDrawer);
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closeDrawer();
            });


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
