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