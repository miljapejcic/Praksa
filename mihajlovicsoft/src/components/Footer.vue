<template>
  <div class="container kontakt">
    <div class="row">
      <div class="justify-content-center naslov">Kontakt</div>
      <div class="elements">
        <div class="location">
          <img src="../assets/location.png" />
        </div>
        <div class="col-xl-6 info">
          Janka Veselinovića 5A,
          <br />18000 Niš <br />Serbia <br /><br /><b>E-mail:</b>
          office@mihajlovicsoft.rs <br /><b>Telefon:</b>+381 18 513 000 <br /><b
            >Fax:</b
          >
          +381 18 513 308
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Footer",
  components: {},
};
</script>


<style>
.kontakt {
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.elements {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.info {
  padding: 60px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 300;
  font-size: 18px;
  text-align: justify;
}

.info b {
  color: #fd0101;
}

.location {
  padding: 40px;
  margin-top: 10px;
}

.location img {
  max-width: 100%;
}
</style>