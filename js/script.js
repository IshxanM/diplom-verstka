
/***********************БУРГЕР МЕНЮ */
const menu = document.querySelector('.menu_body');
const menuBtn = document.querySelector('.menu-icon');
const body = document.body

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        body.classList.toggle('lock');

    })
    menu.querySelectorAll('.menu_link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
            body.classList.remove('lock');
        })
    })
}





/******************************DROPDOWN***/
// const filter = document.querySelector('.filter');

// if (filter) {
//     const items = filter.querySelectorAll('.block-filter')

//     items.forEach(item => {
//         item.addEventListener('click', event => {
//             item.querySelector('.block-filter__dropdown').classList.toggle('_active');
//             item.querySelector('.block-filter__icon').classList.toggle('_active');

//             if (event.target.classList.contains('block-filter__item')) {
//                 item.querySelector('.block-filter__value').textContent = event.target.textContent;
//             }
//         })
//     })
// }
/**********************swiper */
// const popularSlider = new Swiper('.popular_slider', {
//     spaceBetween: 20,
//     slidesPerView: 1,

//     navigation: {
//         nextEl: '.popular-slider-next',
//         prevEl: '.popular-slider-prev',
//     },
//     breakpoints: {
//         992: {
//             slidesPerView: 3,
//         },
//         660: {
//             slidesPerView: 2,
//         }
//     }

// });
// const reviewsSlider = new Swiper('.slider-reviews', {
//     spaceBetween: 20,
//     slidesPerView: 1,
//     loop: true,
//     autoheight: true,
//     navigation: {
//         nextEl: '.slider-reviews-next',
//         prevEl: '.slider-reviews-prev',
//     },

// });
// const galleryItems = document.querySelectorAll('.gallery_item');
// if (galleryItems.length > 0) {
//     galleryItems.forEach(item => {
//         new Swiper(item, {
//             slidesPerView: 1,
//             autoplay: {
//                 delay: 5000,
//             },
//             effect: 'fade',
//         })
//     })
// }
const swiper = new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,

    },
    slidesPerView: 0,
    spaceBetween: 10,
    breakpoints: {
        1000: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 4,
        },
        720: {
            slidesPerView: 4,
        },
        660: {
            slidesPerView: 3.3,
        },
        460: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1.5,
        }
    }

});

const swiperCold = new Swiper(".swiper-cold", {
    spaceBetween: 50,
    slidesPerView: 4,
    loop: true,
    parallax: true,
    breakpoints: {

        180: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
        370: {
            slidesPerView: 1.3,
        },

        660: {
            slidesPerView: 2.1,
        },
        709: {
            slidesPerView: 2.1,
        },
        1050: {
            slidesPerView: 3.1,
        },
        1200: {
            slidesPerView: 4.1,
        },

    }

});

const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
})

// const swipeDrag = document.querySelector('.swiper-scrollbar-horizontal');
// console.log(typeof swipeDrag)

// swipeDrag.style.opacity = "1"