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

   xhr.open('POST', '/chat', true)
   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
   xhr.send('question=' + chat.value)
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

   xhr.open("GET", '/chat')
   xhr.send()
}

const renderChat = (msg) => {
   const chatList = document.querySelector('#chats')
   const q = document.querySelector('#input-question').value
   chatList.innerHTML +=  `
   <div class="chat-body-user row ">
       <div class="col-auto">
           <div class="chat-body-user-text">
               <p style="margin:5%">${q}</p>
           </div>
       </div>
   </div>`
   setTimeout(()=>{
       chatList.innerHTML += `
       <div id='chat-user' class="chat-body-system row">
            <div class="col-2">
                <div class="avatar rounded-circle">
                    <img src="static/assets/telbot-nobg.png" alt="avatar-bot">
                </div>
            </div>
            <div class="col-8">
                <div class="chat-body-system-text" style="padding:5% 5% 0 5%">
                    <p>${msg.answer}</p>
                </div>
            </div>
        </div>
        `
   }, 3000);
   
}