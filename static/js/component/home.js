class homeMain extends HTMLElement
{
    connectedCallback()
    {
        this.render()
    }

    render()
    {
        this.innerHTML = `
                <div class="row justify-center">
                    <div class="col-sm-8 header-content-title">
                        <h4 style="text-align: center; font-family: &#39;Abel&#39;, sans-serif; font-weight: 700; color: white;">______________ world ______________</h4>
                        <h2>MENTAL HEALTH</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolores enim atque nisi temporibus corrupti animi nesciunt eos quibusdam eius ipsum dolorem velit, hic impedit veritatis nulla, ad, cupiditate modi!</p>
                        <button class="btn btn-warning rounded-pill" style="width: 30%;">
                            <span>
                                START
                            </span>
                        </button>
                    </div>
                </div>
        `
    }
}

customElements.define("header-main", homeMain)