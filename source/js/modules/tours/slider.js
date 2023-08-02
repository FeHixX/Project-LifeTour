import Swiper from '../../vendor/swiper';

const addToursSlider = () => {
  if (document.querySelector('.tours__slider')) {
    const swiper = new Swiper('.tours__slider', {
      grabCursor: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: '.tours__next',
        prevEl: '.tours__prev',
      },
    });

    return swiper;
  }
  return null;
};


export {addToursSlider};
