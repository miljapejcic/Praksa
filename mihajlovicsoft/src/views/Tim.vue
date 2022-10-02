<template>
  <div>
    <Navbar footer="footer" />
    <div>
      <h2 class="naslov-stripe reveal fade-left">
        <router-link :to="{ name: 'Home' }" class="routerlink">
          Početna
        </router-link>
        <b-icon icon="chevron-double-right" /><i> Postani deo tima</i>
      </h2>
    </div>
    <div class="container">
      <div class="stavke reveal fade-bottom">
        <div class="col-xl-12 pt-2">
          <h2
            class="font-lg"
            style="font-size: 34px; margin: auto; text-align: left"
          >
            <b-icon icon="person" /> Postani deo našeg tima
          </h2>
        </div>
        <div class="paragraf">
        Kao kompanija sa dugačkom tradicijom, težimo ka tome da se naš tim
        stručnjaka neprekidno razvija i uvećava. Mihajlović Soft nudi mogućnost
        za izvanredan profesionalni razvoj i unapređivanje profesionalnih
        veština tokom rada na različitim projektima, kako sa klijentima u
        zemlji, tako i u inostranstvu. Naš tim programera je uporan, posvećen
        svakom dodeljenom zadatku, a ostvareni rezultati su naša garancija
        kvaliteta.
        </div>
      </div>
      <div class="stavke">
        <div class="col-xl-12 pt-2">
          <h2
            class="font-lg reveal fade-left"
            style="font-size: 34px; margin: auto; text-align: left"
          >
            <b-icon icon="lightbulb" /> Potrebna znanja i veštine:
          </h2>
          <br />
          <div class="skills reveal fade-bottom">
            <div class="skill" v-for="v in vestine" :key="v.id">
              <img
                class="skill-img"
                :src="require(`@/assets/tim/${v.slika}`)"
              />
              <div class="tekst">{{ v.tekst }}</div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <p class="mejl">Ukoliko ste zainteresovani za
            posao u našoj kompaniji i posedujete navedena znanja i veštine, svoj
            CV mozete poslati na:
            <b>office@mihajlovicsoft.rs</b>
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
        {
          id: 0,
          slika: "cs.png",
          tekst: "Barem dve godine radnog iskustva u .Net C#, ASP.NET ili MVC.",
        },
        {
          id: 1,
          slika: "dotnet.png",
          tekst: "Dobro poznavanje .NET framework 4 ili više.",
        },
        {
          id: 2,
          slika: "analytical.jpg",
          tekst:
            "Odlično poznavanje projektnih obrazaca, kao i odlične analitičke veštine.",
        },
        {
          id: 3,
          slika: "thinking.png",
          tekst: "Pažnja prema detaljima i odlične veštine rešavanja problema.",
        },
        {
          id: 4,
          slika: "english.jpg",
          tekst: "Dobro poznavanje engleskog jezika.",
        },
        { id: 5, slika: "team.jpg", tekst: "Sposobnost rada u timu." },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.mejl {
  font-size: 20px;
  padding: 20px 40px;
  text-align: center;
}
.stavke {
  margin: 30px;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

b {
  color: #fd0101;
}

.skills {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  transition: 0.7s ease;
}

.skill {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 10px;
  background: radial-gradient(#fff, rgba(209, 209, 209, 0.701));
  transition: 0.7s ease;
  /* border: rgba(0, 9, 45, 0.144) 0.5px solid; */
  border-radius: 10px;
  filter: none;
}

.skill:hover {
  /* box-shadow: 0px 0px 10px 4px rgba(75, 62, 127, 0.404); */
  box-shadow: 0px 5px 5px 2px rgba(89, 89, 89, 0.127);
  margin-top: 0px;
  margin-bottom: 15px;
  filter: contrast(1.3);
  transition: 0.7s ease;
}

.tekst {
  text-align: justify;
  padding: 15px;
  color: #3a3b4a;
}

.skill-img {
  max-width: 100%;
  background-color: white;
  border: rgb(0, 9, 45, 0.244) 0.5px solid;
  border-radius: 10px;
}

@media only screen and (max-width: 768px) {
  .skills {
    flex-direction: row;
    justify-content: stretch;
  }
  .skill {
    max-width: 100%;
    flex-direction: row;
    padding: 10px;
    align-items: center;
  }
  .skill-img {
    width: 25%;
    border-radius: 100%;
  }
}
</style>