const mainMenuEl = document.querySelector('.main-menu');
const menuBgEl = document.querySelector('.menu-bg');

// console.log(mainMenuEl);   
// console.log(menuBgEl);

mainMenuEl.addEventListener('mouseout', function () {
    menuBgEl.classList.remove('on');
});

mainMenuEl.addEventListener('mouseover', function () {
    menuBgEl.classList.add('on');
});
mainMenuEl.addEventListener('mouseout', function () {
    menuBgEl.classList.remove('on');
    mainMenuEl.classList.remove('on');
});

mainMenuEl.addEventListener('mouseover', function () {
    menuBgEl.classList.add('on');
    mainMenuEl.classList.remove('on');
});


const mobileMenuEl = document.querySelector('.mobile-menu');
const closeMenuEl = document.querySelector('.close');
const mobileBoxEl =document.querySelector('.mobile-box');

mobileMenuEl.addEventListener('click',function(){
mobileBoxEl.classList.add('show');
});
closeMenuEl.addEventListener('click',function(){
    mobileBoxEl.classList.remove('show');
});