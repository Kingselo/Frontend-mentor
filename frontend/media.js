var menuOpen = document.getElementById('menu-open');
var menuClose = document.getElementById('menu-close');
var nav = document.getElementById("nav");
var overlay = document.getElementById('overlay');

menuOpen.addEventListener('click', () =>{
    nav.style.display = "block";
    menuClose.style.display = "block";
    overlay.style.display = "block";
});
menuClose.addEventListener('click', () =>{
    nav.style.display = "none";
    overlay.style.display = "none";
})