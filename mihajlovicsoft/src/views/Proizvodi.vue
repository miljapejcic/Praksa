<template>
  <div>
    <Navbar footer="footer" />
    <div class="container elements">
      <div class="row pt-2">
        <h2 class="naslov">PROIZVODI I USLUGE</h2>
      </div>
      <div class="row justify-content-around align-items-center">
        <div class="col-xl-3 kategorija" v-for="k in json.kategorije" :key="k.id">
          <h2 @click="toggleClass(k.id)">{{k.ime}}</h2>
          <div :class="'kat'+k.id" class="noactive">
              <div v-for="proizvod in k.listaProizvoda" :key="proizvod.id">
              <li @click="saljidalje(k.id,proizvod.id)">{{proizvod.naziv}}</li>
              </div>
          </div>
          <!-- <button class="dugme" @click="kat(k.id)">{{ k }}</button> -->
        </div>
      </div>
    </div>
    <div id="footer" class="row">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import json from "../json/kategorije.json";

export default {
  name: "Proizvodi",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      json: json,
      show:false
    };
  },
  methods: {
    saljidalje(idkat, idproiz) {
      this.$router.push({ name: "Proizvod", params: { idkat: idkat, idproiz: idproiz } });
    },
    toggleClass(idK){
      let klasa = ".kat"+idK;
      document.querySelector(klasa).classList.toggle("noactive");
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>

.noactive{
  display:none;
}
.dugme {
  border-color: #fd0101;
  border-width: 2px;
  color: #fd0101;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 16px;
  background-color: transparent;
}

.dugme:hover {
  color: #fff7f7;
  border-color: #fff7f7;
  background-color: #fd010179;
}

.kategorija {
  padding-top: 2%;
  padding-left:5%;
}

.elements {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
</style>
