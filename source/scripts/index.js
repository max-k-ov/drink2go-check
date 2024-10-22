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


//делаем слайдер
const nextBtn = document.querySelector('.promo__slider-arrow--next');
const prevBtn = document.querySelector('.promo__slider-arrow--prev');
const slides = document.querySelectorAll('.promo__container');
let changeSlide = 0;

nextBtn.addEventListener('click', () => {

  slides.forEach((slide, index) => {
    if (slide.classList.contains('promo__container-show') === true) {
      changeSlide = index + 1;
      slide.classList.remove('promo__container-show');
    }
  });

  if (changeSlide < slides.length) {
    slides[changeSlide].classList.add('promo__container-show');
  } else {
    changeSlide = 0;
    slides[changeSlide].classList.add('promo__container-show');
  }
});

prevBtn.addEventListener('click', () => {

  slides.forEach((slide, index) => {
    if (slide.classList.contains('promo__container-show') === true) {
      changeSlide = index - 1;
      slide.classList.remove('promo__container-show');
    }
  });

  if (changeSlide < slides.length && changeSlide > -1) {
    slides[changeSlide].classList.add('promo__container-show');
  } else {
    changeSlide = slides.length - 1;
    slides[changeSlide].classList.add('promo__container-show');
  }
});

