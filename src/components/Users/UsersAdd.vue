<template>
  <q-dialog v-model="modal" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">Nuevo usuario</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form class="row q-col-gutter-md" @submit.prevent="handleSubmit">
          <q-input
            label="Usuario *"
            v-model="data.username"
            lazy-rules
            :rules="[(val) => !!val || 'El campo es requerido']"
            type="text"
            class="col-md-6 col-sm-6"
          />
          <q-input
            label="Email *"
            v-model="data.email"
            lazy-rules
            :rules="[(val) => !!val || 'El campo es requerido']"
            type="text"
            class="col-md-6 col-sm-6"
          />
          <div>
            <q-btn label="Enviar" type="submit" color="primary" class="q-mr-sm" />
            <q-btn
              label="Salir"
              type="button"
              outline
              color="grey-8"
              @click="toggleModal()"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { useStore, mapActions } from "vuex";
import { computed, reactive } from "vue";

export default {
  setup() {
    const store = useStore();
    const data = reactive({
      username: "",
      email: "",
    });

    return {
      modal: computed(() => store.state.users.modal),
      data,
      ...mapActions('users', ['toggleModal', 'add']),
      handleSubmit() {
          store.dispatch('users/add', data)
      }
    };
  },
};
</script>

<style>
</style>
