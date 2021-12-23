import "../data/hospital.js"

class dataRs extends HTMLElement
{
    set rs10(rs)
    {
        this._rs10 = rs;
        this.render();
    }

    render()
    {
        this.innerHTML = `
        <div class="col">
         <div class="col card-1">
            <img src='${this._rs10.image}' alt="${this._rs10.kota}" style="width:100px">
            <p>${this._rs10.name}</p>
        </div>
        </div>`
    }
}

customElements.define("rs-data", dataRs)