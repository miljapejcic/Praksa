<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xl-12 justify-content-center naslov">Naši partneri</div>
        <div class="row justify-content-around align-items-center">
          <div class="col-xl-5">
            <VueHorizontal responsive class="horiz">
              <div
                class="
                  d-flex
                  align-items-center
                  justify-content-center
                  hor-item
                "
                v-for="p in partneri"
                :key="p.id"
              >
                <a :href="`${p.link}`" target="_blank">
                  <img
                    class="img-fluid"
                    :src="require(`@/assets/partneri/glavni/${p.slika}`)"
                  />
                  <p>{{ p.naziv }}</p>
                </a>
              </div></VueHorizontal
            ><router-link class="routerLink" :to="{ name: 'Partneri' }">
              <p class="prikaz">
                Prikaz svih partnera <b-icon icon="arrow-up-right-square" /></p
            ></router-link>
          </div>
          <div class="col-xl-5">
            <p class="text-justify paragraf">
              Iskren i otvoren odnos, poverenje, poštovanje i saradnja
              predstavljaju suštinu uspešnog partnersta. Kao tim koji se
              neprekidno razvija i uvećava, pozivamo Vas da stupite u kontakt sa
              nama i proverite koje su Vaše prilike za boljim poslovanjem.
              Rešenja koja distribuiramo su proverena rešenja. Iza nas je veliki
              broj zadovoljnih kompanija koje su znale da iskoriste naše znanje
              i iskustva. Ukoliko se prepoznajete u navedenim delatnostima, Vaš
              se uspeh ne dovodi u pitanje. <br><span class="font-lg">Postanite naš partner!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import VueHorizontal from "vue-horizontal";
import json from "../json/partneri.json";

export default {
  name: "PartneriHome",
  components: {
    VueHorizontal,
  },
  data() {
    return {
      partneri: json.glavni,
    };
  },
};
</script>


<style>
/* @import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@200&display=swap"); */
.paragraf {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 16px;
  text-align: justify;
}
section {
  padding: 16px 24px;
  background: #f5f5f5;
}

.hor-item {
  display: flex;
  flex-direction: column;
  max-height: 100%;
}
.hor-item img {
  max-height: 140px;
}
.hor-item p {
  filter: drop-shadow(0 0 0.25rem rgba(153, 153, 153));
  margin-top: 15px;
  line-height: 16px;
  font-size: 13px;
}

.horiz {
  filter: drop-shadow(0 0.2rem 0.25rem rgba(153, 153, 153));
  background-color: white;
  height: 200px;
  align-items: center;
  padding: 10px 15px 5px 15px;
  border-radius: 10px;
  margin-left: 20px;
}

.prikaz {
  text-align: right;
  padding: 15px;
  font-size: 16px;
  color: #fd0101;
  font-weight: 600;
}

.horiz a {
  text-decoration: none;
  color: #2c3e50;
  transition: 0.4s ease;
}

.horiz a:hover {
  color: #fd0101;
  transition: 0.4s ease;
}
</style>