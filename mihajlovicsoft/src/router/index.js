import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Proizvodi from '../views/Proizvodi.vue'
import Potkategorije from '../views/Potkategorije.vue'
import ONama from '../views/ONama.vue'
import Tim from '../views/Tim.vue'
import Podrska from '../views/Podrska.vue'
import Proizvod from '../views/Proizvod.vue'
import Partneri from '../views/Partneri.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Proizvodi',
            name: 'Proizvodi',
            component: Proizvodi
        },
        {
            path: '/Proizvodi/Potkategorije/:pid',
            name: 'Potkategorije',
            component: Potkategorije
        },
        {
            path: '/ONama',
            name: 'ONama',
            component: ONama
        },
        {
            path: '/Tim',
            name: 'Tim',
            component: Tim
        },
        {
            path: '/Podrska',
            name: 'Podrska',
            component: Podrska
        },
        {
            path: '/Proizvod/:idkat/:idproiz',
            name: 'Proizvod',
            component: Proizvod
        },
        {
            path: '/Partneri',
            name: 'Partneri',
            component: Partneri
        }
    ],
    mode: 'history'
})

export default router