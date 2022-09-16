<template>
    <div>
        <button @click="backToTop" type="button" class="btn btn-floating btn-lg" id="btn-back-to-top" >
            Nazad na vrh
          </button>
    </div>
</template>

<script>
export default {
    name:'BackToTop',
    methods:{
        backToTop(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    },
    mounted(){
        document.getElementById("btn-back-to-top").style.display = "none";
    }
    
}


window.onscroll = function () {
  skrol();
};

function skrol() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
      document.getElementById("btn-back-to-top").style.display = "block";
  } else {
    document.getElementById("btn-back-to-top").style.display = "none";
  }
}
</script>

<style>


#btn-back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width:auto;
    height:auto;
    

    font-weight: 600;
    letter-spacing: 2px;
    font-size: 18px;
    color: #fff7f7;
    border-color: #fff7f7;
    background-color: #fd010179;
  }
  
#btn-back-to-top:hover {
    color: #fd0101;
}

@media only screen and (max-width: 350px) {
    #btn-back-to-top {
        display:none;
    }
}
</style>