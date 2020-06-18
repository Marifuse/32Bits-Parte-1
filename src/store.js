import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [
      {code:'0001', name: 'Sekiro', stock:'100', price:'30000', color: 'red', featured: true},
      {code:'0002', name: 'Fifa 21', stock:'100', price:'25000', color: 'blue', featured: false},
      {code:'0003', name: 'Gears of War 4', stock: '100', price:'15000', color: 'green', featured: true},
      {code:'0004', name: 'Mario Tennis Aces', stock: '100', price: '35000', color: 'yellow', featured: false},
      {code:'0005', name: 'Bloodbrne', stock: '100', price: '10000', color: 'blue', featured: false},
      {code:'0006', name: 'Forza Horizon 4', stock:'100', price:'20000', color: 'red', featured: true},
    ]
  },
  getters: {
    inStock (state) {
      return state.products.filter((product) => {
        return product.stock > 0
      })
    },
    byId: (state, getters) => (code) => {
      return getters.inStock.find(product => product.code == code)
    },
    countAvailable(state){
      return state.products.length
    },
   sumTotal(state){
     return state.products.reduce((acc, prod) => acc += parseInt(prod.stock),0)
    },
  },
  mutations: {

  },
  actions: {

  }
});

export default store;