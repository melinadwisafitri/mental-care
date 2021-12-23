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
                    <p class="fa fa-instagram"></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit totam assumenda ab laboriosam dolorem consequuntur laudantium. .</p>
                </div>
                <div class="col-md card teams-1">
                    <p class="fa fa-instagram"></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit totam assumenda ab laboriosam dolorem consequuntur laudantium.</p>
                </div>
                <div class="col-md card bg-warning teams-1">
                    <p class="fa fa-instagram"></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit totam assumenda ab laboriosam dolorem consequuntur laudantium.</p>
                </div>
                <div class="col-md card teams-1">
                    <p class="fa fa-instagram"></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit totam assumenda ab laboriosam dolorem consequuntur laudantium.</p>
                </div>
            </div>
        </section>
        `
    }
}

customElements.define("services-data", Services)