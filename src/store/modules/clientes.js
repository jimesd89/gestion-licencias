/* eslint-disable */
import clientes from "../../data/clientes";
import axios from 'axios';

const state = {
  clientes: [],
};
const mutations = {
  'SET_CLIENTES' (state, clientes) {
    state.clientes = clientes;
  },
  'AGREGAR_CLIENTES' (state, cliente) {
    let clientes = state.clientes.concat(cliente)
    state.clientes = clientes;
  },
  'DELETE_ITEM'(state, itemId){
    let clientes = state.clientes.filter(c => c.id != itemId)
    state.clientes =clientes;
  },
  'EDITAR_CLIENTE'(state,cliente){
    state.videos.forEach( c => {
      if(c.id == cliente.id){
        c = cliente;
      }
    })
  }
};

const actions = {
  async initClientes({ commit }) {
    let response = await axios.post("https://gestion-38ed2-default-rtdb.firebaseio.com/clientes.json", clientes.id);
    commit("SET_CLIENTES", response.data);
  },
  async getClientes({commit}){
 const res = await axios.get('https://gestion-38ed2-default-rtdb.firebaseio.com/clientes.json')
 commit('SET_CLIENTES',res.data)
  },
  async agregarClientes ({ commit }) {
    let response = await axios.post("https://gestion-38ed2-default-rtdb.firebaseio.com/clientes.json", clientes.id);
    commit("AGREGAR_CLIENTES", response.data);
  },
  async deleteItem({commit}, item){
    let response = await axios.delete('https://gestion-38ed2-default-rtdb.firebaseio.com/clientes.json',item.id);
    if(response.status == 200 || response.status == 204){
      commit('DELETE_ITEM', item.id)
    }
  },
  async editarCliente({commit}, cliente){
    let response = await axios.put(`https://gestion-38ed2-default-rtdb.firebaseio.com/clientes/${clientes.id}`,cliente)
    let newCliente = response.data.data.attributes;
    commit ('EDITAR_CLIENTE', newCliente);
    return newCliente;
  }
   

  
};
const getters = {
  clientes : (state) => {
    return state.clientes
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
