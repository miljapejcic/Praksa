<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12 justify-content-center">
                <Navbar />
            </div>
            <button @click="klik">klik</button>

                <div class="row">
                    <h2>{{this.potkat.kategorije[this.pid].ime}}</h2>
                </div>
                <div class="row">
                    <div class="col-xl-12 justify-content-around align-items-center">
                        <div v-for="k in potkat.kategorije[pid].potkategorije" :key="k.id">
                            <div>
                                <button @click="klik">{{k}}</button>
                            </div>
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
        name:'Proizvod',
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

</style>