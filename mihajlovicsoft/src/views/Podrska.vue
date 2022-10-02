<template>
  <div>
    <Navbar footer="footer" />
    <div>
      <h2 class="naslov-stripe animate__animated animate__pulse">
        <router-link :to="{ name: 'Home' }" class="routerlink"
          > Početna </router-link
        >
        <b-icon icon="chevron-double-right" /><i> Tehnička podrška</i>
      </h2>
    </div>
    <div class="container">
      <div class="divic">
        <div class="paragraf animate__animated animate__slideInLeft">
          <!-- <img class="par-img" src="../assets/tehnicka.jpg"/> -->
          <div class="font-lg" style="text-align: left; font-size: 38px">
            Tehnička podrška
          </div>
          <p>
            Sve ove godine rada dovele su nas do saznanja da je jedna od
            najvažnijih usluga <i>posleprodajna usluga</i>. Za mnoge firme,
            posao se završava u trenutku kada prodaju, implementiraju i naplate.
            <b>Mi se u tome razlikujemo.</b> Za nas, posao tek tada počinje! U
            želji da naše partnere vodimo ka postizanju dugoročnog rasta i
            napredovanja, mi gradimo partnerski odnos na dugi rok i uvek stojimo
            na raspolaganju! Podržavamo partnere na takav način da saradnja sa
            nama predstavlja dodatnu vrednost i bolju zaradu na dugi rok.
          </p>
        </div>
        <div class="teamviewer animate__animated animate__slideInRight">
          <img class="teamviewer-img" src="../assets/teamviewer.png" />
          <input
            type="button"
            onClick="location.href='https://get.teamviewer.com/ejzxke2'"
            value="Aplikacija za Tehničku Podršku"
            class="dugme"
          />
        </div>
      </div>
      <div class="paragraf animate__animated animate__slideInUp">
        <span class="font-lg">
          Preuzmite klijentsku aplikaciju za tehničku podršku klikom na dugme
          iznad. </span
        ><br />
        Kontaktirajte nas i uverite se sami, da imamo proizvode sa kojima
        povećavamo Vaš prosperitet na tržištu. Trudićemo se da Vam pružimo
        podršku, na najvišem mogućem nivou!
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

export default {
  name: "Podrska",
  components: {
    Footer,
    Navbar,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>


<style scoped>
.paragraf b {
  font-weight: 800;
  color: #ff2d2d;
}

.divic {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.teamviewer-img {
  padding: 20px 30px 0px 30px;
  max-width: 400px;
}

@media only screen and (max-width: 1200px) {
  .divic {
    flex-wrap: wrap;
  }
}

.container {
  padding: 20px;
}
.teamviewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
</style>