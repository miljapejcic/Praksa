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
        <router-link class="nav-link" :to="{ name: 'Home' }" aria-current="page"
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
          class="collapse navbar-collapse justify-content-center"
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
    <div class="dugmeZaTop">
      <button
        @click="backToTop"
        type="button"
        class="btn-floating btn-lg topDugme"
      >
        Nazad na vrh
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
      // console.log(id.footer);
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
    document.getElementById("logo").style.width = "60px";
    document.getElementById("content").style.fontSize = "16px";
    document.getElementById("navbar").style.background = `linear-gradient(
        180deg,
        rgba(136, 136, 136, 1),
        rgba(255, 255, 255, 0.9)
      )`;
  } else {
    document.getElementById("logo").style.width = "90px";
    document.getElementById("content").style.fontSize = "20px";
    if (window.innerWidth < 991.5) {
      document.getElementById("navbar").style.background = `linear-gradient(
        180deg,
        rgba(136, 136, 136, 1),
        rgba(255, 255, 255, 0.9)
      )`;
    } else {
      document.getElementById("navbar").style.background = `linear-gradient(
        180deg,
        rgba(136, 136, 136, 0),
        rgba(255, 255, 255, 0.564)
      )`;
    }
  }
}

function changeGradientToggle() {
  if (window.innerWidth < 991.5) {
    document.getElementById("navbar").style.background = `linear-gradient(
        180deg,
        rgba(136, 136, 136, 1),
        rgba(255, 255, 255, 0.9)
      )`;
  } else {
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
  line-height: 20px;
  font-size: 20px;
  font-family: "GlacialIndifferenceRegular";
  color: rgb(0, 0, 0);
  transition: 0.4s;
  align-items: center;
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

.header {
  background-image: url(../assets/navbar/final2.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 600px;
  width: 100%;
  /* top: 0%; */
  margin-top: -60px;
  margin-bottom: 50px;
}

@media only screen and (min-width: 991.5px) {
  .navbar {
    background: linear-gradient(
      180deg,
      rgba(136, 136, 136, 0),
      rgba(255, 255, 255, 0.5)
    );
  }
}

@media only screen and (max-width: 991.5px) {
  .navbar {
    background: linear-gradient(
      180deg,
      rgba(136, 136, 136, 1),
      rgba(255, 255, 255, 0.9)
    );
  }
}

a router-link {
  text-decoration: none;
  color: red;
}

.nav-link:focus {
  /* text-decoration: underline; */
  border: 1px dashed grey;
  border-radius: 15px;
}

.topDugme {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: auto;
  height: auto;
  z-index: 9999;

  font-weight: 600;
  letter-spacing: 2px;
  font-size: 18px;
  color: #fff7f7;
  /* background-color: #fd010179; */
  transition: 1s ease;

  border-radius: 3px;
  border-width: 2px;
  border-color: #fff7f7;
  padding: 10px;
  opacity: 40%;
  border-radius: 15px;

}

.topDugme.active {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: auto;
  height: auto;
  z-index: 9999;

  font-weight: 600;
  letter-spacing: 2px;
  font-size: 18px;
  color: #fff7f7;
  background-color: #fd010179;

  transition: 1s ease;
}

.topDugme:hover {
  color: #fd0101;
  border-color: #fd0101;
  opacity: 100%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@media only screen and (max-width: 750px) {
  .dugmeZaTop {
    display: none;
  }
}
</style>