<template>
    <tr>
        <td class="text-left">{{todo.Comida}}</td>
        <td class="text-right">{{todo.Calorias}}</td>
        <td class="text-right">{{todo.Grasas}}</td>
        <td class="text-right">{{todo.Carbohidratos}}</td>
        <td class="text-right">{{todo.Proteinas}}</td>
        <td class="text-right">
            <q-btn round color="secondary" icon="mode_edit" @click="store.actions.edit(todo.id)" />
            <q-btn round color="negative" icon="delete" @click="store.actions.delete(todo.id)" />
        </td>
    </tr>
    
</template>

<script>
import {inject} from 'vue'
export default {
    props : {todo: Object},
    setup() {
        const store = inject('todos')

        return {
            store
        }
    }
}
</script>

<style>

</style>