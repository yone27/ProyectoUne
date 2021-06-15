<template>
    <todo-form />
    <todo-list />
</template>

<script>
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'
import store from "../../context/todos";

import {provide} from 'vue'

export default {
components: { TodoForm, TodoList },
setup() {
provide('todos', store)
}

}
</script>

<style>

</style>