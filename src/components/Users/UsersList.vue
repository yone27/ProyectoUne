<template>
  <q-table
    title="Usuarios"
    :rows="rows"
    :columns="columns"
    :filter="filter"
    color="primary"
    row-key="name"
    :loading="loading"
    class="table table-a"
  >
    <template v-slot:top-right>
      <q-input dense debounce="300" v-model="filter" placeholder="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
    <template v-slot:top-left>
      <q-btn
        size="md"
        @click="toggleModal()"
        class="q-mr-sm"
        color="primary"
        label="Agregar usuario"
      />
    </template>

    <!-- Table header (thead)  -->
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th auto-width> Acciones </q-th>
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.label }}
        </q-th>
      </q-tr>
    </template>

    <!-- Table body (tbody)  -->
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td auto-width>
          <q-btn-dropdown
            class="no-decoration"
            size="md"
            flat
            dense
            round
            text-color="grey-8"
            icon="more_vert"
          >
            <q-list>
              <q-item clickable v-close-popup class="row items-center">
                <q-icon
                  name="delete"
                  size="sm"
                  color="grey-8"
                  class="q-pr-sm"
                />
                <q-item-label>Eliminar</q-item-label>
              </q-item>
              <q-item clickable v-close-popup class="row items-center">
                <q-icon name="edit" size="sm" color="grey-8" class="q-pr-sm" />
                <q-item-label>Editar</q-item-label>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-td>
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.value }}
        </q-td>
      </q-tr>
      <q-tr v-show="props.expand" :props="props">
        <q-td colspan="100%">
          <div class="text-left">
            This is expand slot for row above: {{ props.row.name }}.
          </div>
        </q-td>
      </q-tr>
    </template>
  </q-table>

  <users-add />
</template>

<script>
import { ref, computed } from "vue";
import UsersAdd from "./UsersAdd.vue";
import { useStore, mapActions } from "vuex";

const columns = [
  {
    name: "username",
    required: true,
    label: "Username",
    align: "left",
    field: (row) => row.username,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "email",
    align: "center",
    label: "Email",
    field: "email",
    sortable: true,
  },
];

export default {
  components: { UsersAdd },
  setup() {
    const store = useStore();

    return {
      columns,
      filter: ref(""),
      ...mapActions("users", ["toggleModal"]),
      rows: computed(() => store.state.users.users),
      loading: computed(() => store.state.users.loading),
    };
  },
};
</script>

<style>
</style>
