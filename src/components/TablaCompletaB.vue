<template>
  <div>
    <navegacion />
    <div class="container-fluid">
      <nav class="navbar navbar-expand-md navbar-light border-bottom border-dark">
        <router-link to="/BusquedaB" class="nav-link btn btn-info fas fa-arrow-circle-left"></router-link>
      </nav>
    </div>
    <table class="table">
      <tbody v-bind="dato">
        <tr>
          <th>Reng</th>
          <td>{{dato.CodPPRenglon}}</td>
        </tr>
        <tr>
          <th>Fecha</th>
          <td>{{dato.Fecha.slice(0,10)}}</td>
        </tr>
                <tr>
          <th>Item</th>
          <td>{{dato.Nombre}}</td>
        </tr>
                <tr>
          <th>Descripcion</th>
          <td>{{dato.Des}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Navegacion from './Navegacion'

export default {
  name: 'TablaCompletaB',
  props: ['dato', 'index'],
  components: {
    Navegacion
  },
  data () {
    return {
      datos: []
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
