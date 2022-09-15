<template>
  <div>
    <Navbar footer='footer'/>
    <div class="row pt-2">
      <ProizvodiHome />
    </div>
    <div class="onama">
      <ONamaHome />
    </div>
    <div class="row pt-2">
      <PartneriHome />
    </div>
    <div class="row pt-2" id="footer">
      <Footer/>
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
};
</script>

<style scoped>

</style>