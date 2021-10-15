<!-- eslint-disable -->
<template>
  <div>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.cliente_nombre"
                label="Nombre del cliente"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.fechaCorte"
                label="Fecha de corte"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.ultimaConexion"
                label="Ultima conexion"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.ultimaFechaCorte"
                label="Nueva fecha corte"
              ></v-text-field>
            </v-col>
          </v-row>
          <!--<v-tooltip bottom>-->
     
        </v-container>
      </v-card-text>
    
  </div>
</template>
<!-- eslint-disable -->

<script>
export default {
  name: "Cliente",
  methods: {
    cliente() {
      return this.$store.state.clientes
    },
  },
};
</script>
