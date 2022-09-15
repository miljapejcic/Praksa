import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Proizvodi from '../views/Proizvodi.vue'
import Potkategorije from '../views/Potkategorije.vue'
import ONama from '../views/ONama.vue'

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
        }
    ],
    mode: 'history'
})

export default router