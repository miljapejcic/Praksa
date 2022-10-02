<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "App",
  components: {},
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();
</script>

<style>
#app {
  font-family: "Poppins", "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  cursor: default;
}

.reveal {
  position: relative;
  opacity: 0;
}

.reveal.active {
  opacity: 1;
}
.active.fade-bottom {
  animation: fade-bottom 0.5s ease-in;
}
.active.fade-left {
  animation: fade-left 0.5s ease-in;
}
.active.fade-right {
  animation: fade-right 0.5s ease-in;
}
@keyframes fade-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-left {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-right {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.naslov-stripe {
  padding: 20px 40px;
  background: #2c3e50;
  color: whitesmoke;
  font-size: 18px;
  text-align: center;
  z-index: 99999999;
}

h2 .routerlink {
  color: whitesmoke;
  text-decoration: none;
  transition: 0.4s ease;
}

h2 .routerlink:hover {
  color: #fd0101;
  transition: 0.4s ease;
}
</style>
