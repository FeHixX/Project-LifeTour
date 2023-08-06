const addToggleMenu = () => {
  const OPENED_CLASS = 'is-opened';
  const root = document.querySelector('.header');
  const container = root.querySelector('.header__container');
  const toggle = root.querySelector('.toggle');
  const nav = root.querySelector('.nav');

  toggle.addEventListener('click', () => {
    if (!toggle.classList.contains(OPENED_CLASS)) {
      container.classList.add(OPENED_CLASS);
      toggle.classList.add(OPENED_CLASS);
      nav.classList.add(OPENED_CLASS);
    } else {
      container.classList.remove(OPENED_CLASS);
      toggle.classList.remove(OPENED_CLASS);
      nav.classList.remove(OPENED_CLASS);
    }
  });
};

export {addToggleMenu};
