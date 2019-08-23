<template>
  <div>
    <navegacion />
    <div class="container-fluid">
      <nav class="navbar navbar-expand-xs navbar-light border-bottom border-dark">
        <a class="navbar-brand" href="#">Filtros</a>
        <button
          class="btn btn-info"
          type="button"
          data-toggle="collapse"
          data-target="#Filtros"
          aria-controls="Filtros"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="Filtros">
          <article class="card-group-item">
            <header class="card-title">
              <h3 class="mt-3 mb-0">Fechas</h3>
            </header>
            <div class="card-body py-0">
              <div class="form-row">
                <div class="form-group col-sm-8">
                  <label>Inicio</label>
                  <input type="date" class="form-control" id="inputEmail4" placeholder="18" />
                  <label>Fin</label>
                  <input type="date" class="form-control" placeholder="100" />
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="form-row">
                <div class="form-group col-sm-8">
                  <label>ID plantita</label>
                  <input type="number" class="form-control" placeholder="ID plantita" />
                </div>
                <div class="form-group col-sm-8">
                  <label>Nombre plantita</label>
                  <input type="text" class="form-control" placeholder="Nombre" />
                </div>
              </div>
            </div>

            <!-- card-body.// -->
          </article>
        </div>
      </nav>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">ID TP</th>
            <th scope="col">Nombre</th>
            <th scope="col">Tecnico</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody v-for="(dato, index) in datos" v-bind:key="dato.idPPropagacion">
          <tr>
            <th scope="col">{{index}}</th>
            <th scope="col">{{dato.IdPPropagacion}}</th>
            <th scope="col">{{dato.Nombre}}</th>
            <th scope="col">{{dato.ApellidoTec}}</th>
            <th scope="col">
                <router-link :to="{ name: 'TablaCompletaA', params: { dato,index } }" class="nav-link btn btn-info fas fa-eye"></router-link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Navegacion from './Navegacion'

import axios from 'axios'

export default {
  name: 'BusquedaA',
  components: {
    Navegacion
  },
  data () {
    return {
      datos: []
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios.get('/api/BuscadorAvanzado').then(result => {
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
