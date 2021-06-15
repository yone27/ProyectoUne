<template>
  <q-page
    class="window-height window-width row justify-center items-center custom-bg"
  >
    <q-card square class="shadow-24" style="width: 350px">
      <q-card-section class="bg-green-8">
        <h4 class="text-white q-my-sm q-mb-none">
          <q-btn flat icon="arrow_back" text-color="white" to="/" title="Atrás" />
          Iniciar sesión
        </h4>
      </q-card-section>
      <q-card-section>
        <q-form class="q-px-sm">
          <q-input square clearable v-model="email" type="email" label="Email">
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
          <q-input
            square
            clearable
            v-model="password"
            type="password"
            label="Contraseña"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
        </q-form>
      </q-card-section>
      <q-card-actions class="q-px-lg">
        <q-btn
          color="green-8"
          class="full-width"
          icon-right="send"
          label="Iniciar sesión"
        />
      </q-card-actions>
      <q-card-section class="text-center q-pa-sm">
        <router-link class="text-grey-6" to="/signup">
          <p>¿Eres nuevo? Registrate</p>
        </router-link>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Login",
  setup() {
    const email = ref("");
    const username = ref("");
    const password = ref("");
    return {
      email,
      username,
      password,
    };
  },
};
</script>

<style lang="sass">
.custom-bg
    background-position: center center
    background-image: url(https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/breadcrumb_bkg.jpg)
    background-repeat: no-repeat
    background-position: bottom
    background-color: #f8eee4
</style>