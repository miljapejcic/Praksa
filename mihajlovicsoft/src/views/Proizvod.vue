<template>
  <div>
    <Navbar footer="footer" />
    <h2 class="naslov-stripe animate__animated animate__pulse">
      <router-link :to="{ name: 'Home' }" class="routerlink"
        >Početna
      </router-link>
      <b-icon icon="chevron-double-right" />
      <router-link class="routerlink" :to="{ name: 'Proizvodi' }">
        Proizvodi i usluge
      </router-link>
      <b-icon icon="chevron-double-right" /> {{ kategorija.ime }}
      <b-icon icon="chevron-double-right" /> <i>{{ proizvod.naziv }}</i>
    </h2>
    <div class="full-cont animate__animated animate__fadeIn">
      <img
        class="proizvod"
        :src="require(`@/assets/proizvodi/${proizvod.slika}`)"
      />
      <div class="naziv">{{ proizvod.naziv }}</div>
    </div>
    <div class="container">
      <div class="info animate__animated animate__fadeInUp">
        <img src="../assets/proizvodi/info.png" />
        <div class="paragraf">
          <div class="naslov">{{ proizvod.naziv }}</div>
          {{ proizvod.opis }}
          <div class="ostalo">
            <br />
            <li v-for="p in proizvod.ostalo" :key="p">{{ p }}</li>
          </div>
        </div>
      </div>
    </div>

    <div
      class="full-cont properties prop-pred reveal fade-bottom"
      style="background-color: #fd0101c2; margin-bottom: 0px"
    >
      <div v-for="p in proizvod.prednosti" :key="p">
        <div class="divic">
          <h3>
            <b-icon icon="star" /><br />
            {{ p }}
          </h3>
        </div>
      </div>
    </div>
    <div class="container reveal fade-bottom">
      <h3 class="font-lg svojstva"><b-icon icon="inboxes" /> Svojstva:</h3>
      <div class="properties prop-svoj">
        <div v-for="p in proizvod.svojstva" :key="p">
          <div class="paragrafic">
            <b-icon icon="tag" style="color: #fd0101" />
            {{ p }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="container paragraf reveal fade-right"
      v-if="proizvod.izvestaji != null"
    >
      <div class="borderbottom"></div>
      <h2 class="font-lg svojstva"><b-icon icon="book" /> Izveštaji:</h2>
      <p class="vestine" v-for="i in proizvod.izvestaji" :key="i">
        <b-icon icon="caret-right-fill" /> {{ i }}
      </p>
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
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    proizvodID() {
      return parseInt(this.$route.params.idproiz);
    },
    kategorijaID() {
      return parseInt(this.$route.params.idkat);
    },
    proizvod() {
      var kat = json.kategorije.find(
        (kategorija) => kategorija.id === this.kategorijaID
      );
      var proiz = kat.listaProizvoda.find(
        (proizvod) => proizvod.id === this.proizvodID
      );
      return proiz;
    },
    kategorija() {
      var kat = json.kategorije.find(
        (kategorija) => kategorija.id === this.kategorijaID
      );
      return kat;
    },
  },
};
</script>

<style scoped>
.proizvod {
  width: 100%;
  z-index: 0;
}
.full-cont {
  width: 100%;
  box-shadow: 0px 0px 20px 4px rgba(18, 40, 70, 0.288);
  transition: 0.7s ease;
  margin: -10px 0 50px 0;
  /* color: rgb(233, 233, 233); */
}
.naziv {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1.8rem;
  line-height: 2.4rem;
  position: absolute;
  margin-top: -70px;
  margin-left: 50px;
  color: whitesmoke;
  text-shadow: rgba(11, 11, 11, 0.55) 0.1em 0.05em 0.18em;
  transition: 0.4s ease;
}

.properties {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}

.borderbottom {
  width: 100%;
  margin: 40px 0px;
  border-bottom: 2px solid #fd0101c2;
}

.info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* padding: 10px; */
  margin: auto auto 40px auto;
}

.info img {
  max-width: 100px;
}

.prop-pred {
  justify-content: space-evenly;
  color: rgb(22, 23, 61);
}

.prop-svoj {
  justify-content: space-between;
  align-items: stretch;
  padding: 10px 50px;
}
.svojstva {
  color: #fd0101;
  font-size: 28px;
  text-align: left;
  padding-left: 10%;
  margin-top: 50px;
}

.divic {
  max-width: 350px;
  padding: 15px 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
}

.divic h3 {
  font-size: 24px;
  font-weight: 800;
  transition: 0.4s ease;
}

.ostalo {
  color: #fd0101;
  font-weight: 600;
}

.ostalo li {
  list-style-type: none;
}

.paragrafic {
  font-size: 18px;
  line-height: 22px;
  padding: 10px;
  text-align: left;
  max-width: 270px;
  margin: 10px;
}

.vestine {
  position: relative;
  padding: 5px;
  margin: 0 50px;
}

.vestine::before {
  transform: scaleX(0);
  transform-origin: bottom right;
}

.vestine:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.vestine::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  inset: 0 0 0 0;
  background: radial-gradient(#fff, rgba(255, 228, 217, 1));
  z-index: -1;
  transition: transform 0.3s ease;
}

@media only screen and (max-width: 767px) {
  .naziv {
    font-size: 1.25rem;
    margin-left: 40px;
    margin-top: -50px;
    transition: 0.4s ease;
  }

  .prop-svoj {
    justify-content: space-around;
  }
  .info {
    flex-direction: column;
    padding: 0px;
  }

  .info img {
    display: none;
  }
}

@media only screen and (max-width: 1400px) {
  .divic {
    padding: 5px 20px;
  }
  .divic h3 {
    font-size: 20px;
    transition: 0.4s ease;
  }
}

@media only screen and (max-width: 1200px) {
}
</style>