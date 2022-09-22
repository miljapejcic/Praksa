<template>
  <div>
    <Navbar footer="footer" />
    <div class="container elements">
      <div class="row pt-2">
        <h2 class="naslov">PROIZVODI I USLUGE</h2>
      </div>
      <div class="row justify-content-around align-items-center">
        <div class="col-xl-3 kategorija" v-for="k in json.ime" :key="k.id">
          <h2>{{k}}</h2>
          <div class="" v-for="proizvod in json.k" :key="proizvod.id">
            <h4></h4>
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
      json: json.kategorije,
    };
  },
  methods: {
    // kat(id) {
    //   this.$router.push({ name: "Proizvod", params: { idkat: idkat, idproiz: idproiz } });
    // },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
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
