class aboutChat extends HTMLElement
{
    connectedCallback()
    {
        this.render()
    }

    render()
    {
        this.innerHTML = `
        <section id="about" class="about">
            <div class="bg">
                <h3>about</h3>
                <hr>
                <p> Tellbot merupakan sebuah website yang menyediakan informasi mengenai kesehatan mental. Tellbot juga menyediakan fitur chat yang akan dijawab oleh bot untuk bertanya mengenai kesehatan mental. 
                <br>
                Mengenali kesehatan mental pada diri merupakan salah satu bentuk kepedulian terhadap diri sendiri. Dengan begitu, kita dapat lebih mengenal dan mengontrol diri. 
                </p>
            </div>
        </section>
        `
    }
}

customElements.define("about-content", aboutChat);