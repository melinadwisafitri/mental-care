import './rs.js';

class rsList10 extends HTMLElement
{

    set rs10(rs)
    {
        this._rs10 = rs;
        this.render();
    }

    render()
    {
        this.innerHTML = '';
        this._rs10.forEach((rs)=>{
            const item = document.createElement("rs-data");
            item.classList.add("col")
            item.rs10= rs;
            this.appendChild(item)
        })
    }
}

customElements.define("rs-list-10", rsList10)