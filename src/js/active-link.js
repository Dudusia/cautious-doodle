(function () {
  const containers = [
    document.querySelector('.header-nav-links'),
    document.querySelector('.mobile-nav-links'),
    document.querySelector('.footer-nav-links'),
  ];

  const activeClass = 'is-active';

  function removeActiveClass() {
    containers.forEach(container => {
      const links = container.querySelectorAll(`a`);
      links.forEach(link => {
        link.classList.remove(activeClass);
      });
    });
  }

  containers.forEach(container => {
    container.addEventListener('click', evt => {
      const elem = evt.target;
      removeActiveClass();
      const href = elem.getAttribute('href');
      if (!href || !href.startsWith('#')) {
        return;
      }
      const id = href.split('#')[1];
      containers.forEach(cont => {
        cont?.querySelector(`[href="#${id}"]`).classList.add(activeClass);
      });
    });
  });
})();
