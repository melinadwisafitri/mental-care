class Services extends HTMLElement
{
    connectedCallback()
    {
        this.render()
    }
    render()
    {
        this.innerHTML = `
        <section class="container"> 
            <div class="row teams">
                <div class="col-md card bg-warning teams-1">
                    <p class="fa fa-warning p-1"></p>
                    <h5 class="h5-services">Depresi</h5>
                    <p class="p-2">gangguan suasana hati yang menyebabkan penderitanya terus-menerus merasa sedih. Berbeda dengan kesedihan biasa yang berlangsung selama beberapa hari, perasaan sedih pada depresi bisa berlangsung hingga berminggu-minggu atau berbulan-bulan</p>
                </div>
                <div class="col-md card teams-1">
                    <p class="fa fa-warning p-1"></p>
                    <h5 class="h5-services">Skizofrenia</h5>
                    <p class="p-2">gangguan mental yang menimbulkan keluhan halusinasi, delusi, serta kekacauan berpikir dan berperilaku. Skizofrenia membuat penderitanya tidak bisa membedakan antara kenyataan dengan pikirannya sendiri.</p>
                </div>
                <div class="col-md card bg-warning teams-1">
                    <p class="fa fa-warning p-1"></p>
                    <h5 class="h5-services">Bipolar</h5>
                    <p class="p-2">jenis gangguan mental yang ditandai dengan perubahan suasana hati. Penderita gangguan bipolar dapat merasa sangat sedih dan putus asa dalam periode tertentu, kemudian menjadi sangat senang dalam periode yang lain.</p>
                </div>
                <div class="col-md card teams-1">
                    <p class="fa fa-warning p-1"></p>
                    <h5 class="h5-services">Gangguan Kecemasan</h5>
                    <p class="p-2">gangguan mental yang membuat penderitanya merasa cemas dan takut secara berlebihan dan terus menerus dalam menjalani aktivitas sehari-hari. Penderita gangguan kecemasan dapat mengalami serangan panik yang berlangsung lama dan sulit dikendalikan</p>
                </div>
            </div>
        </section>
        `
    }
}

customElements.define("services-data", Services)