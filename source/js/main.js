import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import './utils/scroll-lock';

import {addToggleMenu} from './modules/menu/toggle';
import {addHeroSlider} from './modules/hero/slider';
import {addVideoPlayer} from './modules/hero/video';
import {addAudioPlayer} from './modules/hero/audio';
import {addToursSlider} from './modules/tours/slider';
import {addInstructorsSlider} from './modules/instructors/slider';
import {addReviewsSlider} from './modules/reviews/slider';
import {addAdvantagesSlider} from './modules/advantages/slider';
import {addGallerySlider} from './modules/gallery/slider';
import {addContactsMap} from './modules/contacts/map';
import {getHeight} from './modules/hero/indent';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();

    getHeight();

    addToggleMenu();
    addHeroSlider();
    addVideoPlayer();
    addAudioPlayer();
    addToursSlider();
    addInstructorsSlider();
    addReviewsSlider();
    addAdvantagesSlider();
    addGallerySlider();
    addContactsMap();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
