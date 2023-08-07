import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const createSlider = () => {
  if (document.querySelector('.advantages__slider')) {
    return new Swiper('.advantages__slider', {
      allowTouchMove: isMobile(),
      loop: true,
      slidesPerView: 5,
      spaceBetween: 30,
      navigation: {
        nextEl: '.advantages__next',
        prevEl: '.advantages__prev',
      },
    });
  }
  return null;
};

const addAdvantagesSlider = () => {
  const isValid = () => {
    const desktopWidth = window.matchMedia('(min-width: 1200px)');
    return desktopWidth.matches;
  };

  let swiper;

  if (isValid()) {
    swiper = createSlider();
  }

  window.addEventListener('resize', () => {
    if (isValid()) {
      swiper = createSlider();
    } else {
      if (swiper) {
        swiper.destroy();
        swiper = null;
      }
    }
  });
};

export {addAdvantagesSlider};
