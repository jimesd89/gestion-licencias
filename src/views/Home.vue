<template>
  <v-app-bar app color="#003f67">
    <div class="d-flex align-center">
      <v-img
        alt="Logo macena"
        class="shrink mr-2"
        contain
        src="../../src/assets/logomacena.jpeg"
        transition="scale-transition"
        width="150"
      />
    </div>

    <v-spacer></v-spacer>

    <div class="my-2">
      <router-link to="/login">
        <v-btn color="primary" dark> Iniciar sesion </v-btn></router-link
      >
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Home",
};
</script>
