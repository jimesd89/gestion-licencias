import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";


axios.defaults.baseURL = "https://gestion-38ed2-default-rtdb.firebaseio.com/";
axios.defaults.headers.common['Authorization'] = 'header';
axios.defaults.headers.get['Acepts'] = 'apllication';
Vue.config.productionTip = false;



new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
