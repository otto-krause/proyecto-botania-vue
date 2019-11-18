<template>
  <div class="overflow-auto">
    <navegacion />
    <!-- {{filteredList}} -->
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
                  <label>Desde</label>
                  <input type="date" v-model="fechaInicio" class="form-control"/>
                  <label>Hasta</label>
                  <input type="date" v-model="fechaFin" class="form-control"/>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="form-row">
                <div class="form-group col-sm-8">
                  <label>ID TP</label>
                  <input type="number" v-model="searchID" class="form-control" placeholder="ID" />
                </div>
                <div class="form-group col-sm-8">
                  <label>Nombre Científico</label>
                  <input type="text" v-model="searchNombre" class="form-control" placeholder="Nombre" />
                </div>
                <div class="form-group col-sm-8">
                  <label>Objetivo</label>
                  <input type="text" v-model="searchObjetivo" class="form-control" placeholder="Objetivo" />
                </div>
                <div class="form-group col-sm-8">
                  <label>Ver estado</label>
                  <div v-if="enCurso && finalizado">
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input type="checkbox" class="custom-control-input" v-model="enCurso" id="enCurso" checked>
                      <label class="custom-control-label" for="enCurso">En curso</label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input type="checkbox" class="custom-control-input" v-model="finalizado" id="finalizado" checked>
                      <label class="custom-control-label" for="finalizado">Finalizado</label>
                    </div>
                  </div>
                  <div v-else>
                    <div v-if="enCurso">
                      <div class="custom-control custom-checkbox custom-control-inline">
                        <input type="checkbox" class="custom-control-input" v-model="enCurso" id="enCurso" disabled checked>
                        <label class="custom-control-label" for="enCurso">En curso</label>
                      </div>
                      <div class="custom-control custom-checkbox custom-control-inline">
                        <input type="checkbox" class="custom-control-input" v-model="finalizado" id="finalizado" checked>
                        <label class="custom-control-label" for="finalizado">Finalizado</label>
                      </div>
                    </div>
                    <div v-else>
                      <div class="custom-control custom-checkbox custom-control-inline">
                        <input type="checkbox" class="custom-control-input" v-model="enCurso" id="enCurso" checked>
                        <label class="custom-control-label" for="enCurso">En curso</label>
                      </div>
                      <div class="custom-control custom-checkbox custom-control-inline">
                        <input type="checkbox" class="custom-control-input" v-model="finalizado" id="finalizado" disabled checked>
                        <label class="custom-control-label" for="finalizado">Finalizado</label>
                      </div>
                    </div>
                  </div>
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
            <th scope="col">Estado</th>
            <th scope="col">ID TP</th>
            <th scope="col">Nombre Científico</th>
            <th scope="col">+Info</th>
          </tr>
        </thead>
        <tbody v-for="(dato, index) in displayedDatos" v-bind:key="index">
          <tr>
            <th scope="col">{{dato.ItemCierre ? 'TP Abierto' : 'TP Cerrado'}}</th>
            <th scope="col">{{dato.IdPPropagacion}}</th>
            <th scope="col">{{dato.Nombre}}</th>
            <th scope="col">
                <router-link :to="{ name: 'TablaCompletaA', params: { dato, index } }" class="nav-link btn btn-info fas fa-eye"></router-link>
            </th>
          </tr>
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
import Navegacion from './Navegacion'

import axios from 'axios'

export default {
  name: 'BusquedaA',
  components: {
    Navegacion
  },
  data () {
    return {
      searchID: '',
      searchNombre: '',
      searchObjetivo: '',
      enCurso: true,
      finalizado: true,
      fechaInicio: new Date('0000/01/01').toISOString(),
      fechaFin: new Date().toISOString(),
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
        return dato.IdPPropagacion.toLowerCase().includes(this.searchID.toLowerCase()) &&
        dato.Nombre.toLowerCase().includes(this.searchNombre.toLowerCase()) &&
        dato.Fecha >= this.fechaInicio && dato.Fecha <= this.fechaFin &&
        dato.Objetivo.toLowerCase().includes(this.searchObjetivo.toLowerCase()) &&
        this.enCurso && this.finalizado ? dato.ItemCierre === 1 || dato.ItemCierre === 0 : this.enCurso !== this.finalizado && this.enCurso ? dato.ItemCierre === 1 : dato.ItemCierre === 0
      })
    },
    displayedDatos () {
      return this.paginate()
    }
  },
  methods: {
    async getInfo () {
      axios.get('/api/BuscadorAvanzado').then(result => {
        this.datos = result.data
        this.datos.forEach(dato => {
          if (!dato.Objetivo) {
            dato.Objetivo = 'Ninguno'
          }
        })
      })
    },
    paginate () {
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
