<template>
  <div class="container kontejner d-flex flex-column align-items-center">
    <div class="row">
      <div class="col-xl-12 justify-content-center naslov">
        Naši proizvodi i usluge
      </div>
    </div>
    <div class="row">
      <div class="col-xl-6">
        <div class="container">
          <div
            class="
              row
              justify-content-center
              align-items-center
              vrstaKategorija
            "
          >
            <div
              class="
                col-xl-4
                d-flex
                flex-column
                align-items-center
                justify-content-around
              "
            >
              <div class="row stavka m-1 pt-2 pb-2">
                <div class="row">
                  <router-link class="routerLink" :to="{ name: 'PCKase' }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/kasa.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>PC kase</p>
                </div>
              </div>
              <div class="row stavka m-1 pt-2 pb-2">
                <div class="row">
                  <router-link class="routerLink" :to="{ name: 'PCKase' }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/gas.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>Gas Pump Station Controller</p>
                </div>
              </div>
            </div>
            <div
              class="
                col-xl-4
                d-flex
                flex-column
                align-items-center
                justify-content-around
              "
            >
              <div class="row stavka m-1 pt-2 pb-2">
                <div class="row">
                  <router-link class="routerLink" :to="{ name: 'PCKase' }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/plate.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>Program za obračun plata</p>
                </div>
              </div>
              <div class="row stavka m-1 pt-2 pb-2">
                <div class="row">
                  <router-link class="routerLink" :to="{ name: 'PCKase' }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/racun.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>Program za knjigovodstvo</p>
                </div>
              </div>
              <div class="row stavka m-1 pt-2 pb-2">
                <div class="row">
                  <router-link class="routerLink" :to="{ name: 'PCKase' }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/hotel.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>Program za hotele</p>
                </div>
              </div>
            </div>
            <div
              class="
                col-xl-4
                d-flex
                flex-column
                align-items-center
                justify-content-around
              "
            >
              <div class="row stavka m-1 pt-2 pb-2">
                <div class="row">
                  <router-link class="routerLink" :to="{ name: 'PCKase' }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/app.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>Specifične aplikacije</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          col-xl-6
          d-flex
          flex-column
          align-items-center
          justify-content-center
        "
      >
        <div class="row justify-content-center">
          <div class="col-xl-10 justify-content-center">
            <p class="text-justify paragraf">
              Primarna svrha proizvoda i usluga koje nudimo je
              <i>zadovoljenje potreba i zahteva klijenata</i>, te pružamo
              rešenja zasnovana na vodećim svetskim tehnologijama i standardima.
              Naši proizvodi su jednostavni za korišćenje i pružaju Vam uštedu
              vremena, kako biste se posvetili unapređenju i razvoju svog
              biznisa. Ukoliko se prepoznajete u navedenim delatnostima, naši
              proizvodi su garancija Vašeg uspeha.
            </p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <router-link :to="{ name: 'Proizvodi' }"
              ><button type="button" class="dugme">
                VIDI SVE PROIZVODE I USLUGE
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProizvodiHome",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@200&display=swap");
.dugme {
  border: 1px solid rgba(255, 0, 0, 0.2);
  border-radius: 3px;
  padding: 4%;
  font-family: "GlacialIndifferenceRegular";
  transition: 0.4s;
}

.klasa {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.kontejner {
  max-width: none;
  background-image: url("../assets/output-onlinepngtools (1).png");
  background-repeat: no-repeat;
  background-size: contain;
}

.vrstaKategorija {
  padding-left: 40px;
  padding-right: 40px;
}

.paragraf {
  font-family: "Be Vietnam Pro", sans-serif;
  padding: 40px;

  /* ovo nadole je marta dodala!!!!
  padding: 40px 20px;
  */
  font-weight: 300;
  font-size: 18px;
  text-align: justify;
}
.routerLink {
  text-decoration: none;
}
.stavka {
  font-family: "Be Vietnam Pro", sans-serif;
  /* background-color: rgba(196, 183, 183, 0.664); */
  /* border-radius: 65%; */
  color: black;
  font-size: 15px;
  justify-content: center;
  max-width: 300px;
  min-width: 160px;
}

.round-img {
  width: 100%;
  border-radius: 100%;
  margin-bottom: 10px;
}

.round-img:hover {
  opacity: 85%;
  transition: 0.4s ease;
}

@media only screen and (max-width: 1200px) {
  .kontejner {
    background-image: none;
  }
}

.naslov {
  color: #fd0101;
  text-transform: uppercase;
  font-family: "GlacialIndifferenceRegular";
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
}

.dugme {
  border-color: #fd0101;
  border-width: 2px;
  color: #fd0101;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 18px;
  background-color: transparent;
}

.dugme:hover {
  color: #fff7f7;
  border-color: #fff7f7;
  background-color: #fd010179;
}
</style>