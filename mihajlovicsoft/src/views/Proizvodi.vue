<template>
    <div>
        <Navbar />
        <div class="container elements">
            <div class="row pt-2">
                <h2 class="naslov">PROIZVODI I USLUGE</h2>
            </div>
            <div class="row justify-content-around align-items-center">
                <div class="col-xl-3 kategorija" v-for="k in json.kategorije" :key="k.id">
                        <button class="dugme" @click="kat(k.id)">{{k.ime}}</button>
                </div>
            </div>
        </div>
        <div id="footer" class="row">
            <Footer />
        </div>
    </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import json from '../json/proizvodi.json'

    export default {
        name: "Proizvodi",
        components: {
            Navbar,
            Footer
        },
        data(){
              return{
                  json: json
              }
          },
        methods:{
            kat(id){
                this.$router.push({ name: 'Potkategorije', params: { pid: id } })
            }
        }
    }
</script>

<style scoped>
.dugme {
    border-color: #fd0101;
    border-width: 2px;
    color: #fd0101;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 18px;
    background-color: transparent;
}
    
.dugme:hover {
color: #fff7f7;
border-color: #fff7f7;
background-color: #fd010179;
}

.kategorija{
    padding-top:2%;
}

.naslov {
    color: #fd0101;
    text-transform: uppercase;
    font-family: "GlacialIndifferenceRegular";
    font-size: 30px;
    font-weight: bold;
}
.elements {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    }
</style>