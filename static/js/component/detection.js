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
                    <p>Deteksi dini gangguan mental dapat membantu kita untuk mengenali gangguan mental pada diri serta dapat memutuskan langkah untuk pengobatan selanjutnya.</p>
                </div>
                <div class="col-sm colors">
                    <p>Salah satu metode deteksi dini gangguan mental adalah metode kuesioner PHQ-9 (Patient Health Questionnaire-9). PHQ-9  merupakan instrumen psikometri yang paling sering digunakan untuk skrining deteksi dini depresi di fasilitas kesehatan primer..</p>
                    <input class="btn btn-warning btn-pill" type="submit" value="Detection">
                </div>
            </div>
        </div>`;
  }
}

customElements.define("detect-begin", detectionBegin);
