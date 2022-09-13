<template>
  <div class="about">
    <div class="title"><b>O nama</b></div>
    <div class="content-hor">
      <div class="opis">
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
      </div>
      <div class="slike">
        <img src="../assets/slika1.jpg" />
        <img src="../assets/slika2.jpg" />
        <img src="../assets/slika3.jpg" />
      </div>
    </div>
    <div class="content-hor">
      <ul class="clients">
        <li class="client-item">
          <img src="../assets/mslogo.png" />
          <br />zvanični Microsoft Certified Partner
        </li>
        <li class="client-item">
          <img src="../assets/kasperskylogo.png" />
          <br />autorizovani distributeri Kaspersky Anti-Virus palete programa
        </li>
        <li class="client-item">
          <img src="../assets/nicatlogo.png" />
          <br />član Klastera Ni-CAT
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ONama",
  components: {},
};
</script>

<style scoped>
.title {
  color: #fd0101;
  text-transform: uppercase;
  font-family: "GlacialIndifferenceRegular";
  font-size: 30px;
}

.opis {
  /* font-family: "GlacialIndifferenceRegular"; */
  font-family: "Open Sans";
  font-weight: 300;
}
</style>