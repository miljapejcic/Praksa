<template>
  <div>
    <Navbar footer="footer" />
    <div>
      <h2 class="naslov-stripe reveal fade-left">
        <router-link :to="{ name: 'Home' }" class="routerlink">
          Početna
        </router-link>
        <b-icon icon="chevron-double-right" /><i> Prozvodi i usluge</i>
      </h2>
    </div>
    <div class="container reveal fade-bottom">
      <div class="aplikacije">
        <div class="elementcina" v-for="k in json.kategorije" :key="k.id">
          <img
            class="slikastil"
            :src="require(`@/assets/kategorije/${k.slika}`)"
          />
          <div class="paddin">
            <h3 class="font-lg">{{ k.ime }}</h3>
            <button class="dugme" id="ponude" @click="toggleClass(k.id)" style="width: 190px;">
              Prikaz ponuda <b-icon icon="caret-down" />
            </button>
            <!-- <h3 @click="toggleClass(k.id)">{{k.ime}}</h3> -->
            <div :class="'kat' + k.id" class="noactive" id="ponude">
              <div v-for="proizvod in k.listaProizvoda" :key="proizvod.id">
                <p
                  @click="saljidalje(k.id, proizvod.id)"
                  class="item animate__animated animate__fadeInDown"
                >
                  <b-icon icon="plus-circle-dotted" /> {{ proizvod.naziv }}
                </p>
              </div>
            </div>
          </div>
          <!-- <button class="dugme" @click="kat(k.id)">{{ k }}</button> -->
        </div>
      </div>
    </div>
    <div id="footer">
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
      show: false,
    };
  },
  methods: {
    saljidalje(idkat, idproiz) {
      this.$router.push({
        name: "Proizvod",
        params: { idkat: idkat, idproiz: idproiz },
      });
    },
    toggleClass(idK) {
      let klasa = ".kat" + idK;
      document.querySelector(klasa).classList.toggle("noactive");
      // document.querySelector("imeKat").classList.toggle("noshow");
    },
    showDiv() {
      if (document.querySelector(".noactive").style.display == "block") {
        document.querySelector(".noactive").style.display = "none";
        document.getElementById("ponude").style.backgroundColor = "transparent";
        document.getElementById("ponude").style.color = "#fd0101";
      } else {
        document.querySelector(".noactive").style.display = "block";
        document.getElementById("ponude").style.backgroundColor = "#fd010179";
        document.getElementById("ponude").style.color = "#fff7f7";
      }
    },
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
[class*="kat"] {
  background: transparent;
}
.noactive {
  display: none;
  transition: 1.5s ease;
}

.paddin {
  background: transparent;
  /* border-radius: 15px; */
  padding: 0px 20px;
  /* margin-left: 10px;
  margin-top: 35px; */
  transition: 0.7s ease;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  transition: 0.7s ease;
}

.elementcina {
  display: flex;
  flex-direction: row;
  max-width: 520px;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  margin: 10px;
  box-shadow: 0px 0px 10px 2px rgba(1, 0, 5, 0.204);
  border-radius: 5px;
  background: rgba(255, 245, 242, 0.739);
  transition: 0.7s ease;
}

.elementcina:hover {
  box-shadow: 0px 0px 10px 2px rgba(1, 0, 5, 0.204);
  color: black;
  border-radius: 20px;
  background: rgba(85, 110, 139, 0.323);
  filter: contrast(1.2);
  transition: 0.7s ease;
}

.elementcina:hover > .slikastil {
  transform: rotate(10deg);
  max-width: 40%;
  border-radius: 100%;
  box-shadow: 0px 0px 10px 1px rgba(59, 59, 59, 0.802);
  transition: 1.2s ease;

}
.aplikacije {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

.slikastil {
  max-width: 50%;
  border-radius: 5%;
  transition: 0.6s ease;
}

.item {
  padding: 10px 10px 0x 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  transition: 0.4s ease;
}
.item:hover {
  color: #fd0101;
  transition: 0.4s ease;
  cursor: pointer;
}

@media only screen and (max-width: 1200px) {
  .elementcina {
    max-width: 100%;
    width: 100%;
  }
}

@media only screen and (max-width: 770px) {
  .elementcina {
    max-width: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .elementcina .font-lg {
    padding-top: 10px;
  }
}
</style>
