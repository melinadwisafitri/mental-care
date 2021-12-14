class aboutChat extends HTMLElement
{
    connectedCallback()
    {
        this.render()
    }

    render()
    {
        this.innerHTML = `
        <div class="bg">
            <h3>about</h3>
            <hr>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga corporis dolorum id eos atque officia quos sed. Dignissimos sit eius recusandae temporibus assumenda error rem. Consequuntur earum iure excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente modi adipisci dicta doloribus numquam minima alias illo velit placeat atque quos reiciendis, iure sed, ea doloremque quaerat iste, inventore recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate in repudiandae architecto error mollitia tempora libero a, cumque facere iste, animi molestiae excepturi suscipit cum fugit hic sapiente saepe?</p>
        
        `
    }
}

customElements.define("about-content", aboutChat);