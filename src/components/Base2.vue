<template>
  <section id="base2">
    <div class="container">
      <div class="wadahluar">
        <div class="row">
          <div class="col">
            <div class="title">
              <h1><b>Buku Tamu Digital</b></h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7 wadahkiri">
            <form>
              <div class="row mt-4">
                <label for="inputNama" class="col-sm-4 col-form-label"
                  >Nama</label
                >
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="inputNama" />
                </div>
              </div>
              <div class="row mt-2">
                <label for="inputAlamat" class="col-sm-4 col-form-label"
                  >Alamat</label
                >
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="inputAlamat" />
                </div>
              </div>
              <div class="row mt-2">
                <label for="inputFungsi" class="col-sm-4 col-form-label"
                  >Fungsi yang dikunjungi</label
                >
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="inputFungsi" />
                </div>
              </div>
              <div class="row mt-2">
                <label for="inputNamaF" class="col-sm-4 col-form-label"
                  >Nama yang dikunjungi</label
                >
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="inputNamaF" />
                </div>
              </div>
              <div class="row mt-2">
                <label for="inputKeperluan" class="col-sm-4 col-form-label"
                  >Keperluan</label
                >
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="inputKeperluan" />
                </div>
              </div>
              <div class="row mt-2">
                <label for="inputId" class="col-sm-4 col-form-label"
                  >ID Visitor</label
                >
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="inputId" />
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-1 mt-3">
            <div class="d-flex garis" style="height: 400px">
              <div class="vr"></div>
            </div>
          </div>
            <div class="col-lg-1 ">
              <button type="button" class="btn btn-secondary">Secondary</button>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: "Base2",
};
</script>

<style>
</style>