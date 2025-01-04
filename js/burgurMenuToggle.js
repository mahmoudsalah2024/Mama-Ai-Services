// start open burger menu and close//
let closeButton = document.querySelector('.closeButton');
let burgermenuoverlay = document.getElementById('burgermenuoverlay');
let burgermenuToggle= document.getElementById('burgermenuToggle');

closeButton.addEventListener("mousedown", () => {
    burgermenuoverlay.classList.remove('showAnddisplay') ;
});
burgermenuToggle.addEventListener("mousedown", () => {
    burgermenuoverlay.classList.add('showAnddisplay') ;
});
// end open burger menu and close//

const ServicesMenu = document.querySelector('.burgerServicesMenu .nav-link');
ServicesMenu.addEventListener('click', (e) => {
  e.currentTarget.parentElement.classList.toggle('show');
  // close all other dropdown menus
  document.querySelectorAll('.show').forEach(el => {
    if (el !== e.currentTarget.parentElement) {
      el.classList.remove('show');
    }
  });
});

const ServicesSubMenu = document.querySelectorAll('.burgerServices-menu .burgerServices-menu-item');

ServicesSubMenu.forEach(subMenu => {
    subMenu.addEventListener('click', (e) => {
        console.log(subMenu);
        console.log(e.currentTarget.children[1]);
        e.currentTarget.children[1].classList.toggle('show');
    });
});
