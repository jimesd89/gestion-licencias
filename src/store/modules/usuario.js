import axios from "axios";


const state = {
  usuario: {},
};
const getters = {};
const mutations = {
  SET_USUARIO(state, usuario) {
    state.usuario = usuario;
  },
};
const actions = {
  async onSubmit({ commit }) {
    const formData = {
      user: this.user,
      pass: this.pass,
    };
    const res = await axios.post("https://gestion-38ed2-default-rtdb.firebaseio.com/user.json", formData);
    console.log(res);
    commit("SET_USUARIO");
  },
};

/*
const actions = {
  ingresoUsuario({ commit }, usuario) {
    axios.post("/user.json", usuario.user, usuario.pass).then((res) => {
      console.log(res);
      let usuarioIngreso = {
        user: res.usuario.user,
        pass: res.usuario.pass,
      };
      commit("SET_USUARIO", usuarioIngreso);
      
    });
  }

  
};*/

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
