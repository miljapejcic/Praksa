<template>
    <div>
        <Navbar />
        <div class="container">
            <div class="row">
                <div class="col-xl-12 pt-2">
                    <h2 class="naslov">POSTANI DEO NAŠEG TIMA</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 paragraf">
                    <p>Kao kompanija sa dugačkom tradicijom, težimo ka tome da se naš tim stručnjaka neprekidno razvija i uvećava. Mihajlović Soft nudi mogućnost za izvanredan profesionalni razvoj i unapređivanje profesionalnih veština tokom rada na različitim projektima, kako sa klijentima u zemlji, tako i u inostranstvu. Naš tim programera je uporan, posvećen svakom dodeljenom zadatku, a ostvareni rezultati su naša garancija kvaliteta.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 paragraf">
                    <p>Potrebna znanja i veštine:</p>
                    <li v-for="v in vestine" :key="v.id">
                        {{ v }}
                    </li>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 paragraf">
                    <p class="pb-0">Ukoliko ste zainteresovani za posao u našoj kompaniji i posedujete navedena znanja i veštine, svoj CV mozete poslati na:</p>
                    <b class="mejl">office@mihajlovicsoft.rs</b>
                </div>
            </div>
        </div>
        <div id="footer">
            <Footer />
        </div>
    </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

    export default {
        name: "Tim",
        components: {
            Navbar,
            Footer
        },
        data(){
            return {
                vestine:['a','b','c','d','a','b','c','d']
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

.paragraf {
    font-family: "Be Vietnam Pro", sans-serif;
    padding:30px;
  
  
    /* ovo nadole je marta dodala!!!!
    padding: 40px 20px;
    */
    font-weight: 300;
    font-size: 18px;
    text-align: justify; 
}

.naslov {
color: #fd0101;
text-transform: uppercase;
font-family: "GlacialIndifferenceRegular";
font-size: 30px;
font-weight: bold;
}

.mejl {
    font-weight: bold;
    color: #fd0101;
  }
</style>