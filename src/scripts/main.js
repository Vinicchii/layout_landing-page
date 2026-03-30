'use strict';

const phoneIcon = document.querySelector('.header__content__info__phone');

const tooltip = document.querySelector('.header__content__info__tooltip');

const menuIcon = document.querySelector('.header__content__info__menu');

const closeIcon = document.querySelector('.header__menu__top__close');

phoneIcon.addEventListener('mouseenter', () => {
  tooltip.style.opacity = '1';
  tooltip.style.visibility = 'visible';
});

phoneIcon.addEventListener('mouseleave', () => {
  tooltip.style.opacity = '0';
  tooltip.style.visibility = 'hidden';
});

menuIcon.addEventListener('click', () => {
  const header = document.querySelector('.header__menu');

  header.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  const header = document.querySelector('.header__menu');

  header.style.display = 'none';
});
