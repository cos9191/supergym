// import Swiper bundle with all modules installed
import Swiper from '../../vendor/swiper-bundle';
// import Swiper from '../../vendor/swiper-bundle';

const staffSwiperNode = document.querySelector('.staff__swiper');
const reviewsSwiperNode = document.querySelector('.reviews__swiper');

export const initSwiper = () => {
  if (staffSwiperNode) {
    const staffSwiper = new Swiper('.staff__swiper', { // eslint-disable-line

      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,

      breakpoints: {
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1350: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },

      // Navigation arrows
      navigation: {
        nextEl: '.staff__swiper-button-next',
        prevEl: '.staff__swiper-button-prev',
      },
    });
  }

  if (reviewsSwiperNode) {
    const reviewsSwiper = new Swiper('.reviews__swiper', { // eslint-disable-line

      // Optional parameters
      direction: 'horizontal',
      loop: false,
      autoHeight: true,
      slidesPerView: 1,
      spaceBetween: 2,

      // Navigation arrows
      navigation: {
        nextEl: '.reviews__swiper-button-next',
        prevEl: '.reviews__swiper-button-prev',
      },
    });
  }
};
