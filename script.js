let btn=document.querySelector(".menu");
let navbar=document.querySelector(".responsive-navbar")
btn.addEventListener("click",()=>{
    if(navbar.classList.contains("menu_clicked"))
    {
        navbar.classList.remove("menu_clicked")
    }
    else{
        navbar.classList.add("menu_clicked")
    }
})