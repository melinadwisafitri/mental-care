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
         <div class="card-1" style="padding:0.5em">
            <img src='${this._rs10.image}' alt="${this._rs10.kota}">
            <p>${this._rs10.name}</p>
        </div>
        `
    }
}

customElements.define("rs-data", dataRs)