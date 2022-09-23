<template>
  <div>
    <Navbar footer="footer" />
    <div class="container" style="margin-top: 30px">
      <div class="row">
        <div class="stavke">
          <div class="col-xl-2 paragraf round-img reveal fade-left">
            <img src="../assets/interview.jpeg" />
          </div>
          <div class="col-xl-8 paragraf reveal fade-bottom">
            <div class="col-xl-12 pt-2">
              <h2
                class="font-lg"
                style="font-size: 34px; margin: auto; text-align: left"
              >
                <b-icon icon="person" /> Postani deo našeg tima
              </h2>
            </div>
            <p>
              <br />
              Kao kompanija sa dugačkom tradicijom, težimo ka tome da se naš tim
              stručnjaka neprekidno razvija i uvećava. Mihajlović Soft nudi
              mogućnost za izvanredan profesionalni razvoj i unapređivanje
              profesionalnih veština tokom rada na različitim projektima, kako
              sa klijentima u zemlji, tako i u inostranstvu. Naš tim programera
              je uporan, posvećen svakom dodeljenom zadatku, a ostvareni
              rezultati su naša garancija kvaliteta.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="stavke">
          <div class="col-xl-6 paragraf reveal fade-left">
            <h2
              class="font-lg"
              style="font-size: 34px; margin: auto; text-align: left"
            >
              <b-icon icon="lightbulb" /> Potrebna znanja i veštine:
            </h2>
            <br />
            <p class="vestine" v-for="v in vestine" :key="v.id">
              <b-icon icon="caret-right-fill" /> {{ v }}
            </p>
          </div>
          <div class="col-xl-4 mejl reveal fade-right">
            <img src="../assets/application.jpeg" />
          </div>
          <div class="col-xl-10  reveal fade-bottom">
            <p class="paragraf">
              <b><b-icon icon="envelope" /></b> Ukoliko ste zainteresovani za posao u našoj kompaniji i posedujete
              navedena znanja i veštine, svoj CV mozete poslati na:
              <b>office@mihajlovicsoft.rs</b>
            </p>
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
      vestine: [
        "Radno iskustvo u .Net C#, ASP.NET ili MVC",
        "Dobro poznavanje .NET framework 4 ili više",
        "Odlično poznavanje projektnih obrazaca",
        "Odlične analitičke veštine i veštine rešavanja problema",
        "Pažnja prema detaljima",
        "Dobro poznavanje engleskog jezika",
        "Sposobnost rada u timu",
      ],
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
  margin: 20px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.round-img {
  max-width: 100%;
  padding: 10px 20px 0px 10px;
}

.round-img img {
  width: 180px;
  border-radius: 100%;
  transition: 0.4s ease;
  box-shadow: 0.7rem 0 1.4rem 0.2rem rgba(82, 82, 82, 0.25);
}

.round-img img:hover {
  width: 190px;
  transition: 0.4s ease;
}

.vestine::before {
  transform: scaleX(0);
  transform-origin: bottom right;
}

.vestine:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.vestine::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  inset: 0 0 0 0;
  background: hsl(200 100% 80%);
  z-index: -1;
  transition: transform 0.3s ease;
}

.vestine {
  position: relative;
  padding: 5px;
  margin: 0px;
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

.mejl img {
  width: 70%;
  border-radius: 10%;
  transition: 0.4s ease;
  box-shadow: 0.7rem 0 1.4rem 0.2rem rgba(82, 82, 82, 0.25);
}

.mejl img:hover {
  width: 75%;
  transition: 0.4s ease;
}
</style>