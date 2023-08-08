const addVideoPlayer = () => {
  if (document.querySelector('.video')) {
    const root = document.querySelector('.video');
    const button = root.querySelector('button');
    const iframe = `
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${button.dataset.src}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;

    button.addEventListener('click', () => {
      root.innerHTML = iframe;
    }, {once: true});
  }
  return null;
};

export {addVideoPlayer};
