class motivationData extends HTMLElement
{
    connectedCallback()
    {
        this.render()
    }

    render()
    {
        this.innerHTML = `
        <div class="bg">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto repudiandae ad ipsum ut, exercitationem architecto ipsa voluptates quisquam, quos iure illo natus accusantium voluptatum quae tenetur aspernatur eius quia obcaecati.</p>
            <p>author</p>
        </div>
        `
    }
}

customElements.define("motiv1-content", motivationData)