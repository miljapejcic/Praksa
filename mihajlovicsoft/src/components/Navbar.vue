<template>
  <!-- Navbar -->
  <div class="header">
    <nav
      id="navbar"
      class="navbar navbar-expand-lg shadow-5-strong fixed-top navibg"
    >
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Navbar brand -->
        <a class="navbar-brand" href="#"
          ><img
            src="../assets/logo.png"
            class="d-inline-block align-top logo"
            alt="logo"
            id="logo"
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="content">
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ name: 'Home' }"
                aria-current="page"
                >Početna</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Proizvodi' }"
                >Proizvodi i usluge</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'ONama' }"
                >O nama</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="goto({ footer })">Kontakt</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Tim' }"
                >Postani deo našeg tima</router-link
              >
              <!-- <a class="nav-link" href="#">Postani deo našeg tima</a> -->
            </li>
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <div class="titlebox">
      Vaš pouzdan partner već <i>30 godina</i> <br /><img
        src="../assets/logoslova.png"
      />
    </div>
  </div>
  <!-- Navbar -->
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  methods: {
    goto(id) {
      // console.log(id.footer);
      document.getElementById(id.footer).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  props: ["footer"],
};

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.width = "60px";
    document.getElementById("content").style.fontSize = "16px";
    document.getElementById("navbar").style.background = `linear-gradient(
    180deg,
    rgba(136, 136, 136, 0.9),
    rgba(255, 255, 255, 0.9)
  )`;
  } else {
    document.getElementById("logo").style.width = "90px";
    document.getElementById("content").style.fontSize = "20px";
    document.getElementById("navbar").style.background = `linear-gradient(
    180deg,
    rgba(136, 136, 136, 0),
    rgba(255, 255, 255, 0.564)
  )`;
  }
}
</script>

<style>
.logo {
  width: 90px;
  margin: 0px 10px 0px 30px;
  transition: 0.4s;
}

.navtoggle {
  margin-right: 25px;
  color: rgb(220, 74, 74);
}

#content {
  text-transform: uppercase;
  /* text-align: right; */
  line-height: 17px;
  font-size: 20px;
  font-family: "GlacialIndifferenceRegular";
  color: rgb(0, 0, 0);
  transition: 0.4s;
}

#content .nav-item {
  margin: 0px 20px;
  cursor: pointer;

}

.navibg {
  background-image: linear-gradient(
    180deg,
    rgba(136, 136, 136, 0),
    rgba(255, 255, 255, 0.564)
  );
  z-index: 99999;
  transition: 0.4s;
  /* margin-top: -60px; */
}

.home {
  display: flex;
  flex-direction: column;
  /* margin-top: -60px; */
  margin-bottom: 20px;
}

.header {
  background-image: linear-gradient(
      70deg,
      rgba(255, 255, 255, 0.229),
      rgba(238, 238, 238, 0.213)
    ),
    url(../assets/final.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 600px;
  width: 100%;
  top: 0%;
  margin-top: -60px;
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
  font-family: "Open Sans";
  font-weight: 300;
}

.titlebox img {
  padding: 5px;
  width: 65%;
  width: 65vmin;
}

a router-link {
  text-decoration: none;
  color: black;
}
</style>