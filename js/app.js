const btnV = document.querySelector(".mobile-nav");
const headerV = document.querySelector(".header");

btnV.addEventListener("click", function(){
    headerV.classList.toggle('nav-open')
})