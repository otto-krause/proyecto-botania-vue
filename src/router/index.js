import Vue from 'vue'
import Router from 'vue-router'

import Inicio from '@/components/Inicio'
import BusquedaA from '@/components/BusquedaA'
import BusquedaB from '@/components/BusquedaB'
import TablaCompletaB from '@/components/TablaCompletaB'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
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
      path: '/TablaCompletaB',
      name: 'TablaCompletaB',
      component: TablaCompletaB,
      props: true
    }
  ]
})
