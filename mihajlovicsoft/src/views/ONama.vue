<template>
  <div>
    <Navbar footer="footer" />
    <div>
      <h2 class="naslov-stripe reveal fade-left">
        <router-link :to="{ name: 'Home' }" class="routerlink">
          Početna
        </router-link>
        <b-icon icon="chevron-double-right" /><i> O nama</i>
      </h2>
    </div>
    <div class="elements">
      <div class="d-flex bd-highlight divcina">
        <div class="col m-auto">
          <div class="font-lg lg-right pitanje reveal fade-left">
            Ko smo mi?
          </div>
          <div class="font-lg subtitle reveal fade-right">
            Kompanija koja se od 1991. godine bavi izradom softvera u cilju
            omogućavanja bržeg rada i pojednostavljivanja procesa poslovanja
            korisnicima.
          </div>
        </div>
        <div class="col paragraf reveal fade-right">
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
      <div class="d-flex bd-highlight divcina">
        <div class="row m-auto">
          <div class="font-lg pitanje reveal fade-right"  style="font-size: 34px;">Zašto mi?</div>
          <div
            class="font-lg subtitle reveal fade-left"
            style="font-size: 40px; line-height: 37px; text-align: center"
          >
            Kvalitet, pouzdanost, sigurnost.
          </div>
          <div class="paragraf reveal fade-right">
            Tokom 30 godina postojanja, stekli smo veliki broj korisnika, kako u
            Nišu, tako i širom zemlje, gde je naše ime postalo simbol kvaliteta,
            pouzdanosti i sigurnosti. Zato je sve veći broj organizacija i
            ustanova sa širokim spektrom delatnosti, koje se opredeljuju za
            korišćenje naših usluga i rešenja, sa ciljem povećanja efikasnosti
            svog poslovanja.
          </div>
        </div>
      </div>
      <div class="properties">
        <div class="divic reveal fade-bottom">
          <div class="paragraf">
            <h3 class="font-lg" style="text-align: left">
              <b-icon icon="star" /> Odnos cene i kvaliteta
            </h3>
            Fokusirani smo na pružanje najbolje usluge i na stvaranje
            superiornih proizvoda, uz vođenje računa o budžetu naših klijenata i
            održavanje cena koje su u skladu sa postojećim tržištem.
          </div>
        </div>
        <div class="divic reveal fade-bottom">
          <div class="paragraf">
            <h3 class="font-lg" style="text-align: left">
              <b-icon icon="briefcase" /> Posvećenost
            </h3>
            Naš tim programera je maksimalno posvećen svakom klijentu, bilo da
            je u pitanju održavanje postojećih, ili izrada novih projekata.
          </div>
        </div>
        <div class="divic reveal fade-bottom">
          <div class="paragraf">
            <h3 class="font-lg" style="text-align: left">
              <b-icon icon="lightbulb" /> Inovativnost
            </h3>
            Tokom izrade naših proizvoda, koristimo najsavremenije tehnologije i
            trudimo se da rešenja koja nudimo budu inovativna.
          </div>
        </div>
        <div class="divic reveal fade-bottom">
          <div class="paragraf">
            <h3 class="font-lg" style="text-align: left">
              <b-icon icon="file-earmark-check" /> Dostupnost
            </h3>
            Naš tim tehničke podrške je uvek dostupan, te brzo i efikasno
            reaguje na potrebe naših klijenata.
          </div>
        </div>
        <div class="divic reveal fade-bottom">
          <div class="paragraf">
            <h3 class="font-lg" style="text-align: left">
              <b-icon icon="emoji-smile" /> Zadovoljni klijenti
            </h3>
            Prioritet našeg poslovanja su zadovoljni klijenti, a tokom 30 godina
            poslovanja, stekli smo preko 300 zadovoljnih partnera.
          </div>
        </div>
      </div>
      <div class="bordertop"></div>

      <div class="d-flex bd-highlight divcina reveal fade-bottom">
        <div class="row m-auto">
          <div class="font-lg pitanje lg-right">
            Naše vrednosti
          </div>
          <div class="paragraf">
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
      <div class="d-flex bd-highlight divcina reveal fade-bottom">
        <div class="col m-auto carousel">
          <Carousel />
        </div>
        <div class="col">
          <div class="m-auto">
            <div
              class="naslov pitanje reveal fade-left"
              style="text-align: left; padding: 0px 35px"
            >
              Naši ljudi
            </div>
            <div class="paragraf" style="padding: 25px">
              Naš tim programera čine profesionalci, sa višedecenijskim
              iskustvom, ali i mladi talenti koji se sa nama neprestano
              usavršavaju i stiču dragocena znanja, a u njima vidimo budućnost
              kompanije. Visoko su motivisani i posvećeni svakom dodeljenom
              zadatku. Naša tehnička podrška je ažurna, brza, efikasna i dobro
              organizovana, sa odličnim komunikacionim sposobnostima, a posebna
              pažnja je posvećena poštovanju i ljubaznom prisupu klijentima.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="dodatneInfo reveal fade-bottom">
          <h3 class="font-lg" style="font-size: 32px">
            Dodatne<br />informacije
          </h3>
          <div>
            <b>Naziv banke:</b> AIK banka, Niš <br />
            <b>Tekući račun:</b> 105-1833-59<br />
            <b>PIB:</b> 100668961<br />
            <b>Matični broj:</b> 06066186<br />
            <b>Šifra delatnosti:</b> 72200
          </div>
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
// import VueHorizontal from "vue-horizontal";
import Carousel from "@/components/Carousel";

export default {
  name: "ONama",
  components: {
    Footer,
    Navbar,
    // VueHorizontal,
    Carousel,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>


<style scoped>
.elements {
  display: flex;
  flex-direction: column;
  max-width: 70em;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
}

.carousel {
  padding: 10px;
}

.divcina {
  padding: 0px 25px;
  margin: 20px;
  border-bottom: 0.7px solid #d8d8d8;
  align-items: center;
}

.subtitle {
  color: #fd0101;
  font-size: 24px;
  text-align: right;
  line-height: 30px;
  margin: auto;
}

.pitanje {
  font-size: 38px;
  margin: auto;
}

.divic {
  max-width: 350px;
  padding: 0px;
}

.slike {
  width: 300px;
}

.lg-right {
  text-align: right;
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
  padding: 0px 10px;
}

.dodatneInfo {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 16px;
  text-align: left;
  width: 100%;
  margin: 30px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.dodatneInfo h3 {
  font-family: "Poppins", sans-serif;
  color: #fd0101;
  text-align: right;
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
  margin: 15px 0px;
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

@media only screen and (max-width: 995px) {
  .divcina {
    flex-direction: column;
    flex-wrap: wrap;
    /* margin: 10px; */
    /* border-bottom: none; */
  }

  .divcina .font-lg {
    text-align: center;
  }

  .lg-right {
    text-align: center;
  }

  .properties {
    justify-content: space-around;
  }
}

@media only screen and (max-width: 550px) {
  .dodatneInfo {
    flex-direction: column;
    text-align: center;
  }

  .dodatneInfo h3 {
    text-align: center;
    padding: 0px;
  }
}
</style>