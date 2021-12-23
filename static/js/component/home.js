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
                        <h4>______________ world ______________</h4>
                        <h2>KESEHATAN MENTAL</h2>
                        <p>Mental adalah hal-hal yang berkaitan dengan batin dan watak manusia. Dengan kata lain, kesehatan mental adalah kondisi ketika batin dan watak manusia dalam keadaan normal, tentram, dan tenang, sehingga dapat menjalankan aktivitas dan menikmati kehidupan sehari-hari</p>
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