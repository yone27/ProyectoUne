import { reactive, readonly } from "@vue/reactivity"
import { api } from "src/boot/axios"

const state = reactive({
    todos: [],
    error: null,
    modal: false,
    currentTodo: {}
})

const actions = {
    async getAll() {
        // Fetch all
        const { data } = await api.get('/dietas')
        console.log(data)
        state.todos = data
    },
    async add(payload) {
        const { data } = await api.post('/dietas', payload)
        console.log(data)

        payload.id = data.dieta.id
        state.todos.push(payload)
    },
    edit(id) {
        this.toggleModal()
        this.getOne(id)
    },
    async saveEdit(payload) {
        try {
            const data = await api.put(`/dietas/${payload.id}`, payload)
            console.log(data)

            state.todos = state.todos.map(item => item.id === payload.id ? payload : item)
            this.toggleModal()
        } catch (error) {
            console.log(error)
        }
    },
    async delete(id) {
        try {
            const { data } = await api.delete(`/dietas/${id}`)

            console.log(data)
            state.todos = state.todos.filter(item => item.id != id)
        } catch (error) {
            console.log(error)
        }
    },
    toggleModal() {
        state.modal = !state.modal
    },
    getOne(id) {
        state.currentTodo = state.todos.find(item => item.id === id)
    }
}

const getters = {

}

export default {
    state,
    actions,
    getters
}
