<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg shadow-5-strong navibg">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Navbar brand -->
      <a class="navbar-brand" href="#"
        ><img
          src="../assets/logo.png"
          class="d-inline-block align-top logo"
          alt="logo"
      /></a>

      <!-- Toggle button -->
      <button
        class="navbar-toggler navtoggle"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 content">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Početna</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Proizvodi i usluge</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">O nama</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Kontakt</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Postani deo našeg tima</a>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style scoped>
.logo {
  width: 90px;
  margin: 0px 10px 0px 30px;
}

.navtoggle {
  margin-right: 25px;
  color: rgb(220, 74, 74);
}

.content {
  text-transform: uppercase;
  /* text-align: right; */
  line-height: 17px;
  font-size: 20px;
  font-family: "GlacialIndifferenceRegular";
  color: rgb(0, 0, 0);
}

.content .nav-item {
  margin: 0px 20px;
}

.navibg {
  background-image: linear-gradient(
    180deg,
    rgba(136, 136, 136, 0),
    rgba(255, 255, 255, 0.564)
  );
  z-index: 99999;
}
</style>