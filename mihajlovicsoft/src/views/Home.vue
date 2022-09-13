<template>
<<<<<<< Updated upstream
  <div>
    <Navbar />
    <div class="row">
      <ProizvodiHome> </ProizvodiHome>
=======
  <div id="home">
    <header>
      <Navbar />
      <div class="titlebox">
        Vaš pouzdan partner već <i>30 godina</i> <br /><img
          src="../assets/logoslova.png"
        />
      </div>
    </header>
    <div class="row pt-2">
        <ProizvodiHome />
    </div>
    <div class="row pt-2">
        <PartneriHome />
>>>>>>> Stashed changes
    </div>
    <div class="onama">
      <ONama />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
<<<<<<< Updated upstream
import ProizvodiHome from "@/components/ProizvodiHome";
import ONama from "@/components/ONama";

export default {
  name: "Home",
  components: {
    Navbar,
    ProizvodiHome,
    ONama,
  },
};
=======
import ProizvodiHome from "@/components/ProizvodiHome"
import PartneriHome from "@/components/PartneriHome"

export default {
    name: "Home",
    components: {
        Navbar,
        ProizvodiHome,
        PartneriHome
    }
}
>>>>>>> Stashed changes
</script>

<style scoped>

</style>