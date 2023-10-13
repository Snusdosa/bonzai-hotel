/*Selectors*/
let header = document.querySelector('.header');
let menuList = document.querySelector('.menu-list');

menuList.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})