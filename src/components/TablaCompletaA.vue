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
                  <td>
                    <p>
                      <a class="btn btn-primary" data-toggle="collapse" href="#planta" role="button" aria-expanded="false" aria-controls="collapse">
                        {{dato.Nombre}}
                      </a>
                    </p>
                    <div class="collapse" id="planta">
                      <div class="card card-body">
                        <img v-bind:src="displayedDatos" class="card-img-top" alt="Planta 1">
                      </div>
                    </div>
                  </td>
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
    </div>
  </div>
</template>

<script>
import Navegacion from './Navegacion'

export default {
  name: 'TablaCompletaA',
  props: ['dato'],
  components: {
    Navegacion
  },
  data () {
    return {
      datos: [],
      plantas: ['https://bethchatto.2dimg.com/1/teucrium-hircanicum-2_032d3b6c17.jpg',
        'https://dorsetperennials.co.uk/wp-content/uploads/2014/02/Kniphofia-Light-of-the-World-1-400x400.jpg',
        'https://sarahraven.images.blucommerce.com/sarahraven/product/157016_1.jpg?auto=format%2Ccompress&bluhash=3cfc0513f8d2467e4827aeacf6c79a16&w=500&h=550&fit=crop&s=fc31882feff8f3f033053f6425313569',
        'https://st4.depositphotos.com/16656760/30221/i/450/depositphotos_302215286-stock-photo-macleaya-cordata-is-a-poisonous.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/b/b0/W_kuroganemoti3101.jpg',
        'https://ecocosas.com/wp-content/uploads/2018/11/ginkgo-biloba.jpg',
        'https://www.onsseeds.com/files/2882/products/809048/diospyroskaki3.jpg',
        'http://mcseeds.com/wp-content/uploads/2015/12/Cinnamomum_camphora.jpg',
        'https://www.pacificbulbsociety.org/pbswiki/files/Kniphofia/Kniphofia_stricta_Andriesberg_CM.jpg',
        'https://i.ebayimg.com/images/g/yGgAAOSwpDdU3jkV/s-l300.jpg',
        'https://www.passifloratuin.com/images/virtuemart/product/Rubra_4e5cd2b5bc05a.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/c/c4/Hemerocallis_lilio-asphodelus.jpg',
        'https://botany.cz/foto/origanumotitesherb1.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61v4Yuy-7UL._SX425_.jpg',
        'https://www.palmerasyjardines.com/wp-content/uploads/2019/01/001392.jpg',
        'http://www.longfield-gardens.com/_ccLib/image/plants/DETA-155.jpg',
        'https://gardeners.s3.amazonaws.com/p/FLSAKE28396_3.jpg',
        'https://www.naturescape.co.uk/wp-content/uploads/2016/09/Dropwort1.jpg',
        'http://seedempire.com/images/detailed/1/Blackberry_Lily_Seeds_Belamcanda_Chinensis.jpg',
        'https://www.longfield-gardens.com/_ccLib/image/plants/DETA-205.jpg',
        'https://www.jardineriaon.com/wp-content/uploads/2016/11/Protea_cynaroides-1024x683.jpg',
        'https://paisajismodigital.com/blog/wp-content/uploads/2018/05/alocasia2-1024x768.jpg',
        'http://www.spicegarden.eu/WebRoot/StoreLES/Shops/62431129/4BA9/E5EF/F926/4CCD/DA18/C0A8/2936/CBF0/canna_edulis_2.jpg',
        'https://ak7.picdn.net/shutterstock/videos/30565957/thumb/1.jpg',
        'https://www.unavarra.es/herbario/fotos/Papa_rhoe/image001.jpg',
        'https://k62.kn3.net/taringa/7/6/9/3/1/D/ilianamr1/567.jpg'
      ]
    }
  },
  computed: {
    displayedDatos () {
      return this.plantas[Math.floor(Math.random() * 26)]
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
