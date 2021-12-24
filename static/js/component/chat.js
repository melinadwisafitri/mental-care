class chatBott extends HTMLElement
{

    connectedCallback()
    {
        this.render()
    }

    render ()
    {
        this.innerHTML = `
        <div class="mt-2 card-form" id='chatbot-form'>
            <div class="chat-container">
                    <nav class="card-header navbar chat-header">
                        <ul class="navbar chat-header-item">
                            <li class="nav-item avatar rounded-circle">
                                <img src="/static/assets/logo-bot.png" alt="avatar-bot">
                            </li>
                            <li class="nav-item chat-header-name">
                                <h4>Tellbot</h4>
                            </li>
                        </ul>
                        <ul class="navbar">
                            <li class="nav-item item">
                                <button class="btn colors-white" id="btn-btn"><i class="fa fa-close"></i></button>
                            </li>
                        </ul>
                    </nav>
                    <div class="chats container">
                            <div class="row" id="default-chats">
                                <div class="col-2">
                                    <div class="avatar rounded-circle">
                                        <img src="/static/assets/telbot-nobg.png" alt="avatar-bot">
                                    </div>
                                </div>
                                <div class="col-7 default-chat">
                                    <p>Hallo selamat datang di chatbot untuk mencari informasi mengenai kesehatan mental</p>
                                </div>
                            </div>
                            <div class="row chat-msg" id="chats"></div>
                    </div>
                    <div class="row btn-chat-bot ">
                        <div class="col-sm">
                            <input class="rounded-pill" style="width:80%" type="text" id="input-question" name="input-question">
                            <button class="btn" id="btn-send"><i class="fa fa-send rounded-circle set-btn"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
        `
    }
}

customElements.define("chat-bot", chatBott)