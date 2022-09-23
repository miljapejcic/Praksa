<template>
  <div>
    <Navbar footer="footer" />
    <div>
      <ProizvodiHome />
    </div>
    <div class="reveal fade-bottom">
      <ONamaHome />
    </div>
    <div class="reveal fade-bottom">
      <PartneriHome />
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
</style>