class footerIndex extends HTMLElement
{
    connectedCallback()
    {
        this.render()
    }
    
    render()
    {
        this.innerHTML = `
        <p>tellbot &copy; 2021</p>
        `
    }
}

customElements.define("footer-index", footerIndex)