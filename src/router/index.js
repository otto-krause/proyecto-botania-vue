import Vue from 'vue'
import Router from 'vue-router'

import Navegacion from '@/components/Navegacion'
import BusquedaA from '@/components/BusquedaA'
import BusquedaB from '@/components/BusquedaB'
import TablaCompleta from '@/components/TablaCompleta'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Navegacion',
      component: Navegacion
    },
    {
      path: '/BusquedaA',
      name: 'BusquedaA',
      component: BusquedaA
    },
    {
      path: '/BusquedaB',
      name: 'BusquedaB',
      component: BusquedaB
    },
    {
      path: '/TablaCompleta',
      name: 'TablaCompleta',
      component: TablaCompleta
    }
  ]
})
