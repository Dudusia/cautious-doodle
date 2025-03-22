const contents = [
  document.querySelector('header'),
  document.querySelector('main'),
  document.querySelector('footer'),
];
const menuButton = document.querySelector('.burger-menu-button');

// Mobile menu
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCloseButton = document.querySelector('.btn-mobile-menu-close');

function onToggleContentFilter(active) {
  contents.forEach(content => {
    content.style.filter = active ? 'blur(3px)' : '';
  });
}

menuButton.addEventListener('click', () => {
  mobileMenuOverlay.classList.add('is-open');
  onToggleContentFilter(true);
});

function onClose() {
  mobileMenuOverlay.classList.remove('is-open');
  onToggleContentFilter(false);
}

menuCloseButton.addEventListener('click', onClose);
mobileMenuOverlay.addEventListener('click', onClose);

mobileMenuOverlay.addEventListener(
  'touchstart',
  e => {
    if (e.target === mobileMenuOverlay || e.target === mobileMenu) {
      e.stopPropagation();
      e.preventDefault();
    }
  },
  { passive: true }
);
