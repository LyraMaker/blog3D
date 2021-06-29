let menu = document.querySelector(".navbar-menu")
document.querySelector(" .navbar-burger").addEventListener("click",function(){
    this.classList.toggle("is-active")
    menu.classList.toggle("is-active")
    menu.classList.toggle("has-background-info-dark")
    menu.classList.toggle("has-text-centered")
    menu.classList.toggle("is-transparent")
})