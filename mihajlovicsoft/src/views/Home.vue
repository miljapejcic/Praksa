<template>
  <div>
    <Navbar footer="footer" :home = "true"/>
    <div>
      <ProizvodiHome />
    </div>
    <div class="container shapes">
      <div class="reveal fade-bottom">
        <ONamaHome />
      </div>
      <div class="reveal fade-bottom">
        <PartneriHome />
      </div>
    </div>
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import ProizvodiHome from "@/components/ProizvodiHome";
import ONamaHome from "@/components/ONamaHome";
import PartneriHome from "@/components/PartneriHome";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Navbar,
    ProizvodiHome,
    ONamaHome,
    PartneriHome,
    Footer,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.shapes {
  background: url("../assets/shape4.png");
  /* background-position: relative; */
  background-position: contain;
  background-repeat: no-repeat;
  background-size: 600pt;
  background-position-y: 400px;
}

@media only screen and (max-width: 1200px) {
  .shapes {
    background: none;
  }
}
</style>