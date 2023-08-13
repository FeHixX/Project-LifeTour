import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const addGallerySlider = () => {
  if (document.querySelector('.gallery__slider')) {
    return new Swiper('.gallery__slider', {
      allowTouchMove: isMobile(),
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
      },
    });
  }
  return null;
};

export {addGallerySlider};
