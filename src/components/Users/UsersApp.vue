<template>
  <q-page>
    <h1 class="text-h4 q-mt-none box-shadow section">Usuarios</h1>
    <users-list />
  </q-page>
</template>

<script>
import UsersList from "./UsersList.vue";
import { useStore } from "vuex";

export default {
  components: { UsersList },
  setup() {
    const store = useStore();
    const getAll = () => store.dispatch("users/getAll");
    getAll()
  },
};
</script>

<style>
</style>
