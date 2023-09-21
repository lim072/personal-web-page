const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");
const close = menu.querySelector(".close");
const visual = document.querySelector(".mainVisual");
const meues = menu.querySelectorAll("ul>li");
const visuals = visual.querySelectorAll("section");

meues.forEach((el,index) =>{
    el.addEventListener("click",()=>{
        
        for(let el of visuals){
            el.classList.remove("on");
            visuals[index].classList.add("on");
        }
        menu.style.transform = "rotateY(-90deg)";
        visual.style.transform = "rotateY(0deg)";
        menuBtn.style.opacity = "1"
        visual.style.backgroundColor = "rgba(255, 255, 255, 0)";
    })
})

menuBtn.addEventListener("click", ()=>{
        menu.style.transform = "rotateY(-350deg)";
        menuBtn.style.opacity = "0"
        visual.style.transform = "rotateY(-10deg)";
        visual.style.backgroundColor = "rgba(255, 255, 255, 0.07)";
})
close.addEventListener("click", ()=>{
    menu.style.transform = "rotateY(-90deg)";
    menuBtn.style.opacity = "1"
    visual.style.transform = "rotateY(0deg)";
    visual.style.backgroundColor = "rgba(255, 255, 255, 0)";
})

