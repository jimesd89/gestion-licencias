<template>
  <v-app>
    <router-link to="/">
    </router-link>
    <v-main class="body">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",
  
 /* created(){
    this.$store.dispatch('initclientes')
  }*/
};
</script>

<style>
.body {
  background: url("../src/assets/macenabig.jpeg");
  background-size: 100%;
  background-size: cover;
}
</style>
