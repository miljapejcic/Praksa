<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xl-12 justify-content-center naslov">Naši partneri</div>
        <div class="row justify-content-around align-items-center">
          <div class="col-xl-5">
            <VueHorizontal responsive>
              <div
                class="d-flex align-items-center justify-content-center"
                v-for="p in partneri"
                :key="p.slika"
              >
                <img class="img-fluid" v-bind:src="p.slika" />
              </div>
            </VueHorizontal>
          </div>
          <div class="col-xl-5">
            <p class="text-justify paragraf">
              Iskren i otvoren odnos, poverenje, poštovanje i saradnja
              predstavljaju suštinu uspešnog partnersta. Kao tim koji se
              neprekidno razvija i uvećava, pozivamo Vas da stupite u kontakt sa
              nama i proverite koje su Vaše prilike za boljim poslovanjem. Rešenja
              koja distribuiramo su proverena rešenja. Iza nas je veliki broj
              zadovoljnih kompanija koje su znale da iskoriste naše znanje i
              iskustva. Ukoliko se prepoznajete u navedenim delatnostima, Vaš se
              uspeh ne dovodi u pitanje. <i>Postanite naš PARTNER!</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import VueHorizontal from "vue-horizontal";

export default {
  name: "PartneriHome",
  components: {
    VueHorizontal,
  },
  data() {
    return {
      partneri: [
        {
          slika: require("../assets/partneri/aleksandar.jpg"),
          link: "https://hotel-aleksandar.rs/",
        },
        {
          slika: require("../assets/partneri/benni.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/biftek.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/comtel.png"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/cynkmal.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/doljevac.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/ekstra-testera.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/elite.png"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/euro-plast.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/evropa.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/frigonais.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/gerontoloski-nis.png"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/GMGLogo.png"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/grosis.png"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/ilic.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/lik-promet.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/masinski.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/mg-electronic.png"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/milsa.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/monopol.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/my-place.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/nase-vreme.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/ni_medic.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/nicom.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/nis-produkt.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/niski-cvet.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/nitehnoklima.gif"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/pakom.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/plast-dent.png"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/pozoriste.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/prity-line.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/rucklogo.png"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/samson.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/SD.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/specijalna-bolnica.png"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/start-nis.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/svaba.png"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/tami.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/telix.jpg"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/timor.png"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/touring.png"),
          link: "www.google.com",
        },
        {
          slika: require("../assets/partneri/yumis.gif"),
          link: "www.google.com",
        },
      ],
    };
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@200&display=swap");
.paragraf {
  font-family: "Be Vietnam Pro", sans-serif;

  /* ovo je marta dodala!!!! 
  padding: 40px 20px;
  max-width: 700px;
  */
  font-weight: 300;
  font-size: 18px;
  text-align: justify; 
}
section {
  padding: 16px 24px;
  background: #f5f5f5;
}

.naslov {
  color: #fd0101;
  text-transform: uppercase;
  font-family: "GlacialIndifferenceRegular";
  font-size: 30px;
  font-weight: bold;
}


</style>