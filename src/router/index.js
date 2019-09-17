import Vue from 'vue'
import Router from 'vue-router'

import Inicio from '@/components/Inicio'
import BusquedaA from '@/components/BusquedaA'
import BusquedaB from '@/components/BusquedaB'
import TablaCompletaA from '@/components/TablaCompletaA'
import TablaCompletaB from '@/components/TablaCompletaB'
import TablaCompletaB2 from '@/components/TablaCompletaB2'

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
      path: '/TablaCompletaA',
      name: 'TablaCompletaA',
      component: TablaCompletaA,
      props: true
    },
    {
      path: '/TablaCompletaB',
      name: 'TablaCompletaB',
      component: TablaCompletaB,
      props: true
    },
    {
      path: '/TablaCompletaB2',
      name: 'TablaCompletaB2',
      component: TablaCompletaB2,
      props: true
    }
  ]
})
