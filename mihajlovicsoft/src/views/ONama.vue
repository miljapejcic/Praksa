<template>
  <div>
    <Navbar footer="footer" />
    <div>
      <h2 class="naslov-stripe animate__animated animate__pulse">
        <router-link :to="{ name: 'Home' }" class="routerlink">
          Početna
        </router-link>
        <b-icon icon="chevron-double-right" /><i> O nama</i>
      </h2>
    </div>
    <div class="container elements">
      <div class="d-flex bd-highlight divcina">
        <div class="col">
          <div
            class="
              naslov
              lg-right
              pitanje
              animate__animated animate__fadeInLeft
            "
          >
            Šta predstavlja Mihajlović Soft
          </div>
        </div>
        <div class="col paragraf animate__animated animate__fadeInUp">
          <div class="font-lg subtitle">Ko smo mi?</div>
          Kompanija koja se od 1991. godine bavi izradom softvera u cilju
          omogućavanja bržeg rada i pojednostavljivanja procesa poslovanja
          korisnicima.
          <div class="font-lg subtitle"><br />Čime se bavimo?</div>
          Pored računarskog konsaltinga, prodaje računarske opreme,
          projektovanja i uvođenja informacionih sistema i računarskih mreža,
          naš primarni pravac delovanja je zadovoljenje potreba i zahteva
          klijenata u smislu izrade odgovarajućih aplikativnih i drugih ITC
          rešenja zasnovanih na vodećim svetskim tehnlogijama i standardima.
          <div style="margin-top: 50px">
            <router-link :to="{ name: 'Proizvodi' }"
              ><button type="button" class="dugme">
                Naši proizvodi i usluge
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="full-cont reveal fade-bottom" style="margin-bottom: 40px">
      <div class="properties">
        <div class="divic reveal fade-bottom">
          <div class="paragraf">
            <h3 class="font-lg" style="text-align: center">
              <b-icon icon="briefcase" /> Posvećenost
            </h3>
            Naš tim programera je maksimalno posvećen svakom klijentu, bilo da
            je u pitanju održavanje postojećih, ili izrada novih projekata.
          </div>
        </div>
        <div class="divic reveal fade-bottom">
          <div class="paragraf">
            <h3 class="font-lg" style="text-align: center">
              <b-icon icon="lightbulb" /> Inovativnost
            </h3>
            Tokom izrade naših proizvoda, koristimo najsavremenije tehnologije i
            trudimo se da rešenja koja nudimo budu inovativna.
          </div>
        </div>
        <div class="divic reveal fade-bottom">
          <div class="paragraf">
            <h3 class="font-lg" style="text-align: center">
              <b-icon icon="file-earmark-check" /> Dostupnost
            </h3>
            Naš tim tehničke podrške je uvek dostupan, te brzo i efikasno
            reaguje na potrebe naših klijenata.
          </div>
        </div>
        <div class="divic reveal fade-bottom">
          <div class="paragraf">
            <h3 class="font-lg" style="text-align: center">
              <b-icon icon="emoji-smile" /> Zadovoljni klijenti
            </h3>
            Prioritet našeg poslovanja su zadovoljni klijenti, a tokom 30 godina
            poslovanja, stekli smo preko 300 zadovoljnih partnera.
          </div>
        </div>
        <div class="divic reveal fade-bottom">
          <div class="paragraf">
            <h3 class="font-lg" style="text-align: center">
              <b-icon icon="star" /> Kvalitet usluga
            </h3>
            Fokusirani smo na pružanje najbolje usluge uz vođenje računa o budžetu naših klijenata i
            održavanje cena koje su u skladu sa postojećim tržištem.
          </div>
        </div>
      </div>
    </div>
    <div class="container elements">
      <div class="d-flex bd-highlight divcina reveal fade-bottom">
        <div class="col">
          <div class="naslov lg-right pitanje">
            Zašto izabrati Mihajlović Soft
          </div>
        </div>
        <div class="col paragraf">
          <div class="font-lg subtitle">Kvalitet, pouzdanost, sigurnost.</div>
          Tokom 30 godina postojanja, stekli smo veliki broj korisnika, kako u
          Nišu, tako i širom zemlje, gde je naše ime postalo simbol kvaliteta,
          pouzdanosti i sigurnosti. Zato je sve veći broj organizacija i
          ustanova sa širokim spektrom delatnosti, koje se opredeljuju za
          korišćenje naših usluga i rešenja, sa ciljem povećanja efikasnosti
          svog poslovanja.
        </div>
      </div>
      <div class="borderbottom"></div>
      <div class="d-flex bd-highlight divcina reveal fade-bottom">
        <div class="col">
          <div class="naslov lg-right pitanje">Ovo su naši ljudi</div>
        </div>
        <div class="col paragraf">
          Naš tim programera čine profesionalci, sa višedecenijskim iskustvom,
          ali i mladi talenti koji se sa nama neprestano usavršavaju i stiču
          dragocena znanja, a u njima vidimo budućnost kompanije. Visoko su
          motivisani i posvećeni svakom dodeljenom zadatku. <br /><br />Naša
          tehnička podrška je ažurna, brza, efikasna i dobro organizovana, sa
          odličnim komunikacionim sposobnostima, a posebna pažnja je posvećena
          poštovanju i ljubaznom prisupu klijentima.
          <div style="margin-top: 50px">
            <router-link :to="{ name: 'Tim' }"
              ><button type="button" class="dugme">
                Postani deo našeg tima!
              </button></router-link
            >
          </div>
        </div>
      </div>
      <!-- <div class="borderbottom"></div> -->
      <div class="properties">
        <div class="divic reveal fade-left">
          <div class="paragraf" style="font-size: 14px">
            <img src="../assets/firma/slika3.jpg" />
            <h3
              class="font-lg subtitle"
              style="text-align: left; padding: 30px 0px 5px 0px"
            >
              Naše vrednosti
            </h3>
            Negujemo kulturu timskog rada, zdravu ravnotežu između posla i
            privatnog života i efikasnu upotrebu alokacije resursa, kako bismo
            osigurali da projekti budu završeni na vreme, u skladu sa budžetom i
            na zadovoljstvo klijenata.
          </div>
        </div>
        <div class="divic reveal fade-right">
          <div class="paragraf" style="font-size: 14px">
            <img src="../assets/firma/slika1.jpg" />
            <h3
              class="font-lg subtitle"
              style="text-align: left; padding: 30px 0px 5px 0px"
            >
              Odnos sa klijentima
            </h3>
            Iskren i otvoren odnos sa klijentima, za nas je jedini pravi način
            za stvaranje dugotrajnih i uspešnih partnerstava, što potvrđuje
            činjenica da je veliki broj naših aktuelnih klijenata sa nama od
            samog početka.
          </div>
        </div>
      </div>
    </div>

    <div
      class="full-cont reveal fade-bottom"
      style="background-color: rgb(23, 24, 33)"
    >
      <div class="font-lg" style="padding: 0px 50px">
        Naš moto je da ne postoji nerešiv problem, pa po potrebi radimo preko
        radnog vremena, u cilju zadovoljenja potreba korisnika.
      </div>
      <div style="margin-top: 50px">
        <router-link :to="{ name: 'Podrska' }"
          ><button type="button" class="dugme">
            TEHNIČKA PODRŠKA
          </button></router-link
        >
      </div>
    </div>
    <div class="dodatneInfo reveal fade-bottom">
      <div>
        <h3 class="font-lg" style="font-size: 32px">Dodatne informacije</h3>
      </div>
      <div class="info">
        <div class="info-left">
          <b>Naziv banke:</b> AIK banka, Niš <br />
          <b>Tekući račun:</b> 105-1833-59
        </div>
        <div class="info-right">
          <b>PIB:</b> 100668961<br />
          <b>Matični broj:</b> 06066186<br />
          <b>Šifra delatnosti:</b> 72200
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
// import Carousel from "@/components/Carousel";

