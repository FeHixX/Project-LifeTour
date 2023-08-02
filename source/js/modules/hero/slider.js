import Swiper from '../../vendor/swiper';

const addHeroSlider = () => {
  if (document.querySelector('.hero__slider')) {
    const classSliders = ['first', 'second', 'third'];

    const swiper = new Swiper('.hero__slider', {
      grabCursor: true,
      speed: 300,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: '.hero__pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<button class="hero__pagination-button ${className} type="button" aria-label="Перейти к ${index + 1} слайду"></button>`;
        },
      },
    });

    swiper.on('transitionStart', function (e) {
      const header = document.querySelector('header');
      header.className = `header header--${classSliders[e.realIndex]}-slide`;
    });
    return swiper;
  }
  return null;
};

export {addHeroSlider};
