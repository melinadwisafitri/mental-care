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

const btn = document.querySelector('#btn-send')
const chat = document.querySelector('#input-question')
const chatList = document.querySelector('#chats')
btn.addEventListener('click', () => {
   console.log("abc")
   const xhr = new XMLHttpRequest();

   xhr.onreadystatechange = () =>{
       if (xhr.readyState == 4){
           getDataChat()
       }
   }

   xhr.open('POST', '/try', true)
   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
   xhr.send('question=' + chat.value)
//    xhr.send(JSON.stringify({question: chat.value}))
   console.log(JSON.stringify({questions: chat.value}))

})

const getDataChat = () => {
   const xhr = new XMLHttpRequest()
   xhr.onload = function() {
       const responseJson = JSON.parse(this.responseText);
       renderChat(responseJson)
       console.log(responseJson)
   }
   xhr.onerror = () => {
       console.log(error)
   }

   xhr.open("GET", '/try')
   xhr.send()
}

const renderChat = (msg) => {
   const chatList = document.querySelector('#chats')
   const q = document.querySelector('#input-question').value
   chatList.innerHTML +=  `<div class="chat-body-user row">
       <div class="col-7">
           <div class="chat-body-user-text">
               <p>${q}</p>
           </div>
       </div>
       <div class="col-2">
           <div class="avatar rounded-circle">
               <img src="static/assets/bot.png" alt="avatar-bot">
           </div>
       </div>
   </div>
   <div id='chat-default' class="chat-body-system row">
       <div class="col-2">
           <div class="avatar rounded-circle">
               <img src="static/assets/bot.png" alt="avatar-bot">
           </div>
       </div>
       <div class="col-7">
           <div class="chat-body-system-text">
               <p>${msg.answer}</p>
       </div>`
}
