<template>
  <q-page>
    <section class="section">
      <todo-app />
    </section>
  </q-page>
</template>

<script>
import TodoApp from "../../components/Todo/TodoApp.vue";

export default {
  components: { TodoApp },
};
</script>

<style lang="sass">
</style>
