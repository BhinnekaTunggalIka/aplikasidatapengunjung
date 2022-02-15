<template>
  <section id="base">
    <div class="container">
      <div class="row">
        <!-- trick -->
      </div>
      <div class="kotak pt-4 mt-5">
        <div class="row">
          <div class="col-lg-3">
            <div class="btn1">
              <a href="#" class="btn btn-primary"
                ><img src="../assets/add.png" alt="add img" /><span
                  ><br /><br />Daftar Tamu</span
                ></a
              >
            </div>
          </div>
          <div class="col-lg-9">
            <div class="wadah1">
              <div class="text1">
                <h2>
                  <b><br />Buku Tamu Digital</b>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-3">
            <div class="btn2">
              <a href="#" class="btn btn-primary"
                ><img src="../assets/book.png" alt="book img" /><span
                  ><br /><br />Isi Buku Tamu</span
                ></a
              >
            </div>
            <div class="btn3 mt-4">
              <a href="#" class="btn btn-primary"
                ><img src="../assets/id.png" alt="id img" /><span
                  ><br /><br />Ambil Tanda Pengenal</span
                ></a
              >
            </div>
          </div>
          <div class="col-lg-9">
            <div class="wadah2">
              <div class="text1">
                <h2><b>Visi dan Misi</b></h2>
              </div>
              <div class="content1">
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
                      <img src="../assets/carousel1.jpeg" class="d-block w-100" alt="carousel img 1" />
                    </div>
                    <div class="carousel-item">
                      <img src="../assets/carousel2.jpeg" class="d-block w-100" alt="carousel img 2" />
                    </div>
                    <div class="carousel-item">
                      <img src="../assets/carousel3.jpeg" class="d-block w-100" alt="carousel img 3" />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Base"
};
</script>

<style>
</style>