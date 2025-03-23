let headerBackdrop = document.querySelector('.header-backdrop');

const header = document.querySelector('.header');
if (!headerBackdrop) {
  headerBackdrop = document.createElement('div');
  headerBackdrop.classList.add('header-backdrop');
  document.body.insertBefore(headerBackdrop, header);
}

function getHeaderHeight() {
  return header?.getBoundingClientRect().height;
}

function updateHeaderHeight(height) {
  document.documentElement.style.setProperty(
    'scroll-padding-top',
    `${height + 20}px`
  );
  headerBackdrop.style.height = `${height}px`;
}

let headerHeight = getHeaderHeight();
updateHeaderHeight(headerHeight);

function handleScroll() {
  headerHeight = getHeaderHeight();
  updateHeaderHeight(headerHeight);
  if (window.scrollY > headerHeight) {
    header?.classList.add('is-floating');
    headerBackdrop?.classList.add('is-visible');
  } else {
    header?.classList.remove('is-floating');
    headerBackdrop?.classList.remove('is-visible');
  }
}

function onScroll() {
  requestAnimationFrame(handleScroll);
}

setTimeout(() => {
  window.addEventListener('scroll', onScroll, { passive: true });

  window.addEventListener(
    'resize',
    () => {
      headerHeight = getHeaderHeight();
      updateHeaderHeight(headerHeight);
    },
    { passive: true }
  );

  handleScroll();
}, 300);
