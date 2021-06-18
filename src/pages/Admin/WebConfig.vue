<template>
  <q-page>
    <section class="">
      <q-tabs
        v-model="tab"
        dense
        class="q-mb-md bg-primary text-white shadow-2"
        active-color="white"
        indicator-color="white"
        align="justify"
        narrow-indicator
      >
        <q-tab name="mails" label="General" />
        <q-tab name="alarms" label="Redes Sociales" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated class="box-shadow">
        <q-tab-panel name="mails">
          <q-form class="row q-col-gutter-md">
            <q-input label="Compañia" class="col-md-12 col-sm-12" />
            <q-input label="Email" class="col-md-12 col-sm-12" />
            <q-input label="Rif" class="col-md-6 col-sm-6" />
            <q-input label="Dirección" autogrow class="col-md-6 col-sm-6" />
            <q-input
              label="Teléfono 1"
              class="col-md-6 col-sm-6"
              mask="(###) ### - ####"
            />
            <q-input
              label="Teléfono 2"
              class="col-md-6 col-sm-6"
              mask="(###) ### - ####"
            />
            <div class="col-md-12 col-sm-12">
              <q-btn
                label="Enviar"
                type="submit"
                color="primary"
                class="q-mr-sm"
              />
              <q-btn label="Salir" type="button" outline color="grey-8" />
            </div>
          </q-form>
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <q-form class="row q-col-gutter-md">
            <q-input label="Facebook" class="col-md-12" />
            <q-input label="Twitter" class="col-md-12" />
            <q-input label="Instagram" class="col-md-12" />
            <div class="col-md-12 col-sm-12">
              <q-btn
                label="Enviar"
                type="submit"
                color="primary"
                class="q-mr-sm"
              />
              <q-btn label="Salir" type="button" outline color="grey-8" />
            </div>
          </q-form>
        </q-tab-panel>
      </q-tab-panels>
    </section>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("mails"),
    };
  },
};
</script>

<style lang="sass">
</style>
