<template>
  <section id="base">
    <div class="container">
      <div class="wadahluar">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-3">
            <div class="btnadd">
              <button
                type="button"
                class="btn btn-primary"
                style="max-width: 100%"
              >
                <img
                  src="../assets/pertamina-patra-niaga.png"
                  alt="add img"
                  style="max-width: 50%"
                />
              </button>
            </div>
          </div>
          <div class="col">
            <div class="title">
              <h1><b>Buku Tamu Digital</b></h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-3 col-3">
            <div class="btnbook">
              <a href="#/regist">
                <button
                  type="button"
                  class="btn btn-success"
                  style="max-width: 100%"
                >
                  <img
                    src="../assets/book.png"
                    alt="book img"
                    style="max-width: 40%"
                  />
                  <div class="text"><b>Isi Buku Tamu</b></div>
                </button>
              </a>
            </div>
            <div class="btnid">
              <a href="#/checkout">
                <button
                  type="button"
                  class="btn btn-danger"
                  style="max-width: 100%"
                >
                  <img
                    src="../assets/id.png"
                    alt="id img"
                    style="max-width: 40%"
                  />
                  <div class="text"><b>Ambil Tanda Pengenal</b></div>
                </button>
              </a>
            </div>
          </div>
          <div class="col carousel">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../assets/carousel1.jpg" class="d-block w-100" />
                  <div class="layer">
                    <h2>
                      <b><br />Selamat Datang</b>
                    </h2>
                    <h1>di <b>PT. Pertamina Patra Niaga</b></h1>
                    <h1><b>Regional Sumbagsel</b></h1>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="../assets/carousel2.jpeg" class="d-block w-100" />
                  <div class="layer">
                    <h2>
                      <b><br />Visi</b>
                    </h2>
                    <h1>Menjadi perusahaan <b>energi</b></h1>
                    <h1>nasional tingkat <b>dunia</b></h1>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="../assets/carousel3.jpeg" class="d-block w-100" />
                  <div class="layer">
                    <h2><b>Misi</b></h2>
                    <h1>Menjalankan usaha <b>minyak</b>, <b>gas</b>, serta</h1>
                    <h1><b>energi baru</b> dan <b>terbarukan</b> secara</h1>
                    <h1><b>terintegrasi</b>, berdasarkan prinsi-prinsip</h1>
                    <h1>komersial yang <b>kuat</b></h1>
                  </div>
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <i class="fas fa-arrow-circle-left btnleft"></i>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <i class="fas fa-arrow-circle-right btnright"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Base",
};
</script>

<style>
</style>