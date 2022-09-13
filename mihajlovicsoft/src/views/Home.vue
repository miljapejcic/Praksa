<template>
  <div id="home">
    <header>
      <Navbar />
      <div class="titlebox">
        Vaš pouzdan partner već <i>30 godina</i> <br /><img
          src="../assets/logoslova.png"
        />
      </div>
    </header>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  margin-top: -60px;
}

header {
  background-image: linear-gradient(
      70deg,
      rgba(255, 255, 255, 0.229),
      rgba(238, 238, 238, 0.213)
    ),
    url(../assets/final.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 700px;
  width: 100%;
}

.titlebox {
  position: absolute;
  padding: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-image: linear-gradient(
    70deg,
    rgba(255, 255, 255, 0.33),
    rgba(238, 238, 238, 0.381)
  );
  font-size: 5vmin;
  line-height: 32px;
  /* font-family: "GlacialIndifferenceRegular"; */
  font-family: "Open Sans";
  font-weight: 300;
}

.titlebox img {
  padding: 5px;
  width: 65%;
  /* min-width: 200px; */
  width: 65vmin;
}
</style>