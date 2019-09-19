<template>
  <nav class="navbar navbar-expand-md navbar-light bg-warning">
    <router-link class="navbar-brand" to="/">
    Botanic System
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/BusquedaA" class="nav-link">Busqueda Avanzada</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/BusquedaB" class="nav-link">Busqueda por ID</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navegacion'
}
</script>

<style>
</style>
