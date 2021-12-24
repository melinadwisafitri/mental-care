const buttons = document.querySelector('#btn-send')
const quest = document.querySelector("#input-question")
const system = document.querySelector('#chat-system')

const user = document.querySelector('#chat-user')
buttons.addEventListener('click', (e) => {

user.innerHTML += `<div class="chat-body-user row">
                    <div class="col-7">
                        <div class="chat-body-user-text">
                            <p>${quest.value}</p>
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
quest.value = ''
fetch('/chatbot')
.then((response) => {
    return response.json();
}).then((text) => {
    console.log('POST ')
    console.log(JSON.stringify(text))
})
})