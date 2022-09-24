<template>
  <div>
    <Navbar footer="footer" />
      <div>
        <h2 class="font-lg naslov-stripe animate__animated animate__fadeInDown">Naši prozvodi i usluge</h2>
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
            <button class="dugme" id="ponude" @click="toggleClass(k.id)">
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
.elementcina:hover {
  box-shadow: 0px 0px 10px 2px rgba(1, 0, 5, 0.204);
  color: black;
  border-radius: 10px;
  background: radial-gradient(#fff, rgba(248, 215, 202, 0.55));
  transition: 0.7s ease;
}

.elementcina:hover > .slikastil {
  transform: rotate(10deg);
  box-shadow: 0px 0px 10px 1px rgba(59, 59, 59, 0.802);
  transition: 0.8s ease;
}
.aplikacije {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.elementcina {
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  max-width: 520px;
  justify-content: stretch;
  align-items: center;
  padding: 40px;
  margin: 10px;
  transition: 0.7s ease;
}

.slikastil {
  max-width: 30%;
  border-radius: 100%;
  transition: 0.8s ease;

}

.item {
  padding: 10px 10px 0x 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 14px;
  text-align: left;
}
.item:hover {
  color: rgba(219, 1, 1, 0.918);
  transition: 0.2s ease-in-out;
  cursor: pointer;
}


@media only screen and (max-width: 1200px) {
  .elementcina {
    max-width: 100%;
    width:100%;
  }
}


@media only screen and (max-width: 770px) {
  .elementcina {
    max-width: 100%;
    width:100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .elementcina .font-lg {
    padding-top: 10px;
  }
}
</style>
