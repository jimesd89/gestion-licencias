import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Clientes from '../views/Clientes.vue';
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/licencias-clientes",
    name: "Clientes",
    component: Clientes,
  },
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
