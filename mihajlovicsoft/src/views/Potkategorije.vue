<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12 justify-content-center">
                <Navbar />
            </div>
            <button @click="klik">klik</button>
            <!-- <div v-if="isDataLoaded">
                <div class="row">
                    <h2>{{potkat[this.pid].ime}}</h2>
                </div>
                <div class="row">
                    <div class="col-xl-12 justify-content-around align-items-center">
                        <div v-for="k in json.kategorije[pid].potkategorije" :key="k.id">
                            <div>
                                <button @click="klik">{{k}}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <p>CEKAJ</p>
            </div> -->
            
        </div>
        <div class="row">
            <!-- <Footer /> -->
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import json from '../json/proizvodi.json'

    export default{
        name:'Potkategorije',
        components:{
            Navbar
        },
        data(){
            return {
                isDataLoaded:false,
                potkat : json,
                pid: this.$route.params.pid
            }
        },
        created(){
            this.potkat = json;
            this.pid = this.$route.params.pid;
            this.isDataLoaded = true
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