export default {
  name: "ONama",
  components: {
    Footer,
    Navbar,
    // Carousel,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>


<style scoped>
.paragraf {
  padding: 0px 30px;
  text-align: justify;
}

.dugme {
  padding: 15px;
  color: #2c3e50;
  border-color: #2c3e50;
}

.dugme:hover {
  color: whitesmoke;
  border-color: whitesmoke;
  background-color: #fd0101c2;
}

.full-cont {
  width: 100%;
  padding: 70px;
  background-color: #fd0101c2;
  box-shadow: 0px 0px 20px 4px rgba(18, 40, 70, 0.288);
  transition: 0.7s ease;
  margin: 40px 0px 0px 0px;
  color: rgb(233, 233, 233);
}

.full-cont .dugme {
  color: rgb(233, 233, 233);
  border-color: rgb(233, 233, 233);
  background-color: rgba(149, 151, 190, 0.16);
  font-size: 20px;
  border-radius: 30px;
  padding: 20px;
}

.full-cont .dugme:hover {
  background-color: rgb(50, 60, 93);
  color: white;
  border-color: white;
}

.naslov {
  line-height: 40px;
}

.full-cont .font-lg {
  color: rgb(233, 233, 233);
  margin-bottom: 10px;
}

.dodatneInfo {
  padding: 60px 0px;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #d8d8d8;
}

.dodatneInfo h3,
b {
  color: rgb(30, 32, 44);
}

.info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-end;
  text-align: left;
}

.info-left,
.info-right {
  padding: 10px 30px;
  font-size: 23px;
}

.elements {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.divcina {
  padding: 25px;
  margin: 20px;
  align-items: flex-start;
  justify-content: center;
}

.subtitle {
  font-size: 24px;
  text-align: left;
  line-height: 35px;
  margin: auto;
}

.pitanje {
  font-size: 40px;
  padding: 5px;
  color: #af1515;
}

.divic {
  max-width: 400px;
  padding: 0px;
  margin: 20px 0px;
}


.elements .divic {
  display: flex;
  flex-direction: column;
  max-width: 500px;
}

.divic img {
  width: 100%;
}

.lg-right {
  text-align: right;
}

.properties {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
}

h3 {
  color: black;
}

.borderbottom {
  width: 100%;
  margin: 40px 0px;
  border-bottom: 2px solid #fd0101c2;
}

@media only screen and (max-width: 1200px) {
  .divcina {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }

  .lg-right {
    text-align: center;
  }
}
</style>