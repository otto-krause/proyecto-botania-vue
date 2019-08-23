<template>
  <div>
    <navegacion />
    <div class="container-fluid">
      <nav class="navbar navbar-expand-md navbar-light border-bottom border-dark">
        <router-link to="/BusquedaA" class="nav-link btn btn-info fas fa-arrow-circle-left"></router-link>
      </nav>
    </div>
    <table class="table">
      <tbody>
        <tr>
          <th>N°</th>
          <td>1</td>
        </tr>
        <tr>
          <th>ID TP</th>
          <td>000324</td>
        </tr>
                <tr>
          <th>Nombre</th>
          <td>Agapanthus caulescens Spreng</td>
        </tr>
                <tr>
          <th>Técnicos</th>
          <td>Coultas_Laura / Bernhart_Darío</td>
        </tr>
                <tr>
          <th>Objeto</th>
          <td>Incorporación nueva especie monocotiledónea</td>
        </tr>
                <tr>
          <th>Método</th>
          <td>semilla</td>
        </tr>
                <tr>
          <th>Ing./Legado/F.rec</th>
          <td>000005147 / Barreriro, Graciela / 01/06/2012</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Navegacion from './Navegacion'

import axios from 'axios'

export default {
  name: 'TablaCompleta',
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
