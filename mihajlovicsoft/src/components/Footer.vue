<template>
  <div>
    <div class="container kontakt reveal fade-bottom">
      <div>
        <div class="justify-content-center naslov">Kontakt</div>
        <div class="elements">
          <div class="location">
            <img src="../assets/location.png" />
          </div>
          <div class="col-xl-6 info">
            Mihajlović Soft d.o.o<br />
            Janka Veselinovića 5A,
            <br />18000 Niš <br />Serbia <br /><br /><b
              ><b-icon icon="envelope-open"
            /></b>
            <a
              href="mailto:office@mihajlovicsoft.rs"
              style="text-decoration: none !important; color: rgb(93, 93, 93)"
              >&nbsp;office@mihajlovicsoft.rs</a
            >
            <br /><b><b-icon icon="telephone" /></b> +381 18 513 000 <br /><b
              ><b-icon icon="printer" />
            </b>
            +381 18 513 308
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div>Copyright © 2022 MihajlovicSoft. All rights reserved.</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Footer",
  components: {},
};
</script>


<style scoped>
.kontakt {
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 0.6px solid #d8d8d8;
  padding-top: 10px;
}

.elements {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.info {
  padding: 60px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: justify;
}

.info b {
  color: #fd0101;
}

a:hover {
  color: #fd0101 !important;
}

.location {
  padding: 40px;
  margin-top: 10px;
  border-right: #d8d8d8 solid 0.6px;
}

.location img {
  max-width: 80%;
}

.footer {
  padding: 10px 20px;
  background-color: #fd0101;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 13px;
  color: rgb(255, 255, 255);
  filter: drop-shadow(0 -0 0.25rem rgba(153, 153, 153));
  text-shadow: 1px 1px #00000064;
  /* position:fixed; */
  bottom: 0;
  width: 100%;
}

@media only screen and (max-width: 990px) {
  .elements {
    flex-wrap: wrap;
  }

  .location {
    border-right: none;
    border-bottom: #d8d8d8 solid 0.6px;
  }

  .info {
    text-align: center;
    padding: 20px;
  }
}
</style>