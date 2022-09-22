<template>
  <div>
    <Navbar footer="footer" />
    <div class="container opala">
      <div class="container-2-xl m-auto">
        <!-- <img :src="proizvod.slika"/> -->
        <div class="proizvod">
          <img
            class="slika-proizvod"
            src="../assets/proizvodi/finansijsko.jpg"
          />
        </div>
      </div>
      <div class="row">
        <h1>{{ proizvod.naziv }}</h1>
      </div>
    </div>
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import json from "../json/kategorije.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "Proizvod",
  components: {
    Navbar,
    Footer,
  },
  computed: {
    proizvodID() {
      return parseInt(this.$route.params.idproiz);
    },
    kategorijaID() {
      return parseInt(this.$route.params.idkat);
    },
    proizvod() {
      console.log(this.kategorijaID);
      var kat = json.kategorije.find(
        (kategorija) => kategorija.id === this.kategorijaID
      );
      var proiz = kat.listaProizvoda.find(
        (proizvod) => proizvod.id === this.proizvodID
      );
      return proiz;
    },
  },
};
</script>

<style scoped>
.opala {
  background-repeat: no-repeat;
  background-size: 30rem;
  background-position-y: bottom;
  padding: 1rem 0 9rem 0;
}

.container-2-xl {
  max-width: 96rem;
  padding: 0 2.5rem;
}

.slika-proizvod {
  width: 100%;
  border-radius: 1rem;
}

.slika-proizvod img {
  z-index: -1;
  display: block;
}

.proizvod {
  border-radius: 1rem;
  position: relative;
  display: inline-block;
  z-index: 1;
  /* background: linear-gradient(to right, #00213e, transparent); */
  display: inline-block;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  ); /* W3C */
}
</style>