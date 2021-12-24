const getChat = () => {
    const xhr = new XMLHttpRequest()
    xhr.onload = () => {
        const responseJson = JSON.parse(this.responseText)
        showResponseMsg(responseJson.answer);
        renderChat(responseJson)
    }
    xhr.onerror = () =>{
        console.log('failed')
    }

    xhr.open("GET", '/chatbot')
    xhr.send()
}

const sendChat = () => {
    const xhr = new XMLHttpRequest();
    const q = document.querySelector('#input-question')

    xhr.open("POST", '/chatbot')
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    xhr.send('name=' + q.value)
}

const renderChat = (msg) => {
    const chatList = document.querySelector('#chat-user')
    chatList.innerHTML = ''
    msg.forEach(message => {
        chatList.innerHTML += `<div class="chat-body-user row">
        <div class="col-7">
            <div class="chat-body-user-text">
                <p>${message.answer}</p>
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
                <p>my name melbo</p>
        </div>`
    });
}

const showResponseMsg = (msg = 'error') => {
    alert(msg)
}

//document.addEventListener('DOMContentLoaded', () => {
const buttons = document.querySelector('#btn-send')
const question = document.querySelector("#input-question").value

buttons.addEventListener('click', (e)=>{
    e.preventDefault()
    const data = {
        questions: question
    }
    //question.value = ''
    sendChat()
})
//})