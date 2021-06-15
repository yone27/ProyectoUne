export default {
    namespaced: true,
    state: {
        todos: [],
        error: null,
        modal: false,
        currentTodo: {},
    },
    mutations: {
        setTodos(state, payload) {
            state.todos = payload
        },
        addTodo(state, payload) {
            state.todos.push(payload)
        },
        setCurrentTodo(state, payload) {
            state.modal = payload
        },
        setModal(state, payload) {
            state.modal = payload
        }
    },
    actions: {
        async getAll({ commit }) {
            // Fetch all
            try {
                const { data } = await api.get('/dietas')
                commit('setTodos', data)
            } catch (error) {
                console.log(error)
            }
        },
        async add({ commit }, payload) {
            try {
                const { data } = await api.post('/dietas', payload)
                // ok
                payload.id = data.dieta.id
                commit('addTodo', payload)

                // bad
            } catch (error) {
                console.log(error)
            }
        },
        edit(id) {
            this.toggleModal()
            this.getOne(id)
        },
        async saveEdit({ commit, state }, payload) {
            try {
                const data = await api.put(`/dietas/${payload.id}`, payload)
                // ok
                console.log(data)
                commit('setTodos', state.todos.map(item => item.id === payload.id ? payload : item))
                this.toggleModal()
                // bad
            } catch (error) {
                console.log(error)
            }
        },
        async delete({ commit, state }, id) {
            try {
                const { data } = await api.delete(`/dietas/${id}`)

                // ok
                console.log(data)
                commit('setTodos', state.todos.filter(item => item.id != id))
                // bad
            } catch (error) {
                console.log(error)
            }
        },
        toggleModal({ commit, state }) {
            commit('setModal', !state.modal)
        },
        getOne(id) {
            state.currentTodo = state.todos.find(item => item.id === id)
        }
    },
    getters: {

    },
}
