<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'animate.css';

export default {
  name: "App",
  components: {
  },
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
  /* background-color: rgb(235, 180, 180); */
  font-family: "Poppins", "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  cursor: default;
  background: radial-gradient(#fff, rgba(255, 213, 193, 0.329));
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
</style>
