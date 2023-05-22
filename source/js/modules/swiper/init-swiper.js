// import Swiper bundle with all modules installed
import Swiper from '../../vendor/swiper-bundle';

const staffSwiperNode = document.querySelector('.staff__swiper');
const reviewsSwiperNode = document.querySelector('.reviews__swiper');

export const initSwiper = () => {
  if (staffSwiperNode) {
    const staffSwiper = new Swiper('.staff__swiper', {

      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 2,

      breakpoints: {
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  if (reviewsSwiperNode) {
    const reviewsSwiper = new Swiper('.reviews__swiper', {

      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoHeight: true,
      slidesPerView: 1,
      spaceBetween: 2,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
};

// if (staffSwiperNode) {
//   (() => new Swiper('.staff__swiper', {
//
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 1,
//     spaceBetween: 2,
//
//     breakpoints: {
//       // when window width is >= 768px
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 30,
//       },
//       // when window width is >= 1200px
//       1200: {
//         slidesPerView: 4,
//         spaceBetween: 40,
//       },
//     },
//
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   }))();
// }
//
// if (reviewsSwiperNode) {
//   (() => new Swiper('.reviews__swiper', {
//
//     // Optional parameters
//     direction: 'horizontal',
//     loop: false,
//     autoHeight: true,
//     slidesPerView: 1,
//     spaceBetween: 2,
//
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   }))();
// }
