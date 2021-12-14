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
    alert("hai")
})