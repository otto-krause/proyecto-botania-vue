<template>
  <div>
    <navegacion />
    <h1 class="text-center">Jardin botanico</h1>
    <h3 class="text-center"> Carlos Thays</h3>
    <img src="../../static/JardinBotanicoLogo.png" class="rounded mx-auto d-block mt-5" alt="Jardin Botanico">
  </div>
</template>

<script>
import Navegacion from './Navegacion'

export default {
  name: 'Inicio',
  components: {
    Navegacion
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
