<template>
  <div>
    <Navbar footer="footer" />
    <div class="container elements">
      <div class="d-flex bd-highlight divcina">
        <div class="p-2 w-100 bd-highlight subtitle">Ko smo mi?</div>
        <div class="p-2 flex-shrink-1 bd-highlight paragraf">
          Mihajlović Soft je kompanija koja se od 1991. godine bavi izradom
          softvera u cilju omogućavanja bržeg rada i pojednostavljivanja procesa
          poslovanja našim korisnicima. Pored računarskog konsaltinga, prodaje
          računarske opreme, projektovanja i uvođenja informacionih sistema i
          računarskih mreža, naš primarni pravac delovanja je
          <i>zadovoljenje potreba i zahteva klijenata</i> u smislu izrade
          odgovarajućih aplikativnih i drugih ITC rešenja zasnovanih na vodećim
          svetskim tehnlogijama i standardima. Sedište kompanije se nalazi u
          Nišu, najvećem gradu na jugu Srbije, sa dugom tradicijom u oblasti
          elektronike i softverskog inženjerstva.
        </div>
      </div>
      <div class="d-flex bd-highlight divcina">
        <div class="p-2 flex-shrink-1 bd-highlight paragraf">
          Negujemo kulturu timskog rada, zdravu ravnotežu između posla i
          privatnog života i efikasnu upotrebu alokacije resursa, kako bismo
          osigurali da projekti budu završeni na vreme, u skladu sa budžetom i
          na zadovoljstvo klijenata. Iskren i otvoren odnos sa klijentima, za
          nas je jedini pravi način za stvaranje dugotrajnih i uspešnih
          partnerstava, što potvrđuje činjenica da je veliki broj naših
          aktuelnih klijenata sa nama od samog početka. Naš moto je da
          <i>ne postoji nerešiv problem</i>, pa po potrebi radimo preko radnog
          vremena, u cilju zadovoljenja potreba korisnika.
        </div>
        <div class="p-2 w-100 bd-highlight subtitle desno">Naše vrednosti</div>
      </div>
      <div class="d-flex p-2 bd-highlight divcina">
        <VueHorizontal responsive>
          <div
            class="d-flex align-items-center justify-content-center"
            v-for="s in slike"
            :key="s.slika"
          >
            <img class="img-fluid slike" v-bind:src="s.slika" />
          </div>
        </VueHorizontal>
      </div>
      <div class="d-flex bd-highlight divcina">
        <div class="p-2 w-100 bd-highlight subtitle">Naši ljudi</div>

        <div class="p-2 flex-shrink-1 bd-highlight paragraf">
          Naš tim programera čine profesionalci, sa višedecenijskim iskustvom,
          ali i mladi talenti koji se sa nama neprestano usavršavaju i stiču
          dragocena znanja, a u njima vidimo budućnost kompanije. Visoko su
          motivisani i posvećeni svakom dodeljenom zadatku. Naša tehnička
          podrška je ažurna, brza, efikasna i dobro organizovana, sa odličnim
          komunikacionim sposobnostima, a posebna pažnja je posvećena poštovanju
          i ljubaznom prisupu klijentima.
        </div>
      </div>
      <div class="d-flex bd-highlight divcina">
        <div class="p-2 flex-shrink-1 bd-highlight paragraf">
          Tokom 30 godina postojanja, stekli smo veliki broj korisnika, kako u
          Nišu, tako i širom zemlje, gde je naše ime postalo simbol
          <i>kvaliteta, pouzdanosti i sigurnosti</i>. Zato je sve veći broj
          organizacija i ustanova sa širokim spektrom delatnosti, koje se
          opredeljuju za korišćenje naših usluga i rešenja, sa ciljem povećanja
          efikasnosti svog poslovanja.
        </div>
        <div class="p-2 w-100 bd-highlight subtitle desno">Zašto mi?</div>
      </div>
    </div>
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import VueHorizontal from "vue-horizontal";

export default {
  name: "ONama",
  components: {
    Footer,
    Navbar,
    VueHorizontal,
  },
  data() {
    return {
      slike: [
        {
          slika: require("../assets/slika4.jpg"),
        },
        {
          slika: require("../assets/slika1.jpg"),
        },
        {
          slika: require("../assets/slika2.jpg"),
        },
        {
          slika: require("../assets/slika3.jpg"),
        },
        {
          slika: require("../assets/slika5.jpg"),
        },
      ],
    };
  },
};
</script>


<style scoped>
.elements {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

.divcina {
  padding: 25px 40px;
  margin: 10px 20px;
}

.subtitle {
  font-family: "GlacialIndifferenceRegular";
  color: #fd0101;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 38px;
  word-spacing: 100vw;
  text-align: right;
  margin: auto;
}

.paragraf i {
  color: #ff5e5e;
}
.desno {
  text-align: left;
}

.slike {
  border-radius: 10px;
}
</style>