const addToggleMenu = () => {
  const OPENED_CLASS = 'is-opened';
  const LINK_CLASS = '.nav__link';
  const root = document.querySelector('.header');
  const container = root.querySelector('.header__container');
  const toggle = root.querySelector('.toggle');
  const nav = root.querySelector('.nav');

  const onDocumentKeydown = (evt) => {
    if (evt.key === 'Escape') {
      closeMenu();
    }
  };

  const onClickLink = (evt) => {
    if (evt.target.matches(LINK_CLASS)) {
      closeMenu();
    }
  };

  const isMenu = (evt) => {
    if (evt.target.closest('.header') && evt.target.closest('.toggle') || evt.target.closest('.nav')) {
      evt.preventDefault();
    } else {
      closeMenu();
    }
  };

  const openMenu = () => {
    container.classList.add(OPENED_CLASS);
    toggle.classList.add(OPENED_CLASS);
    nav.classList.add(OPENED_CLASS);
    document.addEventListener('keydown', onDocumentKeydown);
    nav.addEventListener('click', onClickLink);
    document.addEventListener('click', isMenu);
  };

  const closeMenu = () => {
    container.classList.remove(OPENED_CLASS);
    toggle.classList.remove(OPENED_CLASS);
    nav.classList.remove(OPENED_CLASS);
    document.removeEventListener('keydown', onDocumentKeydown);
    nav.removeEventListener('click', onClickLink);
    document.removeEventListener('click', isMenu);
  };

  toggle.addEventListener('click', () => {
    if (!toggle.classList.contains(OPENED_CLASS)) {
      openMenu();
    } else {
      closeMenu();
    }
  });
};

export {addToggleMenu};
