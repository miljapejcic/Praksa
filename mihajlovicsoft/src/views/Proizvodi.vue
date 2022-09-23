<template>
  <div>
    <Navbar footer="footer" />
    <div class="container elements reveal fade-bottom">
      <div class="row pt-2">
        <h2 class="naslov">PROIZVODI I USLUGE</h2>
      </div>
      <div class="row justify-content-around align-items-center">
        <div class="col-xl-3 paddin " v-for="k in json.kategorije" :key="k.id">
          <h3 class="mouse-cursor-gradient-tracking" @click="toggleClass(k.id)">{{k.ime}}</h3>
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
    let btn = document.querySelector('.mouse-cursor-gradient-tracking');
    btn.addEventListener('mousemove', e => {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      btn.style.setProperty('--x', x + 'px');
      btn.style.setProperty('--y', y + 'px');
    });
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

.elements {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}









/* OVO JE BIO NEKI POKUSAJ NEUSPELI */

/* .mouse-cursor-gradient-tracking {
  position: relative;
  background: transparent;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border: none;
  color:rgb(41, 35, 35);
  cursor: pointer;
  outline: none;
  overflow: hidden;
} */

/* .mouse-cursor-gradient-tracking span {
  position: relative;
} */

/* .mouse-cursor-gradient-tracking:before {
  --size: 0;
  content: '';
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle closest-side, rgb(255, 238, 231), transparent);
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease;
}

.mouse-cursor-gradient-tracking:hover:before {
  --size: 600px;
} */
</style>
