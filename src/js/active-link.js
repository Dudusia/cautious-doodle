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
      const id = elem.getAttribute('href').split('#')[1];
      containers.forEach(cont => {
        cont?.querySelector(`[href="#${id}"]`).classList.add(activeClass);
      });
    });
  });
})();
