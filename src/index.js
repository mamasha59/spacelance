//import '../node_modules/normalize.css/normalize.css';
import './scss/app.scss';

const burgerMenu = document.querySelector('.header__burger-menu');
const burgerIcon = document.querySelector('.header__burger-button');
const closeBurger = document.querySelector('.header__burger-close');;

 const toggleMenu = function() { //--- тогл бургер меню
    burgerMenu.classList.toggle('header-burger-menu_opened');
}
burgerIcon.addEventListener('click',()=>{
    toggleMenu()
 })
 closeBurger.addEventListener('click', ()=>{
    toggleMenu()
 })