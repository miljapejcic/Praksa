<template>
  <div class="container kontejner d-flex flex-column align-items-center">
    <div class="row">
      <div class="col-xl-12 justify-content-center naslov">
        NAŠI PROIZVODI I USLUGE
      </div>
    </div>
    <div class="row">
      <div class="col-xl-6 kontejner">
        <div class="container">
          <div class="row ">
            <div
              class="
                col-xl-4
                d-flex
                flex-column
                align-items-center
                justify-content-around
              "
            >
              <router-link class="routerLink" :to="{ name: 'PCKase' }"
                ><div class="row stavka m-1 pt-2 pb-2">
                  <div class="row">
                    <p>prva slika</p>
                  </div>
                  <div class="row">
                    <p>PC kase</p>
                  </div>
                </div></router-link
              >
              <router-link class="routerLink" :to="{ name: 'GasPump' }"
                ><div class="row stavka m-1 pt-2 pb-2">
                  <div class="row">
                    <p>druga slika</p>
                  </div>
                  <div class="row">
                    <p>Gas Pump Station Controller</p>
                  </div>
                </div></router-link
              >
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
              <router-link class="routerLink" :to="{ name: 'ObracunPlata' }"
                ><div class="row stavka m-1 pt-2 pb-2">
                  <div class="row">
                    <img
                      src="../assets/plata.jpg"
                      alt=""
                      style="border-radius: 60%"
                      class="img-res"
                    />
                  </div>
                  <div class="row">
                    <p>Program za obračun plata</p>
                  </div>
                </div></router-link
              >
              <router-link class="routerLink" :to="{ name: 'Knjigovodstvo' }"
                ><div class="row stavka m-1 pt-2 pb-2">
                  <div class="row">
                    <p>Cetvrta slika</p>
                  </div>
                  <div class="row">
                    <p>Program za knjigovodstvo</p>
                  </div>
                </div></router-link
              >
              <router-link class="routerLink" :to="{ name: 'Hoteli' }"
                ><div class="row stavka m-1 pt-2 pb-2">
                  <div class="row">
                    <img src="../assets/hotel.png" alt="" class="img-res"/>
                  </div>
                  <div class="row">
                    <p>Program za hotele</p>
                  </div>
                </div></router-link
              >
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
              <router-link class="routerLink" :to="{ name: 'SpecificneApp' }"
                ><div class="row stavka m-1 pt-2 pb-2">
                  <div class="row">
                    <img src="../assets/specificneaplikacije.png" alt="" class="img-res"/>
                  </div>
                  <div class="row">
                    <p>Specifične aplikacije</p>
                  </div>
                </div></router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-xl-6 kontejner d-flex flex-column align-items-center justify-content-center"
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
  flex-direction:row;
  justify-content:center;
  align-items: center;
}

.kontejner{
  max-width:none;
}

.paragraf {
  font-family: "Be Vietnam Pro", sans-serif;


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
  background-color: rgba(196, 183, 183, 0.664);
  color: black;
  border-radius: 65%;
  justify-content: center;
}
.naslov {
  color: #fd0101;
  text-transform: uppercase;
  font-family: "GlacialIndifferenceRegular";
  font-size: 30px;
  font-weight: bold;
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