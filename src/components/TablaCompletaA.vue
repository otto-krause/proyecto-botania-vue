<template>
  <div>
    <navegacion />
    <div class="container-fluid">
      <nav class="navbar navbar-expand-md navbar-light border-bottom border-dark">
        <router-link to="/BusquedaA" class="nav-link btn btn-info fas fa-arrow-circle-left"></router-link>
      </nav>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <table class="table">
              <tbody v-bind="dato">
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
                  <td>{{dato.idIngreso}} / {{dato.Legado}} / {{dato.FRecoleccion.slice(0,10)}}</td>
                </tr>
                <tr>
                  <th>Ult.F. yyyy/mm/dd</th>
                  <td>{{dato.Fecha.slice(0,10)}}</td>
                </tr>
                <tr>
                  <th>Estado</th>
                  <td>{{dato.ItemCierre ? 'TP Abierto' : 'TP Cerrado'}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <img src="https://dorsetperennials.co.uk/wp-content/uploads/2014/02/Kniphofia-Light-of-the-World-1-400x400.jpg" class="card-img-top">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navegacion from './Navegacion'

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
