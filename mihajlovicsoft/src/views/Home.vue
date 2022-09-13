<template>
  <!-- <div> -->
  <div id="home">
    <Navbar />
    <div class="row pt-2">
      <ProizvodiHome />
    </div>
    <div class="onama">
      <ONama />
    </div>
    <div class="row pt-2">
      <PartneriHome />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import ProizvodiHome from "@/components/ProizvodiHome";
import ONama from "@/components/ONama";
import PartneriHome from "@/components/PartneriHome";

export default {
  name: "Home",
  components: {
    Navbar,
    ProizvodiHome,
    ONama,
    PartneriHome,
  },
};
</script>

<style scoped>
</style>