<template>
  <div>
    <navegacion />
    <div class="container-fluid">
      <nav class="navbar navbar-expand-md navbar-light border-bottom border-dark">
        <router-link to="/BusquedaB" class="nav-link btn btn-info fas fa-arrow-circle-left"></router-link>
      </nav>
      <div class="row mx-auto">
        <div class="col-sm-5">
          <div class="card">
            <div class="card-body">
              <table class="table">
                <tbody v-bind="dato">
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
                    <th>Fecha Inicio</th>
                    <td>{{dato.FAltaTP.slice(0,10)}}</td>
                  </tr>
                  <tr>
                    <th>Metodo</th>
                    <td>{{dato.Metodo}}</td>
                  </tr>
                  <tr>
                    <th>Usuario</th>
                    <td>{{dato.CreadoUsuario}}</td>
                  </tr>
                  <tr>
                    <th>Creado</th>
                    <td>{{dato.CreadoFecha.slice(0,10)}}</td>
                  </tr>
                  <tr>
                    <th>Modificado</th>
                    <td>{{dato.ModFecha.slice(0,10)}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-sm-7">
          <div class="card">
            <div class="card-body">
              <div class="container-fluid">
                <div class="container-fluid table-responsive-sm">
                  <table class="table table-bordered">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col-1">Fecha</th>
                        <th scope="col-1">Item</th>
                        <th scope="col-1">Mas info</th>
                      </tr>
                    </thead>
                    <tbody v-for="(dato2, index) in displayedDatos" v-bind:key="index">
                      <tr>
                        <th scope="col-1">{{dato2.Fecha.slice(0, 10)}}</th>
                        <th scope="col-1">{{dato2.Nombre}}</th>
                        <th scope="col-1">
                          <router-link
                            :to="{ name: 'TablaCompletaB2', params: { dato2, dato } }"
                            class="nav-link btn btn-info fas fa-eye"
                          ></router-link>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navegacion from './Navegacion'

import axios from 'axios'

export default {
  name: 'TablaCompletaB',
  props: ['dato'],
  components: {
    Navegacion
  },
  data () {
    return {
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
    displayedDatos () {
      return this.paginate(this.datos)
    }
  },
  methods: {
    async getInfo () {
      axios.get('/api/buscador2/' + this.dato.IdPPropagacion).then(result => { this.datos = result.data })
    },
    paginate (datos) {
      let from = (this.page * this.perPage) - this.perPage
      let to = (this.page * this.perPage)

      let numberOfDatos = Math.ceil(this.datos.length / this.perPage)
      this.pages = []
      for (let i = 1; i <= numberOfDatos; i++) {
        this.pages.push(i)
      }

      return this.datos.slice(from, to)
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
