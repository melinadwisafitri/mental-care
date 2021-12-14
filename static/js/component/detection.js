class detectionBegin extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <div class="container">
                <h3>Deteksi Dini</h3>
                <hr>
                <div class="row content">
                    <div class="col-sm">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam pariatur facilis architecto accusamus repellat, saepe natus quo id molestias assumenda voluptatem non ipsam fugiat, placeat voluptate aliquam eum vel?</p>
                    </div>
                    <div class="col-sm colors">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam accusamus maxime nesciunt hic impedit delectus! Alias laboriosam eum, maxime libero.</p>
                        <input class="btn btn-warning btn-pill" type="submit" value="Detection">
                    </div>
                </div>
            </div>
        `;
  }
}

customElements.define("detect-begin", detectionBegin);
