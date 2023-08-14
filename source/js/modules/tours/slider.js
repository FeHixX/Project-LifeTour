import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const addToursSlider = () => {
  if (document.querySelector('.tours__slider')) {
    return new Swiper('.tours__slider', {
      allowTouchMove: isMobile(),
      breakpoints: {
        0: {
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 100,
        },
        768: {
          centeredSlides: false,
          slidesPerView: 2,
          spaceBetween: 18,
        },
        1200: {
          centeredSlides: false,
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: '.tours__next',
        prevEl: '.tours__prev',
      },
    });
  }
  return null;
};

export {addToursSlider};
