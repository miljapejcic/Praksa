<template>
  <div class="container kontejner d-flex flex-column align-items-center">
    <div class="row reveal fade-left">
      <div class="col-xl-12 justify-content-center naslov">
        Naši proizvodi i usluge
      </div>
    </div>
    <div class="row">
      <div class="col-xl-6 reveal fade-left">
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
                  <router-link class="routerLink" :to="{ name: 'Proizvod', params:{idkat:0, idproiz:3} }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/kasa.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>
                    <router-link class="routerLink" :to="{ name: 'Proizvod', params:{idkat:0, idproiz:3} }"
                      >PC kase
                    </router-link>
                  </p>
                </div>
              </div>
              <div class="stavka m-1 pt-2 pb-2">
                <div class="row">
                  <router-link class="routerLink" :to="{ name: 'Proizvod', params:{idkat:0, idproiz:4} }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/gas.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>
                    <router-link class="routerLink" :to="{ name: 'Proizvod', params:{idkat:0, idproiz:4} }">
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
                  <router-link class="routerLink" :to="{ name: 'Proizvod', params:{idkat:0, idproiz:0} }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/plate.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>
                    <router-link class="routerLink" :to="{  name: 'Proizvod', params:{idkat:0, idproiz:0} }">
                      Program za obračun plata
                    </router-link>
                  </p>
                </div>
              </div>
              <div class="stavka m-1 pt-2 pb-2">
                <div class="row">
                  <router-link class="routerLink" :to="{  name: 'Proizvod', params:{idkat:0, idproiz:1} }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/racun.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>
                    <router-link class="routerLink" :to="{  name: 'Proizvod', params:{idkat:0, idproiz:1} }">
                      Program za knjigovodstvo
                    </router-link>
                  </p>
                </div>
              </div>
              <div class="stavka m-1 pt-2 pb-2">
                <div class="row">
                  <router-link class="routerLink" :to="{  name: 'Proizvodi' }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/biznisapp.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>
                    <router-link class="routerLink" :to="{  name: 'Proizvodi'}">
                      Biznis aplikacije
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
                  <router-link class="routerLink" :to="{  name: 'Proizvodi' }">
                    <img
                      class="round-img"
                      src="../assets/proizvodi HOME/app.jpg"
                    />
                  </router-link>
                </div>
                <div class="row">
                  <p>
                    <router-link class="routerLink" :to="{  name: 'Proizvodi' }">
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
          reveal fade-right
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
  font-family: "Poppins", sans-serif;
  padding: 40px;
  font-weight: 300;
  font-size: 16px;
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
  width: 90%;
  padding: 10px;
  font-family: "Poppins", sans-serif;
  color: black;
  font-size: 13px;
  justify-content: center;
  transition: 0.5s ease;
}

.stavka:hover {
  filter:contrast(1.4) drop-shadow(0 0.3rem 0.5rem rgba(104, 104, 104, 0.772));
  transition: 0.5s ease;
}


.round-img {
  width: 100%;
  border-radius: 100%;
  margin-bottom: 10px;
  transition: 0.5s ease;
}

@media only screen and (max-width: 1200px) {
  .kontejner {
    background-image: none;
  }

  .stavka {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
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
    width: 100px;
  }
}

@media only screen and (min-width: 1800px) {
  .kontejner {
    background-size: contain;
  }
}

.naslov {
  margin-bottom: 10px;
}

.dugme {
  border-radius: 5px;
  border-color: #fd0101;
  border-width: 2px;
  color: #fd0101;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 16px;
  background-color: transparent;
  padding: 4%;
  font-family: "Poppins", sans-serif;
  transition: 0.4s;
}

.dugme:hover {
  color: #fff7f7;
  /* border-color: #fff7f7; */
  background-color: #fd010179;
}
</style>