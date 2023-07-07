
//adding active link to navbar
const sectBtn = document.querySelectorAll(".sect-btn");


//toggle menu
const burger = document.getElementsByClassName("toggle")[0];
const menu = document.getElementsByClassName("sect-nav")[0];

burger.addEventListener("click", () => {
  !menu.classList.contains("on")
    ? menu.classList.add("on")
    : menu.classList.remove("on");
  
});