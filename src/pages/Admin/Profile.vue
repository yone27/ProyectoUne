<template>
  <q-page>
    <section class="section">
      <q-form class="row q-col-gutter-md">
        <q-input label="Nombre" v-model="data.name" class="col-md-6 col-sm-6" />
        <q-input
          label="Apellido"
          v-model="data.lastname"
          class="col-md-6 col-sm-6"
        />
        <q-input
          label="Correo electrónico"
          v-model="data.email"
          class="col-md-6 col-sm-6"
        />
        <q-input label="Cedula" v-model="data.ci" 
          mask="##.###.###"
         class="col-md-6 col-sm-6" />
        <q-input
          label="Dirección"
          v-model="data.address"
          autogrow
          class="col-md-6 col-sm-6"
        />
        <q-input
          label="Teléfono 1"
          v-model="data.phone1"
          class="col-md-3 col-sm-3"
          mask="(###) ### - ####"
        />
        <q-input
          label="Teléfono 2"
          v-model="data.phone2"
          class="col-md-3 col-sm-3"
          mask="(###) ### - ####"
        />
        <h3 class="col-md-12 col-sm-12 text-h5 q-my-none">
          Datos bancarios (opcionales)
        </h3>
        <q-input
          label="Nombre del banco"
          v-model="data.bankname"
          class="col-md-6 col-sm-6"
        />
        <q-input
          label="Nombre del banco"
          v-model="data.bankaccount"
          class="col-md-6 col-sm-6"
        />
        <div>
          <q-btn label="Enviar" type="submit" color="primary" class="q-mr-sm" />
          <q-btn label="Salir" type="button" outline color="grey-8" />
        </div>
      </q-form>
    </section>
  </q-page>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const data = reactive({
      name: "Ryan",
      lastname: "Dahl",
      email: "Ryan@node.com",
      ci: "27916733",
      address: "Mi direccion",
      phone1: "4241827991",
      phone2: "4241827991",
      birthdate: "25-10-1999",
      bankname: "Banco de venezuela",
      bankaccount: "0102225458552",
    });

    return {
      data,
    };
  },
};
</script>

<style lang="sass">
</style>
