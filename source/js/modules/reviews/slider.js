import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const addReviewsSlider = () => {
  if (document.querySelector('.reviews__slider')) {
    const swiper = new Swiper('.reviews__slider', {
      allowTouchMove: isMobile(),
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
      },
    });
    return swiper;
  }
  return null;
};

export {addReviewsSlider};
