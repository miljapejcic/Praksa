<template>
  <div>
    <Navbar footer="footer" />
    <div class="container">
      <div class="row">
        <div class="col-xl-12 pt-2">
          <h2 class="naslov">POSTANI DEO NAŠEG TIMA</h2>
        </div>
      </div>
      <div class="row margine">
        <div class="col-xl-12 paragraf">
          <p>
            Kao kompanija sa dugačkom tradicijom, težimo ka tome da se naš tim
            stručnjaka neprekidno razvija i uvećava. Mihajlović Soft nudi
            mogućnost za izvanredan profesionalni razvoj i unapređivanje
            profesionalnih veština tokom rada na različitim projektima, kako sa
            klijentima u zemlji, tako i u inostranstvu. Naš tim programera je
            uporan, posvećen svakom dodeljenom zadatku, a ostvareni rezultati su
            naša garancija kvaliteta.
          </p>
        </div>
      </div>
      <div class="stavke margine">
        <div class="col-xl-6 paragraf mejl">
          <img src="../assets/resume.jpg" />
          <p class="pb-0">
            Ukoliko ste zainteresovani za posao u našoj kompaniji i posedujete
            navedena znanja i veštine, svoj CV mozete poslati na:
            <b>office@mihajlovicsoft.rs</b>
          </p>
        </div>
        <div class="col-xl-6 paragraf">
          <p>Potrebna znanja i veštine:</p>
          <li v-for="v in vestine" :key="v.id">
            {{ v }}
          </li>
        </div>
      </div>
    </div>
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Tim",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      vestine: ["a", "b", "c", "d", "a", "b", "c", "d"],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.paragraf {
  padding: 20px 40px;
}

.stavke {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.mejl img {
  max-width: 400px;
  border-radius: 15px;
  margin-bottom: 30px;
}

b {
  font-weight: bold;
  color: #fd0101;
}

.mejl {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.margine {
  margin: 0px 50px;
}
</style>