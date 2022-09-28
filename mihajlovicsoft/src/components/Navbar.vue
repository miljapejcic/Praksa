<template>
  <div>
    <!-- Navbar -->
    <header>
      <div class="header">
        <div class="container-2xl m-auto">
          <div class="titlebox">
            <h1 class="font-xl animate__animated animate__pulse">
              <span class="msoft">Mihajlović Soft.</span> Već 30 godina sa vama
            </h1>
            <h2 class="font-lg animate__animated animate__lightSpeedInLeft">
              Microsoft Certified Partner, Izrada softvera, Kompjuterski
              Inženjering
            </h2>
          </div>
        </div>
      </div>
      <nav
        id="navbar"
        class="navbar navbar-expand-lg shadow-5-strong fixed-top navibg"
        style="transition: 0.4s ease;"
      >
        <!-- Container wrapper -->
        <div class="container-fluid">
          <!-- Navbar brand -->
          <router-link
            class="nav-link"
            :to="{ name: 'Home' }"
            aria-current="page"
            ><a class="navbar-brand"
              ><img
                src="../assets/navbar/logo.png"
                class="d-inline-block align-top logo"
                alt="logo"
                id="logo" /></a
          ></router-link>

          <!-- Toggle button -->
          <button
            class="navbar-toggler navtoggle"
            type="button"
            style="color: #e1e1e1; border-color: #e1e1e1"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <!-- Collapsible wrapper -->
          <div
            class="
              collapse
              navbar-collapse
              justify-content-end
              animate__animated animate__pulse
            "
            id="navbarSupportedContent"
          >
            <!-- Left links -->
            <ul class="navbar-nav mb-2 mb-lg-0" id="content">
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
                <router-link class="nav-link" :to="{ name: 'Podrska' }"
                  >Tehnička podrška</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Partneri' }"
                  >Partneri</router-link
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="goto({ footer })">Kontakt</a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Tim' }"
                  >Postani deo tima</router-link
                >
              </li>
            </ul>
            <!-- Left links -->
          </div>
          <!-- Collapsible wrapper -->
        </div>
        <!-- Container wrapper -->
      </nav>
    </header>
    <div class="dugmeZaTop">
      <button
        @click="backToTop"
        type="button"
        class="btn-floating btn-lg topDugme"
      >
        <b-icon icon="chevron-double-up"></b-icon>
      </button>
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
      document.getElementById(id.footer).scrollIntoView({
        behavior: "smooth",
      });
    },
    backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  props: ["footer"],
  mounted() {
    document.querySelector(".topDugme").style.opacity = "0";
  },
};

window.onscroll = function () {
  scrollFunction();
};

window.onresize = function () {
  changeGradientToggle();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.querySelector(".topDugme").style.opacity = "1";
    document.querySelector(".topDugme").classList.add("active");
    document.querySelector(".topDugme").disabled = false;
  } else {
    document.querySelector(".topDugme").style.opacity = "0";
    document.querySelector(".topDugme").style.transition = "1s ease";
    document.querySelector(".topDugme").disabled = true;
  }
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.width = "50px";
    document.getElementById("content").style.fontSize = "13px";
    document.getElementById("navbar").style.background = `rgb(62, 83, 104)`;
  } else {
    if (window.innerWidth < 991.5) {
      document.getElementById("logo").style.width = "60px";
      document.getElementById("content").style.fontSize = "14px";
      document.getElementById("navbar").style.background = `rgb(62, 83, 104)`;
    } else {
      document.getElementById("logo").style.width = "90px";
      document.getElementById("content").style.fontSize = "16px";
      document.getElementById(
        "navbar"
      ).style.background = `rgba(136, 136, 136, 0.4)`;
    }
  }
}

function changeGradientToggle() {
  if (window.innerWidth < 991.5) {
    document.getElementById("navbar").style.background = `rgb(62, 83, 104)`;
  } else {
    document.getElementById(
      "navbar"
    ).style.background = `rgba(136, 136, 136, 0.4)`;
  }
}
</script>

<style>
.titlebox {
  position: absolute;
  margin: 0 20px;
  top: 55%;
  text-align: left;
  transform: translate(0, -50%);
  color: #fff;
  max-width: 32rem;
  width: calc(100% - 4.5rem);

  text-shadow: rgba(0, 0, 0, 0.35) 0.1em 0.05em 0.5em;
}

.msoft {
  color: #fd0101;
  font-style: italic;
}

.container-2xl {
  max-width: 96rem;
  padding: 0 2.5rem;
}

.font-xl {
  font-size: 3.5rem;
  line-height: 3.5rem;
  margin: 0.67em 0;
}

.titlebox h1 {
  display: block;
  margin: 0.67em 0;
  font-weight: bold;
}

.font-lg {
  font-size: 1.875rem;
  font-weight: 600;
  margin-bottom: 1.8rem;
  line-height: 2.4rem;
}
.logo {
  width: 90px;
  margin: 0px 10px 0px 30px;
  transition: 1s ease;
}

.navtoggle {
  margin-right: 25px;
  color: rgb(220, 74, 74);
}

#content {
  line-height: 20px;
  font-size: 16px;
  font-family: Poppins, sans-serif;
  /* color: rgb(200, 0, 0); */
  transition: 1s ease;
  align-items: center;
}

#content .nav-item {
  margin: 0px 10px;
  cursor: pointer;
  color: #eaeaea;
}

.navibg {
  z-index: 99999;
  transition: 1s ease;
}

.header {
  background-image: linear-gradient(
      155deg,
      transparent,
      rgba(44, 62, 80, 0.542)
    ),
    url(../assets/navbar/header2.jpg);
  background-position: center 0px;
  margin-top: -60px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;

  height: 100vh;
}

@media only screen and (min-width: 991.5px) {
  .navbar {
    background: rgba(136, 136, 136, 0.4);
  }
}

@media only screen and (max-width: 991.5px) {
  .navbar {
    background: rgb(62, 83, 104);
  }
}

a router-link {
  text-decoration: none;
}

.nav-item .nav-link {
  color: #eaeaea;
}

.nav-item .router-link-active:focus {
  color: #fd01019e;
}

.navbar .navbar-nav > li > a:hover {
  color: #fd0101;
}

#navbar {
  transition: 0.4s ease;
}
.topDugme {
  position: fixed;
  width: auto;
  height: auto;
  z-index: 9999;
  transition: 0.7s ease;
}

.topDugme.active {
  position: fixed;
  bottom: 45px;
  right: 20px;
  width: auto;
  height: auto;
  z-index: 9999;
  font-size: 45px;
  color: #ff6c6c;
  background-color: #ffa8a83a;
  border-width: 1px;
  border-color: #ff606083;
  border-radius: 15px;
  padding: 0px 10px;
  transition: 0.7s ease;
}

.topDugme:hover {
  opacity: 100%;
  transition: 0.5s;
  color: #fd0101;
  background-color: #ffc2c2;
  border-color: #ff6060;
}
</style>