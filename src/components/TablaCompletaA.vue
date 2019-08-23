<template>
  <div>
    <navegacion />
    <div class="container-fluid">
      <nav class="navbar navbar-expand-md navbar-light border-bottom border-dark">
        <router-link to="/BusquedaA" class="nav-link btn btn-info fas fa-arrow-circle-left"></router-link>
      </nav>
    </div>
    <table class="table">
      <tbody v-bind="(dato, index)">
        <tr>
          <th>N°</th>
          <td>{{index}}</td>
        </tr>
        <tr>
          <th>ID TP</th>
          <td>{{dato.IdPPropagacion}}</td>
        </tr>
                <tr>
          <th>Nombre</th>
          <td>{{dato.Nombre}}</td>
        </tr>
                <tr>
          <th>Tecnicos</th>
          <td>{{dato.ApellidoTec}}_{{dato.NombreTec}} / {{dato.ApellidoAsist}}_{{dato.NombreAsist}}</td>
        </tr>
                <tr>
          <th>Objetivo</th>
          <td>{{dato.Objetivo}}</td>
        </tr>
                <tr>
          <th>Metodo</th>
          <td>{{dato.Metodo}}</td>
        </tr>
            <tr>
          <th>Ing./Legado/F.Rec.</th>
          <td>{{dato.idIngreso}} / {{dato.Legado}} / {{dato.FRecoleccion}}</td>
        </tr>
            <tr>
          <th>Ult.F. yyyy/mm/dd</th>
          <td>{{dato.Fecha}}</td>
        </tr>
            <tr>
          <th>Estado</th>
          <td>{{dato.ItemCierre ? 'TP Abierto' : 'TP Cerrado'}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Navegacion from './Navegacion'

import axios from 'axios'

export default {
  name: 'TablaCompletaA',
  props: ['dato', 'index'],
  components: {
    Navegacion
  },
  data () {
    return {
      datos: []
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    getTasks () {
      axios.get('/api/autoridad').then(result => {
        this.datos = result.data
      })
    }
  }
}
</script>

<style scoped>
.container {
  padding: 0 !important;
}
[class*="container-fluid"] {
  padding: 0 !important;
}
</style>
