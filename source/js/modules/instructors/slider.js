import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const addInstructorsSlider = () => {
  if (document.querySelector('.instructors__slider')) {
    const swiper = new Swiper('.instructors__slider', {
      allowTouchMove: isMobile(),
      spaceBetween: 30,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: '.instructors__next',
        prevEl: '.instructors__prev',
      },
    });
    return swiper;
  }
  return null;
};


export {addInstructorsSlider};
