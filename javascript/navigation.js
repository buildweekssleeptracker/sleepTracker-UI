
const navigationMenuBtn = document.querySelector(".hamburger");
const navigationBar = document.querySelector(".navigationBar");


navigationMenuBtn.addEventListener("click", () =>{
    navigationMenuBtn.classList.toggle("is-active")
    navigationBar.classList.toggle("showflex")
})

window.addEventListener("scroll", () =>{
    navigationMenuBtn.classList.remove("is-active")
    navigationBar.classList.remove("showflex")
})

