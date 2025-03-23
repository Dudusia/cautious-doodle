const themeButtons = document.querySelectorAll('.theme-button');

const darkClassName = 'theme-dark';
const themeKey = 'theme';
const themeDarkValue = 'dark';

function updateButtonState(isDark) {
  themeButtons.forEach(themeButton => {
    if (isDark) {
      themeButton.classList.add(darkClassName);
    } else {
      themeButton.classList.remove(darkClassName);
    }
  });
}

themeButtons.forEach(themeButton => {
  themeButton.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains(darkClassName);
    updateButtonState(!isDark);
    if (isDark) {
      themeButton.classList.remove(darkClassName);
    } else {
      themeButton.classList.add(darkClassName);
    }

    document.documentElement.classList.toggle(darkClassName);

    //   TODO uncomment this code to save theme preference in local storage
    if (isDark) {
      localStorage.removeItem(themeKey);
    } else {
      localStorage.setItem(themeKey, themeDarkValue);
    }
  });
});

const isDark = localStorage.getItem(themeKey) === themeDarkValue;
updateButtonState(isDark);
if (isDark) {
  document.documentElement.classList.add(darkClassName);
}
