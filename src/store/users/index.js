import { Notify } from 'quasar'

const data = [{
    username: "Frozen Yogurt1",
    email: 159,
},
{
    username: "Ice cream sandwich",
    email: 237,
},
{
    username: "Eclair",
    email: 262,
},]
export default {
    namespaced: true,
    state: {
        users: [],
        error: null,
        modal: false,
        loading: false,
        editing: false
    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload
        },
        addUser(state, payload) {
            state.users.push(payload)
        },
        setModal(state, payload) {
            state.modal = payload
        },
        setLoading(state) {
            state.loading = !state.loading
        },
    },
    actions: {
        async getAll({ commit }) {
            // Fetch all
            try {
                // Consulta
                await setTimeout(() => {
                    commit('setLoading')
                    commit('setUsers', data)
                }, 3000);

                commit('setLoading')
            } catch (error) {
                Notify.create({
                    type: 'negative',
                    message: 'Hubo un problema, por favor intentelo más tarde'
                })
            }
        },
        add({ commit }, payload) {
            console.log(payload)
            let test = {
                username : payload.username,
                email : payload.email,
            }
            try {
                // Consulta
                setTimeout(() => {
                    commit('addUser', test)
                }, 1000);
                commit('setModal', false)

                // ok
                Notify.create({
                    type: 'positive',
                    message: 'Usuario agregado correctamente'
                })
            } catch (error) {
                Notify.create({
                    type: 'negative',
                    message: 'Hubo un problema, por favor intentelo más tarde'
                })
            }
        },
        delete({ commit, state }, id) {
            try {
                // Consulta
                setTimeout(() => {
                    commit('setUsers', state.todos.filter(item => item.id != id))
                }, 1000);
                // ok

                // bad
            } catch (error) {
                Notify.create({
                    type: 'negative',
                    message: 'Hubo un problema, por favor intentelo más tarde'
                })
            }
        },
        getAllUsers({ commit }) {
            commit('', data)
        },
        toggleModal({ commit, state }) {
            commit('setModal', !state.modal)
        }
    },
    getters: {
    },
}
