const next = document.querySelector(".next");
const frame = document.querySelector(".web");
const articles = frame.querySelectorAll("article");

next.addEventListener("click", () => {
    frame.append(frame.firstElementChild);
})
