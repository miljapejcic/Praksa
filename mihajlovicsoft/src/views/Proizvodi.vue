<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12 justify-content-center">
                <Navbar />
            </div>
            <div class="row">
                <div class="col-xl-12 justify-content-around align-items-center">
                    <div v-for="k in json.kategorije" :key="k.id">
                        <div>
                            <button @click="kat(k.id)">{{k.ime}}</button>
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
                
                // console.log(this.json.kategorije[id])
                this.$router.push({ name: 'Potkategorije', params: { pid: id } })
            }
        }
    }
</script>