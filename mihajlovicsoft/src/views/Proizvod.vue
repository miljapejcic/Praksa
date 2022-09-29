<template>
  <div>
    <Navbar footer="footer" />
    <h2 class="naslov-stripe reveal fade-left">
      <router-link :to="{ name: 'Home' }" class="routerlink"
        >Početna </router-link
      >
      <b-icon icon="chevron-double-right" />
      <router-link class="routerlink" :to="{ name: 'Proizvodi' }"
        > Proizvodi i usluge </router-link
      >
      <b-icon icon="chevron-double-right" /> {{ kategorija.ime }}
      <b-icon icon="chevron-double-right" /> <i>{{ proizvod.naziv }}</i>
    </h2>
    <div class="container">
      <div class="row m-auto reveal fade-bottom">
        <div class="container properties prop-pred">
          <div v-for="p in proizvod.prednosti" :key="p">
            <div class="divic">
              <h3>
                <b-icon icon="star" /><br />
                {{ p }}
              </h3>
            </div>
          </div>
        </div>
        <!-- <img :src="proizvod.slika"/> -->
        <div>
          <img
            class="proizvod"
            :src="require(`@/assets/proizvodi/${proizvod.slika}`)"
          />
          <div class="naziv">{{ proizvod.naziv }}</div>
        </div>
      </div>

      <div class="col-xl-10 info reveal fade-left">
        <img src="../assets/proizvodi/info.png" />
        <div class="paragraf">
          {{ proizvod.opis }}
          <div class="ostalo">
            <br />
            <li v-for="p in proizvod.ostalo" :key="p">{{ p }}</li>
          </div>
        </div>
      </div>

      <div class="container reveal fade-bottom">
        <h3 class="font-lg svojstva"><b-icon icon="inboxes" /> Svojstva:</h3>
        <div class="properties prop-svoj">
          <div v-for="p in proizvod.svojstva" :key="p">
            <div class="paragrafic">
              <b-icon icon="tag" style="color: #fd0101" /> {{ p }}
            </div>
          </div>
        </div>
      </div>

      <div
        class="container paragraf reveal fade-right"
        v-if="proizvod.izvestaji != null"
      >
        <h2 class="font-lg svojstva"><b-icon icon="book" /> Izveštaji:</h2>
        <p class="vestine" v-for="i in proizvod.izvestaji" :key="i">
          <b-icon icon="caret-right-fill" /> {{ i }}
        </p>
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
  border-radius: 1rem;
  box-shadow: 0 0 3rem 1rem rgba(82, 82, 82, 0.15);
  position: relative;
  z-index: 0;
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

.info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: auto;
}

.info img {
  max-width: 100px;
}

.prop-pred {
  justify-content: space-evenly;
}

.prop-svoj {
  justify-content: space-between;
  margin-top: -20px;
  padding: 20px 50px;
}
.svojstva {
  color: #fd0101;
  font-size: 28px;
  text-align: left;
  line-height: 20px;
  padding-left: 10%;
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
  font-size: 17px;
  line-height: 22px;
  font-weight: 600;
  padding: 15px;
  text-align: left;
  max-width: 250px;
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