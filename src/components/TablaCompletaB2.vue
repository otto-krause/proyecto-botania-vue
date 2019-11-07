<template>
  <div>
    <navegacion />
    <div class="container-fluid">
      <nav class="navbar navbar-expand-md navbar-light border-bottom border-dark">
        <router-link :to="{ name: 'TablaCompletaB', params: { dato } }" class="nav-link btn btn-info fas fa-arrow-circle-left"></router-link>
      </nav>
      <div class="card">
        <div class="card-body">
          <table class="table">
            <tbody v-bind="dato2">
              <tr>
                <th>Fecha</th>
                <td>{{dato2.Fecha.slice(0, 10)}}</td>
              </tr>
              <tr>
                <th>Item</th>
                <td>{{dato2.Nombre}}</td>
              </tr>
              <tr>
                <th>Descripcion</th>
                <td>{{dato2.Des}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navegacion from './Navegacion'

export default {
  name: 'TablaCompletaB2',
  props: ['dato2', 'dato'],
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
