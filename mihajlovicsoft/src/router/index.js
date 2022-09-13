import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Proizvodi from '../views/Proizvodi.vue'
import PCKase from '../views/PCKase.vue'
import GasPump from '../views/PCKase.vue'
import ObracunPlata from '../views/PCKase.vue'
import Knjigovodstvo from '../views/PCKase.vue'
import Hoteli from '../views/PCKase.vue'
import SpecificneApp from '../views/PCKase.vue'

Vue.use(Router)

const router = new Router({
    routes:[
        {
            path:'/',
            name: 'Home',
            component: Home
        },
        {
            path:'/Proizvodi',
            name: 'Proizvodi',
            component: Proizvodi
        },
        {
            path:'/Proizvodi/PCKase',
            name: 'PCKase',
            component: PCKase
        },
        {
            path:'/Proizvodi/GasPump',
            name: 'GasPump',
            component: GasPump
        },
        {
            path:'/Proizvodi/ObracunPlata',
            name: 'ObracunPlata',
            component: ObracunPlata
        },
        {
            path:'/Proizvodi/Knjigovodstvo',
            name: 'Knjigovodstvo',
            component: Knjigovodstvo
        },
        {
            path:'/Proizvodi/Hoteli',
            name: 'Hoteli',
            component: Hoteli
        },
        {
            path:'/Proizvodi/SpecificneApp',
            name: 'SpecificneApp',
            component: SpecificneApp
        }
    ],
    mode:'history'
})

export default router