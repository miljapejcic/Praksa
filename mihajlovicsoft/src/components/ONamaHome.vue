<template>
  <div class="container about">
    <div class="naslov">O nama</div>
    <div class="row justify-content-center">
      <div class="col-xl-6 paragraf">
        <b>Mihajlović Soft</b> je kompanija koja se od 1991. godine bavi izradom
        softvera u cilju omogućavanja bržeg rada i pojednostavljivanja procesa
        poslovanja našim korisnicima. Pored računarskog konsaltinga, prodaje
        računarske opreme, projektovanja i uvođenja informacionih sistema i
        računarskih mreža, naš primarni pravac delovanja je
        <i>zadovoljenje potreba i zahteva klijenata</i> u smislu izrade
        odgovarajućih aplikativnih i drugih ITC rešenja zasnovanih na vodećim
        svetskim tehnlogijama i standardima. Sedište kompanije se nalazi u Nišu,
        najvećem gradu na jugu Srbije, sa dugom tradicijom u oblasti elektronike
        i softverskog inženjerstva.
        <router-link class="routerLink" :to="{ name: 'ONama' }"
          ><b>Više o nama <b-icon icon="arrow-up-right-square"></b-icon></b></router-link
        >
      </div>
      <div class="col-xl-6 slike">
        <img src="../assets/firma/slika1.jpg" class="slika1" />
        <img src="../assets/firma/slika2.jpg" class="slika2" />
        <img src="../assets/firma/slika3.jpg" class="slika3" />
      </div>
    </div>
    <div class="clients">
      <div class="col client-item">
        <img src="../assets/onama HOME/mslogo.png" />
        <p>zvanični Microsoft Certified Partner</p>
      </div>
      <div class="col client-item">
        <img src="../assets/onama HOME/kasperskylogo.png" />
        <p>autorizovani distributeri Kaspersky Anti-Virus palete programa</p>
      </div>
      <div class="col client-item">
        <img src="../assets/onama HOME/nicatlogo2.png" />
        <p>član Klastera Ni-CAT</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ONamaHome",
  components: {},
};
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}

.paragraf {
  padding: 40px;
  /* max-width: 100%; */
}

.slike img {
  position: relative;
  max-width: 300px;
  padding: 10px;
}

.routerLink {
  font-weight: bold;
  color: #fd0101;
  transition: 0.4s;
}

.routerLink:hover {
  color: rgb(178, 143, 143);
}

@media only screen and (min-width: 1200px) {
  .slike {
    position: relative;
    z-index: -1;
  }

  .slike img {
    position: absolute;
    max-width: 300px;
  }

  .slika1 {
    top: 20px;
    left: 50px;
  }

  .slika2 {
    top: 160px;
    left: 280px;
    z-index: 1;
  }

  .slika3 {
    top: 225px;
    left: 10px;
  }

}

.clients {
  display: flex;
  flex-direction: row;
  padding: 20px 50px;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 50px;
}

.client-item {
  margin: 30px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 13px;
}

.clients img {
  max-width: 200px;
}

.client-item p {
  padding: 10px 40px;
}
</style>