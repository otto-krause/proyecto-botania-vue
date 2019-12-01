<template>
  <div>
    <table class="table table-bordered">
      <thead class="thead-light">
        <tr>
          <th scope="col-1">Fecha</th>
          <th scope="col-1">Item</th>
          <th scope="col-1">Mas info</th>
        </tr>
      </thead>
      <tbody v-for="(dato, index) in displayedDatos" v-bind:key="index">
        <tr>
          <th scope="col-1">{{dato.Fecha.slice(0, 10)}}</th>
          <th scope="col-1">{{dato.Nombre}}</th>
          <th scope="col-1">
            <a
              class="nav-link btn btn-success fas fa-eye"
              data-toggle="collapse"
              :href="'#collapseDesc' + index"
              role="button"
            ></a>
          </th>
        </tr>
        <td colspan="3" class="collapse" :id="'collapseDesc' + index">{{dato.Des}}</td>
      </tbody>
    </table>
    <nav class="d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item" v-if="page != 1">
          <a class="page-link" href="#" v-on:click="page = 1">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li
          v-for="pageNumber in pages.slice(Math.max(0,page-4), page+4)"
          v-bind:key="pageNumber"
          v-on:click="page = pageNumber"
          class="page-item"
        >
          <a class="page-link" href="#">{{pageNumber}}</a>
        </li>
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
import axios from "axios";

export default {
  name: "TablaCompletaB",
  props: ["dato"],
  data() {
    return {
      page: 1,
      perPage: 10,
      pages: [],
      datos: []
    };
  },
  mounted() {
    this.getInfo();
  },
  computed: {
    displayedDatos() {
      return this.paginate(this.datos);
    }
  },
  methods: {
    async getInfo() {
      axios.get("/api/buscador2/" + this.dato.IdPPropagacion).then(result => {
        this.datos = result.data;
      });
    },
    paginate(datos) {
      let from = this.page * this.perPage - this.perPage;
      let to = this.page * this.perPage;

      let numberOfDatos = Math.ceil(this.datos.length / this.perPage);
      this.pages = [];
      for (let i = 1; i <= numberOfDatos; i++) {
        this.pages.push(i);
      }

      return this.datos.slice(from, to);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 0 !important;
}
[class*="container-fluid"] {
  padding: 0 !important;
}
</style>
