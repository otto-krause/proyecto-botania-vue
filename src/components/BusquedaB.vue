<template>
  <div class="overflow-auto">
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
              <h3 class="mt-3 mb-0">ID Especimen</h3>
            </header>
            <div class="card-body">
              <div class="form-row">
                <div class="form-group col-sm-8">
                  <input
                    type="number"
                    v-model="search"
                    class="form-control"
                    placeholder="ID"
                  />
                </div>
              </div>
            </div>

            <!-- card-body.// -->
          </article>
        </div>
      </nav>
      <div class="container-fluid table-responsive-sm">
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th scope="col-1">Fecha</th>
              <th scope="col-1">Legado</th>
              <th scope="col-1">Nombre</th>
              <th scope="col-1">+Info</th>
            </tr>
          </thead>
          <tbody v-for="(dato, index) in displayedDatos" v-bind:key="index">
            <tr>
              <th scope="col-1">{{dato.FLegado.slice(0,10)}}</th>
              <th scope="col-1">{{dato.Legado}}</th>
              <th scope="col-1">{{dato.Nombre}}</th>
              <th scope="col-1">
                <a class="nav-link btn btn-info fas fa-eye" data-toggle="collapse" :href="'#collapse' + index" role="button"></a>
              </th>
            </tr>
            <td colspan="4" class="collapse" :id="'collapse' + index">
              <div class="row mx-auto">
                <div class="col-sm-5">
                  <div class="card">
                    <div class="card-body">
                      <table class="table">
                        <tbody>
                          <tr>
                            <th>Propagacion</th>
                            <td>{{dato.IdPPropagacion}}</td>
                          </tr>
                          <tr>
                            <th>Tecnicos</th>
                            <td>
                              <p>{{dato.CodTecnico}} - {{dato.NombreTec}} {{dato.ApellidoTec}}</p>
                              <p>{{dato.CodAsistente}} - {{dato.NombreAsist}} {{dato.ApellidoAsist}}</p>
                              </td>
                          </tr>
                          <tr>
                            <th>Ing. Principal</th>
                            <td>
                              <p>{{dato.Nombre}}</p>
                              <p>Legado: {{dato.FLegado.slice(0,10)}} - {{dato.Legado}}</p>
                              <p>Rec: {{dato.LugarRecoleccion}}</p>
                              <p>{{dato.Metodo}}</p>
                              <p>Cantidad en origen: {{dato.Cantidad}}</p>
                            </td>
                          </tr>
                          <tr>
                            <th>Objetivo</th>
                            <td>{{dato.Objetivo}}</td>
                          </tr>
                          <tr>
                            <th>Metodo</th>
                            <td>{{dato.Metodo}}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <TablaCompletaB :dato="dato"></TablaCompletaB>
                </div>
              </div>
            </td>
          </tbody>
        </table>
      </div>
    </div>
    <nav class="d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item" v-if="page != 1">
          <a class="page-link" href="#" v-on:click="page = 1">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li v-for="pageNumber in pages.slice(Math.max(0,page-4), page+4)" v-bind:key="pageNumber" v-on:click="page = pageNumber" class="page-item"><a class="page-link" href="#">{{pageNumber}}</a></li>
        <li class="page-item" v-if="page < pages.length">
          <a class="page-link" href="#" v-on:click="page = pages.length">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
/* eslint-disable */
import Navegacion from './Navegacion'
import TablaCompletaB from './TablaCompletaB'

import axios from 'axios'

export default {
  name: 'BusquedaB',
  components: {
    Navegacion,
    TablaCompletaB
  },
  data () {
    return {
      search: '',
      page: 1,
      perPage: 10,
      pages: [],
      datos: []
    }
  },
  mounted () {
    this.getInfo()
  },
  computed: {
    filteredList () {
      return this.datos.filter(dato => {
        return dato.IdPPropagacion.includes(this.search)
      })
    },
    displayedDatos () {
      return this.paginate(this.filteredList)
    }
  },
  methods: {
    async getInfo () {
      axios.get('/api/buscador').then(result => {
        this.datos = result.data
      })
    },
    paginate (datos) {
      let from = (this.page * this.perPage) - this.perPage
      let to = (this.page * this.perPage)

      return this.filteredList.slice(from, to)
    },
    setDatos () {
      let numberOfDatos = Math.ceil(this.filteredList.length / this.perPage)
      this.pages = []
      for (let i = 1; i <= numberOfDatos; i++) {
        this.pages.push(i)
      }
    }
  },
  watch: {
    filteredList () {
      this.page = 1
      this.setDatos()
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
