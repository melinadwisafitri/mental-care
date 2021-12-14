class chatBott extends HTMLElement
{

    connectedCallback(){
        this.render()
    }

    render ()
    {
        this.innerHTML = `
        <nav class="card-header navbar chat-header">
        <ul class="navbar chat-header-item">
            <li class="nav-item avatar rounded-circle">
                <img src="/static/assets/logo-bot.png" alt="avatar-bot">
            </li>
            <li class="nav-item chat-header-name">
                <h4>Melbo</h4>
            </li>
        </ul>
        <ul class="navbar">
            <li class="nav-item">
                <a href="index.html" class="fa fa-info"></a>
            </li>
            <li class="nav-item" style="padding-left: 50px;">
                <a href="index.html" class="fa fa-close"></a>
            </li>
        </ul>
    </nav>
    <div class="chat-body">
        <div id="chat-default" class="chat-body-system row">
            <div class="col-2">
                <div class="avatar rounded-circle">
                    <img src="./index_files/bot(1).png" alt="avatar-bot">
                </div>
            </div>
            <div class="col-7">
                <div class="chat-body-system-text">
                    <p>Hallo selamat data di chatbot untuk mencari informasi mengenai kesehatan mental</p>
                </div>
            </div>
        </div>
        <div id="chat-user"></div>
        <div id="chat-system">
    </div>
    <div class="chat-button row">
        <input id="input-question" type="text" class="col">
        <div class="col-1">
            <input type="submit" id="btn-send" value="✔" class="button rounded-circle">
        </div>
    
    </div>
        </div>
        `
    }
}

customElements.define("chat-bot", chatBott)