<template>
  <div>
    <Navbar footer="footer" />
    <div class="container elements reveal fade-bottom">
      <div class="row pt-2">
        <h2 class="naslov">PROIZVODI I USLUGE</h2>
      </div>
      <div class="row justify-content-around align-items-center">
        <div class="col-xl-3 paddin " v-for="k in json.kategorije" :key="k.id">
          <img class="slikastil" :src="require(`@/assets/kategorije/${k.slika}`)" />
          <h3 class="naslovstil">{{k.ime}}</h3>
          <!-- <h3 @click="toggleClass(k.id)">{{k.ime}}</h3> -->
          <div :class="'kat'+k.id" class="noactive" style="border-top: rgba(17, 16, 16, 0.664) solid 1px">
              <div v-for="proizvod in k.listaProizvoda" :key="proizvod.id">
              <p class="item" @click="saljidalje(k.id,proizvod.id)">{{proizvod.naziv}}</p>
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
      document.querySelector("imeKat").classList.toggle("noshow");
    }
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};




</script>

<style scoped>


[class*="kat"]{
  background:transparent;
}
.noactive{
  display:none;
}
/* .dugme {
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
} */


.paddin {
  /* background-color: rgba(250, 220, 207, 0.904);
  box-shadow: 0px 0px 4px 4px rgba(250, 220, 207, 0.904); */
  background:transparent;
  border-radius:15px;
  padding-top:10px;
  padding-bottom: 10px;
  margin-left:10px;
  margin-top:35px;
  transition: 0.7s ease;
}

.paddin:hover {
  background-color: rgba(250, 220, 207, 0.904);
  box-shadow: 0px 0px 5px 5px rgba(250, 220, 207, 0.904);
  color:black;
}

.paddin:hover > .noactive{
  display:block;
  padding-top:20px;
}

.slikastil{
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
}
/* .paddin:hover > .noactive.item{
  opacity:0;
  animation:fadeIn 2s ease-in-out forwards;
} */

.naslovstil{
  margin-top: 20px;
}
.item:hover{
  color:rgba(219, 1, 1, 0.918);
  transition:0.2s ease-in-out;
  cursor:pointer;
}
.elements {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
</style>
