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
              <div class="stavka m-1 pt-2 pb-2">
                <div class="row">
                  <router-link class="routerLink" :to="{ name: 'PCKase' }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/kasa.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>
                    <router-link class="routerLink" :to="{ name: 'PCKase' }"
                      >PC kase
                    </router-link>
                  </p>
                </div>
              </div>
              <div class="stavka m-1 pt-2 pb-2">
                <div class="row">
                  <router-link class="routerLink" :to="{ name: 'PCKase' }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/gas.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>
                    <router-link class="routerLink" :to="{ name: 'PCKase' }">
                      Gas Pump Station Controller
                    </router-link>
                  </p>
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
              <div class="stavka m-1 pt-2 pb-2">
                <div class="row">
                  <router-link class="routerLink" :to="{ name: 'PCKase' }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/plate.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>
                    <router-link class="routerLink" :to="{ name: 'PCKase' }">
                      Program za obračun plata
                    </router-link>
                  </p>
                </div>
              </div>
              <div class="stavka m-1 pt-2 pb-2">
                <div class="row">
                  <router-link class="routerLink" :to="{ name: 'PCKase' }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/racun.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>
                    <router-link class="routerLink" :to="{ name: 'PCKase' }">
                      Program za knjigovodstvo
                    </router-link>
                  </p>
                </div>
              </div>
              <div class="stavka m-1 pt-2 pb-2">
                <div class="row">
                  <router-link class="routerLink" :to="{ name: 'PCKase' }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/hotel.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>
                    <router-link class="routerLink" :to="{ name: 'PCKase' }">
                      Program za hotele
                    </router-link>
                  </p>
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
              <div class="stavka m-1 pt-2 pb-2">
                <div class="row">
                  <router-link class="routerLink" :to="{ name: 'PCKase' }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/app.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>
                    <router-link class="routerLink" :to="{ name: 'PCKase' }">
                      Specifične aplikacije
                    </router-link>
                  </p>
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

.klasa {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.kontejner {
  background-image: url("../assets/output-onlinepngtools (1).png");
  background-repeat: no-repeat;
  background-size: 55vw;
}

.vrstaKategorija {
  padding-left: 40px;
  padding-right: 40px;
}

.paragraf {
  font-family: "Be Vietnam Pro", sans-serif;
  padding: 40px;
  font-weight: 300;
  font-size: 18px;
  text-align: justify;
}
.routerLink {
  text-decoration: none;
  color: rgb(69, 69, 69);
  transition: 0.4s ease;
}

.routerLink:hover {
  color: #aa3b3b;
  transition: 0.4s ease;
}

.stavka {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  font-family: "Be Vietnam Pro", sans-serif;
  color: black;
  font-size: 14px;
  justify-content: center;
  transition: 0.5s ease;
}

.stavka:hover {
  width: 105%;
  filter: drop-shadow(0 0.4rem 0.3rem rgba(104, 104, 104, 0.498));
  transition: 0.5s ease;
}

.round-img {
  width: 100%;
  border-radius: 100%;
  margin-bottom: 10px;
}

@media only screen and (max-width: 1200px) {
  .kontejner {
    background-image: none;
  }

  .stavka {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      #ffffff,
      #faf5fc,
      #fbeaf4,
      #fedee6,
      #ffd4d2,
      #ffd4d2,
      #ffd4d2,
      #ffd4d2,
      #fedee6,
      #fbeaf4,
      #faf5fc,
      #ffffff
    );
  }

  .round-img {
    width: 130px;
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
  border-radius: 3px;
  border-color: #fd0101;
  border-width: 2px;
  color: #fd0101;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 18px;
  background-color: transparent;
  padding: 4%;
  font-family: "GlacialIndifferenceRegular";
  transition: 0.4s;
}

.dugme:hover {
  color: #fff7f7;
  border-color: #fff7f7;
  background-color: #fd010179;
}
</style>