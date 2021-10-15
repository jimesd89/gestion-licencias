<template>
  <div class="login">
    <v-card>
      <h3 class="ingreso">Ingresar</h3>
      <br />
      <v-form
        @submit.prevent="onSubmit"
        ref="formData"
        v-model="btnEnabled"
        novalidate="novalidate"
      >
        <div class="input">
          <v-text-field
            v-model="usuario.user"
            :rules="[rules.required]"
            filled
            color="#003f67"
            label="Usuario"
            style="min-height: 96px"
            type="text"
          ></v-text-field>
        </div>

        <div class="input">
          <v-text-field
            v-model="usuario.pass"
            :rules="[rules.required]"
            filled
            color="#003f67"
            counter="15"
            label="Password"
            style="min-height: 96px"
            type="password"
          ></v-text-field>
        </div>
      </v-form>
      <v-divider></v-divider>
      <router-link to="/licencias-clientes">
        <v-card-actions>
          <v-spacer></v-spacer>
          
          <loading
            v-model="isLoading"
            :can-cancel="false"
            :is-full-page=true
          />
          <v-btn
            v-bind:disabled="!btnEnabled"
            value="Send"
            class="white--text"
            type="submit"
            :loading="isLoading"
            color="#003f67"
            depressed
            @click="onSubmit"
          >
            Ingresar
          </v-btn>
        </v-card-actions>
      </router-link>
    </v-card>
  </div>
</template>

<script>
  import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  components: {
    Loading
  },
  name: "Login",
  data() {
    return {
      usuario: {
        user: "",
        pass: "",
      },
      isLoading: false,
      btnEnabled: true,
      rules: {
        required: (v) => !!v || "Este campo es requerido",
      },
    };
  },
  methods: {
    onSubmit() {
      // const formData = {
      //   user: this.user,
      //   pass: this.pass,
      // };
      try {
        const res = this.$store.dispatch("Clientes/initClientes");
        if (res === 200) {
          this.usuario = {};
        }
      } catch (error) {
        this.isLoading = false;
      }
    },
  },

  //   resetform(){
  //   this.usuario.user= '',
  //   this.usuario.pass= ''
  // }
};

/* async onSubmit() {
      const formData = {
        user: this.user,
        pass: this.pass,
      };
      const res = await axios
        .post("/user.json", formData)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
      console.log(res);*/
</script>

<style scoped>
.login {
  width: 350px;
  margin: 40px auto;
  border: 1px solid #eee;

  box-shadow: 0 3px 4px #ccc;
}
.input {
  margin: 10px auto;
  padding: 15px;
}

.ingreso {
  text-align: center;
  color: #eba205;
  padding: 10px;
}
</style>
