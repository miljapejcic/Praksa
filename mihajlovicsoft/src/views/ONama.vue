<template>
  <div>
    <Navbar footer="footer" />
    <!-- <div class="row pb-0">
      <h2 class="naslov">O nama</h2>
    </div> -->
    <div class="container elements">
      <div class="d-flex bd-highlight divcina">
        <!-- <div class="p-2 w-100 bd-highlight subtitle"> -->
        <div class="col m-auto">
          <div class="font-lg pitanje" style="text-align: right">
            Ko smo mi?
          </div>
          <div class="font-lg subtitle">
            Kompanija koja se od 1991. godine bavi izradom softvera u cilju
            omogućavanja bržeg rada i pojednostavljivanja procesa poslovanja
            korisnicima.
          </div>
        </div>
        <div class="col paragraf">
          Pored računarskog konsaltinga, prodaje računarske opreme,
          projektovanja i uvođenja informacionih sistema i računarskih mreža,
          naš primarni pravac delovanja je
          <i>zadovoljenje potreba i zahteva klijenata</i> u smislu izrade
          odgovarajućih aplikativnih i drugih ITC rešenja zasnovanih na vodećim
          svetskim tehnlogijama i standardima. Sedište kompanije se nalazi u
          Nišu, najvećem gradu na jugu Srbije, sa dugom tradicijom u oblasti
          elektronike i softverskog inženjerstva.
        </div>
      </div>
      <div class="d-flex bd-highlight divcina"  style="border-bottom: none;">
        <div class="row m-auto">
          <div class="font-lg pitanje" style="text-align: left">
            Naše vrednosti
          </div>
          <div class="row paragraf" style="padding: 25px">
            Negujemo kulturu timskog rada, zdravu ravnotežu između posla i
            privatnog života i efikasnu upotrebu alokacije resursa, kako bismo
            osigurali da projekti budu završeni na vreme, u skladu sa budžetom i
            na zadovoljstvo klijenata. Iskren i otvoren odnos sa klijentima, za
            nas je jedini pravi način za stvaranje dugotrajnih i uspešnih
            partnerstava, što potvrđuje činjenica da je veliki broj naših
            aktuelnih klijenata sa nama od samog početka. Naš moto je da ne
            postoji nerešiv problem, pa po potrebi radimo preko radnog vremena,
            u cilju zadovoljenja potreba korisnika.
          </div>
        </div>
      </div>
      <div class="d-flex p-2 bd-highlight divcina" style="border-bottom: none;">
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
        <div class="row m-auto">
          <div
            class="font-lg pitanje"
            style="text-align: right; padding: 0px 35px"
          >
            Naši ljudi
          </div>
          <div class="row paragraf" style="padding: 25px">
            Naš tim programera čine profesionalci, sa višedecenijskim iskustvom,
            ali i mladi talenti koji se sa nama neprestano usavršavaju i stiču
            dragocena znanja, a u njima vidimo budućnost kompanije. Visoko su
            motivisani i posvećeni svakom dodeljenom zadatku. Naša tehnička
            podrška je ažurna, brza, efikasna i dobro organizovana, sa odličnim
            komunikacionim sposobnostima, a posebna pažnja je posvećena
            poštovanju i ljubaznom prisupu klijentima.
          </div>
        </div>
      </div>
      <div class="d-flex bd-highlight divcina">
        <!-- <div class="p-2 w-100 bd-highlight subtitle"> -->
        <div class="col">
          <div class="font-lg pitanje" style="text-align: center">
            Zašto mi?
          </div>
          <div class="font-lg subtitle" style="font-size: 35px">
            Kvalitet, pouzdanost, sigurnost.
          </div>
        </div>
        <div class="col paragraf">
          Tokom 30 godina postojanja, stekli smo veliki broj korisnika, kako u
          Nišu, tako i širom zemlje, gde je naše ime postalo simbol kvaliteta,
          pouzdanosti i sigurnosti. Zato je sve veći broj organizacija i
          ustanova sa širokim spektrom delatnosti, koje se opredeljuju za
          korišćenje naših usluga i rešenja, sa ciljem povećanja efikasnosti
          svog poslovanja.
        </div>
      </div>
      <div class="properties">
        <div class="divic">
          <div class="paragraf">
          <h3 class="font-lg"><b-icon icon="star"/> Odnos cene i kvaliteta</h3>
            Fokusirani smo na pružanje najbolje usluge i na stvaranje
            superiornih proizvoda, uz vođenje računa o budžetu naših klijenata i
            održavanje cena koje su u skladu sa postojećim tržištem.
          </div>
        </div>
        <div class="divic">
          <div class="paragraf">
          <h3 class="font-lg"><b-icon icon="briefcase"/> Posvećenost</h3>
            Naš tim programera je maksimalno posvećen svakom klijentu, bilo da
            je u pitanju održavanje postojećih, ili izrada novih projekata.
          </div>
        </div>
        <div class="divic">
          <div class="paragraf">
          <h3 class="font-lg"><b-icon icon="lightbulb"/> Inovativnost</h3>
            Tokom izrade naših proizvoda, koristimo najsavremenije tehnologije i
            trudimo se da rešenja koja nudimo budu inovativna.
          </div>
        </div>
        <div class="divic">
          <div class="paragraf">
          <h3 class="font-lg"><b-icon icon="file-earmark-check"/> Dostupnost</h3>
            Naš tim tehničke podrške je uvek dostupan, te brzo i efikasno
            reaguje na potrebe naših klijenata.
          </div>
        </div>
        <div class="divic">
          <div class="paragraf">
          <h3 class="font-lg"><b-icon icon="emoji-smile"/> Zadovoljni klijenti</h3>
            Prioritet našeg poslovanja su zadovoljni klijenti, a tokom 30 godina
            poslovanja, stekli smo preko 300 zadovoljnih partnera.
          </div>
        </div>
      </div>
      <div class="bordertop"></div>
      <div>
        <div class="dodatneInfo">
          <h3>Dodatne informacije</h3>
          <p>
            <b>Naziv banke:</b> AIK banka, Niš <br />
            <b>Tekući račun:</b> 105-1833-59<br />
            <b>PIB:</b> 100668961<br />
            <b>Matični broj:</b> 06066186<br />
            <b>Šifra delatnosti:</b> 72200
          </p>
        </div>
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
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      slike: [
        {
          slika: require("../assets/firma/slika4.jpg"),
        },
        {
          slika: require("../assets/firma/slika1.jpg"),
        },
        {
          slika: require("../assets/firma/slika2.jpg"),
        },
        {
          slika: require("../assets/firma/slika3.jpg"),
        },
        {
          slika: require("../assets/firma/slika5.jpg"),
        },
        {
          slika: require("../assets/firma/slika6.jpg"),
        },
        {
          slika: require("../assets/firma/slika7.jpg"),
        },
        {
          slika: require("../assets/firma/slika8.jpg"),
        },
        {
          slika: require("../assets/firma/slika9.jpg"),
        },
        {
          slika: require("../assets/firma/slika10.jpg"),
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
  max-width:70em;
}

.divcina {
  padding: 0px 25px;
  margin: 40px 20px;
  border-bottom: 0.7px solid #d8d8d8;
  /* flex-wrap: wrap; */
}

.subtitle {
  color: #fd0101;
  /* text-transform: uppercase; */
  /* letter-spacing: 5px; */
  font-size: 24px;
  text-align: right;
  /* word-spacing: 100vw; */
  /* text-align: justify; */
  line-height: 30px;
  margin: auto;
}

.pitanje {
  /* text-align: center; */
  font-size: 38px;
  margin: auto;
}

.slike {
  border-radius: 10px;
}

.divic {
  max-width: 400px;
  padding: 10px;
  margin-top: 10px;
}

.properties {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

h3 {
  font-family: "Poppins", sans-serif;
  color: black;
  /* border-bottom: #d8d8d8 solid 1px; */
  padding: 0px 10px;
  font-size: 20px;
}

@media only screen and (max-width: 995px) {
  .divcina {
    flex-direction: column;
    flex-wrap: wrap;
    margin: 10px;
  }

  .properties {
    justify-content: space-around;
  }
}

.dodatneInfo {
  /*padding: 60px;*/
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 16px;
  text-align: left;
  max-width: 400px;
  width: 100%;
  margin-top: 30px;
}

.dodatneInfo h3 {
  font-family: "Poppins", sans-serif;
  color: #fd0101;
  font-size: 30px;
  border-bottom: 0;
  padding-left: 0;
}

.dodatneInfo b {
  font-weight: 600;
  color: rgb(125, 44, 44);
}

.bordertop {
  width: 100%;
  border-top: 0.6px solid rgb(205, 205, 205);
}

.vred {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 16px;
  text-align: left;
  max-width: 400px;
  width: 100%;
}
</style>