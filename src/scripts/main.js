'use strict';
const phoneIcon = document.querySelector('.header__content__info__phone');
const tooltip = document.querySelector('.header__content__info__tooltip');

phoneIcon.addEventListener('mouseenter', () => {
  tooltip.style.opacity = '1';
  tooltip.style.visibility = 'visible';
});

phoneIcon.addEventListener('mouseleave', () => {
  tooltip.style.opacity = '0';
  tooltip.style.visibility = 'hidden';
});
