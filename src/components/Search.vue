<template>
  <div>
    <section class="search">
    <h1 class="title-search">Busqueda de Juegos</h1>
    <br>
    <form>
      <div class="form-row justify-content-center">
        <div class="col-sm-3 my-1">
          <label class="sr-only" for="inlineFormInputName"></label>
          <input type="text" class="form-control" id="inlineFormInputName" v-model="code" @keyup.enter="search"/>
        </div>
        <div class="col-auto my-1">
          <button @click.prevent="search" class="btn btn-danger btn-search">Buscar</button>
        </div>
      </div>
    </form>
    <br>
    <p>
      Numero de juegos Disponible:
      <span>{{this.countAvailable}}</span>
    </p>
    <p>
      cantidad de juegos totales:
      <span>{{this.sumTotal}}</span>
    </p>
    </section>
    <section class="table-result">
        <table class="table">
            <tbody v-if="showResult">
                <tr v-for="(product, index) in inStock" :key='index' :style="{background: product.color }">
                <td>{{ product.code }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.stock }}</td>
                <td>{{ product.price }}</td> 
                <td>{{ product.featured }}</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr :style="{background: this.result.color}">
                <td v-text="this.result.code"></td>
                <td v-text="this.result.name"></td>
                <td v-text="this.result.stock"></td>
                <td v-text="this.result.price"></td>
                <td v-text="this.result.featured"></td>
                </tr>
            </tbody>
        </table>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      code: '',
      showResult: true,
      result: ''
    }
  },
  methods: {
    search(){
      let result = this.byId(this.code)
      this.showResult = false
      this.result = result
    }
  },
  computed: {
    ...mapGetters(['countAvailable', 'sumTotal', 'inStock', 'byId'])
  }
}
</script>

<style>
  /* Sección de busqueda */
  .search {
    text-align: center;
    margin-bottom: 2em;
  }
  .btn-search {
    width: 10em;
    padding: 0.5em;
  }
  /* Tabla de resultados */
  .table-result {
    width: 50em;
    padding-bottom: 2em;
    margin: auto;
  }
  .table {
    border: 1px solid black;
  }
  .table th, .table td{
    border: none;
  }
</style>