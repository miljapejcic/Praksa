<template>
  <div>
    <Navbar footer="footer" />
      <div class="header-img reveal fade-bottom">
        <div class="font-xl">
          Poverenje, poštovanje i zajednička saradnja predstavljaju suštinu
          uspešnog partnerstva.
        </div>
      </div>
    <div class="container">
      <div class="paragraf reveal fade-left">
        Kao tim koji se neprekidno razvija i uvećava, pozivamo Vas, da stupite u
        kontakt sa nama i proverite, koje su Vaše prilike za boljim poslovanjem.
        Rešenja koja distribuiramo, su proverena rešenja. Iza nas je veliki broj
        zadovoljnih kompanija koje su znale da iskoriste naše znanje i iskustva.
      </div>
      <!-- <img class="header-img" src="../assets/partneri/handshake.jpg"/> -->
      <div
        class="naslov container reveal fade-right"
        style="text-align: center; font-size: 18px; line-height: 29px"
      >
        Poslujemo sa velikim brojem preduzeća, institucija, organizacija i
        drugim pravnim licima od kojih izdvajamo:
      </div>
      <div class="gridcina reveal fade-bottom">
        <div class="gridce" v-for="p in partneri" :key="p.id">
          <img
            class="img-fluid"
            :src="require(`@/assets/partneri/svi/${p.slika}`)"
          />
          <p>{{ p.naziv }}</p>
          <a :href="`${p.link}`" target="_blank"
            >Nastavi na sajt <b-icon icon="arrow-up-right-square" />
          </a>
        </div>
      </div>
    </div>
    <div id="footer"><Footer /></div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import json from "@/json/partneri.json";

export default {
  name: "Partneri",
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      partneri: json.svi,
    };
  },
  computed: {
    proizvod() {
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
.header-img {
  width: 100%;
  padding: 70px;
  margin-top: -5px;
  background: linear-gradient(
      to top,
      rgba(255, 183, 101, 0.22),
      rgba(82, 15, 0, 0.259)
    ),
    url("../assets/partneri/handshake.jpg");
  background-size: cover;
  box-shadow: 0px 0px 30px 8px rgb(254, 220, 205) inset;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  transition: 0.7s ease;
}

.header-img .font-xl {
  color: rgb(243, 185, 185);
  text-shadow: rgba(0, 0, 0, 0.65) 0.07em 0.05em 0.1em;
  font-weight: 600;
  mix-blend-mode: color-dodge;
  transition: 0.7s ease;
}

.gridcina {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
}

.gridce {
  width: 220px;
  margin: 5px 10px;
  padding: 30px;
}

.gridce p {
  padding-top: 20px;
  margin-bottom: 0px;
  font-weight: 600;
}

.gridce a {
  text-decoration: none;
  color: #2c3e50;
  transition: 0.4s ease;
}

.gridce a:hover {
  color: #fd0101;
  transition: 0.4s ease;
}

@media only screen and (max-width: 992px) {
  .header-img {
    padding: 30px;
    transition: 0.7s ease;
  }
  .header-img .font-xl {
    font-size: 30px;
    line-height: 40px;
    transition: 0.7s ease;
  }
}
</style>