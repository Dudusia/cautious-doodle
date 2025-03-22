let headerBackdrop = document.querySelector('.header-backdrop');

const header = document.querySelector('.header');
if (!headerBackdrop) {
  headerBackdrop = document.createElement('div');
  headerBackdrop.classList.add('header-backdrop');
  document.body.insertBefore(headerBackdrop, header);
}

let headerHeight = header.offsetHeight;
headerBackdrop.style.height = `${headerHeight}px`;
console.log({ headerHeight });

function handleScroll() {
  if (window.scrollY > headerHeight) {
    header.classList.add('is-floating');
    headerBackdrop?.classList.add('is-visible');
  } else {
    header.classList.remove('is-floating');
    headerBackdrop?.classList.remove('is-visible');
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });

window.addEventListener(
  'resize',
  () => {
    headerHeight = header.offsetHeight;
    headerBackdrop.style.height = `${headerHeight}px`;
  },
  { passive: true }
);
