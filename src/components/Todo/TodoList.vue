<template>
    <q-markup-table>
        <thead>
            <tr>
                <th class="text-left">Comida</th>
                <th class="text-right">Calorias</th>
                <th class="text-right">Grasas (g)</th>
                <th class="text-right">Carbohidratos (g)</th>
                <th class="text-right">Proteinas (g)</th>
                <th class="text-right">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <todo-item v-for="todo of store.state.todos" :key="todo.id" :todo="todo" />
        </tbody>
    </q-markup-table>
        <todo-modal v-if="store.state.modal" />
</template>

<script>
import TodoItem from './TodoItem.vue'
import TodoModal from './TodoModal.vue'
import {inject} from 'vue'

export default {
  components: { TodoItem, TodoModal },
  setup() {
        const store = inject('todos')

        // Seteamos tasks del servidor
        store.actions.getAll()
        console.log()
      return {
          store
      }
  }
}
</script>

<style>

</style>