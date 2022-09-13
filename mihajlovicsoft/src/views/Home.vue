<template>
  <div>
    <Navbar />
    <div class="row">
      <ProizvodiHome> </ProizvodiHome>
    </div>
    <div class="onama">
      <ONama />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
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
</script>

<style scoped>

</style>