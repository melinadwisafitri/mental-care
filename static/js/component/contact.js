class contactTeam extends HTMLElement
{
    connectedCallback()
    {
        this.render()
    }

    render()
    {
        this.innerHTML =  `
        <section class="container">
                <h3>contact</h3>
                <div class="contact-content container align-items-center">
                    <div class="row" style="height: fit-content; width: 60%;">
                        <div class="col-md card" style="margin: 50px; padding: 2%;" >
                            <img src="/static/assets/melina.JPG" class="card-img-top" alt="melina" style="object-position: top; max-height: 10em; object-fit: cover;">
                            <div class="card-body">
                                <h5 class="card-title">Melina Dwi S.</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div class="row-sm">
                                    <div class="col-sm btn-group" role="group" aria-label="Basic example">
                                        <a href="" class="fa fa-instagram"></a>
                                        <a href="" class="fa fa-linkedin"></a>
                                        <a href="" class="fa fa-envelope"></a>
                                        <wha href="" class="fa fa-whatsapp"></wha>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md card" style="margin: 50px; padding: 2%;">
                            <img src="/static/assets/mega.jpeg" class="card-img-top" alt="" style="object-position: top; max-height: 10em; object-fit: cover;">
                            <div class="card-body">
                                <h5 class="card-title">Mega Dewi G</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div class="row">
                                    <div class="col btn-group" role="group" aria-label="Basic example">
                                        <a href="" class="fa fa-instagram"></a>
                                        <a href="" class="fa fa-linkedin"></a>
                                        <a href="" class="fa fa-envelope"></a>
                                        <a href="" class="fa fa-whatsapp"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        `
    }
}

customElements.define("contact-team", contactTeam)