<template>
    <div class="container-fluid">
        <div class="row">
            <Navbar />
        </div>
        <div class="row">
            <h2 class="naslov pt-2">{{this.potkat.kategorije[this.pid].ime}}</h2>
        </div>
        <div class="row">
            <div class="col-xl-12 justify-content-around align-items-center">
                <div v-for="k in potkat.kategorije[pid].potkategorije" :key="k.id">
                    <div>
                        <button @click="kat(k.id)">{{k}}</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import json from '../json/proizvodi.json'
import Footer from '../components/Footer.vue'

    export default{
        name:'Potkategorije',
        components:{
            Navbar,
            Footer
        },
        data(){
            return {
                isDataLoaded:false,
                potkat : json,
                pid: this.$route.params.pid
            }
        },
        methods:{
            klik(){
                console.log(this.potkat)
            }
        }
    }
</script>

<style>
.naslov {
    color: #fd0101;
    text-transform: uppercase;
    font-family: "GlacialIndifferenceRegular";
    font-size: 30px;
    font-weight: bold;
}
</style>