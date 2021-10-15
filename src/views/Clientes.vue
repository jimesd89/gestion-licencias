<!-- eslint-disable -->
<template>
  <v-container mt="16">
    <v-data-table
      :headers="headers"
      :items="clientes"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      show-expand
      item-key="cliente_nombre"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Gestión de clientes</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="green" dark class="mb-2" v-bind="attrs" v-on="on" @click="nuevoCliente">
                Nuevo cliente
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
            <app-cliente v-for="cliente in clientes" :key="cliente"></app-cliente>
              

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancelar
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >¿Esta seguro que desea eliminar este item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancelar</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >Guardar</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
        
      </template>
      <!--<v-tooltip bottom>-->
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small 
                @click="deleteItem(item)"> 
                 mdi-delete </v-icon>
      </template>
      <!-- <span>Tooltip</span>
    </v-tooltip>
    -->
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Resetear </v-btn>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          Más información de {{ item.cliente_nombre }}
        </td>
      </template>
    </v-data-table>
    
  </v-container>
  

</template>
<!-- eslint-disable -->

<script>
import Cliente from './Cliente.vue';
import {mapState} from 'vuex';
export default {
  components : {
   appCliente: Cliente
  },
  data() {
    return {
      expanded: [],
      singleExpand: false,
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: "Cliente",
          align: "start",
          sortable: false,
          value: "cliente_nombre",
        },
        { text: "Fecha de corte", value: "fechaCorte" },
        { text: "Última conexión", value: "ultimaConexion" },
        { text: "Nueva fecha corte", value: "nuevaFechaCorte" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      clientes: [],
      editedIndex: -1,
      editedItem: {
        cliente_id: "",
        cliente_nombre: "",
        fechaCorte: "",
        ultimaConexion: "",
        nuevaFechaCorte: "",
      },
      defaultItem: {
        cliente_id: "",
        cliente_nombre: "",
        fechaCorte: "",
        ultimaConexion: "",
        nuevaFechaCorte: "",
      },
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Cliente" : "Editar Cliente";
    },
    /*
   clientes(){
      return this.$store.dispatch('initClientes')
   }
   */
  
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.clientes = [];
    },
    
    
    nuevoCliente() {
     
     this.$store.dispatch('agregarClientes');
     
    },

    editItem(item) {
      this.$sctore.dispatch('editarCliente',(item))
      //this.editedIndex = this.clientes.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item){
      this.$store.dispatch('deleteItem', item);
      this.dialogDelete = true;
    },
    /*
    (item) {
      this.editedIndex = this.clientes.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },*/

    deleteItemConfirm() {
      this.clientes.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
       await this.$store.dispatch('editarCliente',this.editedItem)
      if (this.editedIndex > -1) {
        Object.assign(this.clientes[this.editedIndex], this.editedItem);
      } else {
        this.clientes.push(this.editedItem);
      }
      this.close();
    },
  },
 
}

</script>
