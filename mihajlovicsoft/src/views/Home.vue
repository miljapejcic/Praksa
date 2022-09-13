<template>
<div id="home">
    <header>
    <Navbar />
        <!-- <a href="https://create.vista.com/unlimited/stock-photos/151410560/stock-photo-keyboard-with-office-supplies/">Photo by IgorTishenko</a> -->

        <!-- <a href="https://create.vista.com/unlimited/stock-photos/151410578/stock-photo-keyboard-with-office-supplies/">Photo by IgorTishenko</a> -->
        <div class="title">
            Vaš pouzdan partner već 30 godina
        </div>
    </header>
    <div class="row">
        <ProizvodiHome>
            
        </ProizvodiHome>
    </div>
</div>
</template>

<script>
import Navbar from "@/components/Navbar";
import ProizvodiHome from "@/components/ProizvodiHome"

export default {
    name: "Home",
    components: {
        Navbar,
        ProizvodiHome
    }
}
</script>

<style scoped>
#home {
    display: flex;
    flex-direction: column;
    margin-top: -60px;
}

header {
  background-image: url(../assets/header.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 700px;
  width: 100%;
}

.title {
    text-align: center;
    float: center;
}
</style>