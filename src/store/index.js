import Vue from "vue";
import Vuex from "vuex";
import Usuario from "./modules/usuario";
import Clientes from "./modules/clientes";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    Usuario,
    Clientes,
  },
});
