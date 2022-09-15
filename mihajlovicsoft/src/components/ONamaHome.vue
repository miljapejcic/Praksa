<template>
  <div class="container about">
    <div class="naslov">O nama</div>
    <div class="row justify-content-center">
      <div class="col-xl-6 opis">
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
          ><b>Više o nama →</b></router-link
        >
      </div>
      <div class="col-xl-6 slike">
        <img src="../assets/slika1.jpg" class="slika1" />
        <img src="../assets/slika2.jpg" class="slika2" />
        <img src="../assets/slika3.jpg" class="slika3" />
      </div>
    </div>
    <div class="clients">
      <div class="col client-item">
        <img src="../assets/mslogo.png" />
        <p>zvanični Microsoft Certified Partner</p>
      </div>
      <div class="col client-item">
        <img src="../assets/kasperskylogo.png" />
        <p>autorizovani distributeri Kaspersky Anti-Virus palete programa</p>
      </div>
      <div class="col client-item">
        <img src="../assets/nicatlogo.png" />
        <p>član Klastera Ni-CAT</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ONamaHome",
  components: {
  },
};
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}
.naslov {
  color: #fd0101;
  text-transform: uppercase;
  font-family: "GlacialIndifferenceRegular";
  font-size: 30px;
  font-weight: bold;
}

.content-hor {
  display: flex;
  flex-direction: row;
  text-align: center;
  flex-wrap: wrap;
}

.opis {
  /* font-family: "GlacialIndifferenceRegular"; */
  padding: 40px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 300;
  font-size: 18px;
  text-align: justify;
  /* max-width: 100%; */
}

.slike img {
  position: relative;
  max-width: 400px;
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
/* 
.slike {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
} */

@media only screen and (min-width: 1200px) {
  .slike {
    position: relative;
    /* margin-left: 50px; */
    /* width: 50%; */
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

  /* .opis {
    max-width: 600px;
    padding: 40px 40px;
  } */
}

.clients {
  display: flex;
  flex-direction: row;
  padding: 20px 50px;
  margin: 10px 0px;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-top: 100px;
}

.client-item {
  margin: 0px 10px;
  text-align: center;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 300;
}

.clients img {
  max-width: 200px;
}

.client-item p {
  padding: 0px 40px;
}
</style>