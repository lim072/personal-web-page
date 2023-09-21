const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");
const close = menu.querySelector("span");
const visual = document.querySelector(".mainVisual");

menuBtn.addEventListener("click", ()=>{
        menu.style.transform = "rotateY(-350deg)";
        menuBtn.style.opacity = "0"
})
close.addEventListener("click", ()=>{
    menu.style.transform = "rotateY(-90deg)";
    menuBtn.style.opacity = "1"
})