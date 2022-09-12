<template>
<nav class="navbar navbar-expand-lg navbar-light shadow-5-strong navibg">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Navbar brand -->
    <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" class="d-inline-block align-top logo" alt="logo">
    </a>

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

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 content">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Početna</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Proizvodi i usluge</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cenovnik</a>
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
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: "Navbar",
    components: {

    }
}
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
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.nav-item {
    padding: 10px;
}

.navibg {
    background-color: rgba(222, 222, 222, 0.5);
}


</style>