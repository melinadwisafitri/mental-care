class dataRs extends HTMLElement
{
    connectedCallback()
    {
        this.render()
    }

    render()
    {
        this.innerHTML = `
        <h3>Daftar Lokasi Rumah Sakit di Indonesia</h3>
        <div class="row">
            <div class="col-sm-8">
                <div class="row">
                    <div class="col card-1">
                        <img src="./index_files/bot.png" alt="">
                        <p>rs</p>
                    </div>
                    <div class="col card-1">
                        <img src="./index_files/bot.png" alt="">
                        <p>rs</p>
                    </div>
                    <div class="col card-1">
                        <img src="./index_files/bot.png" alt="">
                        <p>rs</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col card-1">
                        <img src="./index_files/bot.png" alt="">
                        <p>rs</p>
                    </div>
                    <div class="col card-1">
                        <img src="./index_files/bot.png" alt="">
                        <p>rs</p>
                    </div>
                    <div class="col card-1">
                        <img src="./index_files/bot.png" alt="">
                        <p>rs</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus soluta voluptates totam necessitatibus iure ex labore. Maiores sequi eveniet omnis cumque, suscipit, dolores ullam eligendi repellendus architecto voluptas ducimus temporibus?</p>
            </div>
        </div>
        <div class="row">
            <a href="http://127.0.0.1:5500/index.html">read more</a>
        </div>
        `
    }
}

customElements.define("data-rs", dataRs)