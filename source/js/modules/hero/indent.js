const getHeight = () => {
  if (document.querySelector('.header')) {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    const content = hero.querySelector('.hero__content');

    const setHeight = () => {
      hero.style.marginTop = `-${header.offsetHeight}px`;
      content.style.paddingTop = `${header.offsetHeight}px`;
    };

    const observer = new MutationObserver(setHeight);

    observer.observe(header, {
      childList: true,
      subtree: true,
    });

    setHeight();

    window.addEventListener('resize', () => {
      setHeight();
    });
  }
  return null;
};

export {getHeight};
