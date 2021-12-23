class motivationData extends HTMLElement
{
    connectedCallback()
    {
        this.render()
    }

    render()
    {
        this.innerHTML = `
        <div class="motivation">
            <div class="bg">
                <p>“Out of suffering have emerged the strongest souls, the most massive characters are seared with scars.”
                </p>
                <p><i>— Khalil Gibran<i></p>
            </div>
        </div>
        `
    }
}

customElements.define("motiv1-content", motivationData)