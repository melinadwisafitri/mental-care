
window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        document.querySelector("#navbar-column").style.top = "0"
    } else {
        document.querySelector(".navigation").style.top = "-80px"
    }
}

const btnChat = document.querySelector("#btn-chat");
const btnChatClose = document.getElementById("btn-btn");

btnChat.addEventListener("click", () => {
    document.querySelector("#chatbot-form").style.display = "block";
    document.querySelector("#btn-chat").style.display = "none";
});

btnChatClose.addEventListener("click", () => {
    document.getElementById("chatbot-form").style.display = "none"
    document.querySelector("#btn-chat").style.display = "block";
})


const li = document.querySelectorAll(".links");
const sections = document.querySelectorAll("section");

function activeNav(){
    let len = sections.length;
    while(--len && window.scrollY + 350 < sections[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeNav();
window.addEventListener("scroll", activeNav)

const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigate");
const icon = document.querySelector(".icon");
let open = false;
menu.addEventListener("click", ()=>{
    if (!open){
    menu.classList.add('open');
    open = true
    nav.style.display = "flex";
    icon.style.display = "none"

}else{
    menu.classList.remove('open')
    open = false
    nav.style.display = "none"
    icon.style.display = "flex"
}
})

