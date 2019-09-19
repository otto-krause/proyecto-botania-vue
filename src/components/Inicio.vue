<template>
  <div>
    <navegacion />
    <div id="inicio">
      <h1 class="text-center">Jardín botánico</h1>
      <h3 class="text-center"> Carlos Thays</h3>
      <img src="../../static/JardinBotanicoLogo.png" class="rounded mx-auto d-block mt-5" alt="Jardin Botanico">
    </div>
    <!-- <div id="botanico" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#botanico" data-slide-to="0" class="active"></li>
        <li data-target="#botanico" data-slide-to="1"></li>
        <li data-target="#botanico" data-slide-to="2"></li>
        <li data-target="#botanico" data-slide-to="3"></li>
        <li data-target="#botanico" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="slide">
            <img src="../../static/jardin-botanico-slide-0.png" class="d-block w-100" alt="LogoJardinBotanico">
          </div>
        </div>
        <div class="carousel-item">
          <div class="slide">
            <img src="../../static/jardin-botanico-slide-1.jpg" class="d-block w-100" alt="EstatuaCarlosThays">
          </div>
        </div>
        <div class="carousel-item">
          <div class="slide">
            <img src="../../static/jardin-botanico-slide-2.jpg" class="d-block w-100" alt="JardinBotanico1">
          </div>
        </div>
        <div class="carousel-item">
          <div class="slide">
            <img src="../../static/jardin-botanico-slide-3.jpg" class="d-block w-100" alt="JardinBotanico2">
          </div>
        </div>
        <div class="carousel-item">
          <div class="slide">
            <img src="../../static/jardin-botanico-slide-4.jpg" class="d-block w-100" alt="JardinBotanico3">
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#botanico" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#botanico" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div> -->
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
#inicio {
  padding-top: 20%;
}
.container {
  padding: 0 !important;
}
[class*="container-fluid"] {
  padding: 0 !important;
}
</style>
