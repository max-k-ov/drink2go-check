//меню в header
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

//перевоорачиваем стрелку в select
const sortSelect = document.querySelector('.catalog__sort-select');
const sortCatalog = document.querySelector('.catalog__sort');

sortSelect.addEventListener('click', () => {
  sortCatalog.classList.toggle('active');
});

sortSelect.addEventListener('blur', () => {
  sortCatalog.classList.remove('active');
});
