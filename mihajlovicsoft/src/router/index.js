import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Proizvodi from '../views/Proizvodi.vue'
import Potkategorije from '../views/Potkategorije.vue'
import ONama from '../views/ONama.vue'
import Tim from '../views/Tim.vue'
import PCKase from '../views/PCKase.vue'
import Podrska from '../views/Podrska.vue'

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
            path: '/PCKase',
            name: 'PCKase',
            component: PCKase
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
    ],
    mode: 'history'
})

export default router