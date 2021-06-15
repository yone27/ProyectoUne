<template>
    <q-dialog v-model="store.state.modal">
        <q-card>
            <q-card-section>
            <div class="text-h6">Alert</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-form class="row q-col-gutter-md"
                @submit="onSubmit"

                >
                <q-select class="col-12" v-model="data.Comida" :options="data.foodOptions" label="Comida" />

                <q-input label="Calorias *"
                v-model="data.Calorias"
                lazy-rules
                :rules="[val => !!val || 'El campo es requerido']"
                type="number"
                class="col-md-6 col-sm-6"
                />
                <q-input label="Grasas *"
                v-model="data.Grasas"
                lazy-rules
                :rules="[val => !!val || 'El campo es requerido']"
                type="number"
                class="col-md-6 col-sm-6"
                />
                <q-input label="Carbohidratos *"
                v-model="data.Carbohidratos"
                lazy-rules
                :rules="[val => !!val || 'El campo es requerido']"
                type="number"
                class="col-md-6 col-sm-6"
                />
                <q-input label="Proteinas *"
                v-model="data.Proteinas"
                lazy-rules
                :rules="[val => !!val || 'El campo es requerido']"
                type="number"
                class="col-md-6 col-sm-6"
                />
                <div>
                <q-btn label="Enviar" type="submit" color="primary"/>
                <q-btn label="Salir" type="button" color="negative" @click="store.actions.toggleModal"/>
                </div>
                </q-form>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script>
import {inject, reactive} from 'vue'

export default {
    setup() {
            const store = inject('todos')

            const data = reactive({
                foodOptions: ['Desayuno', 'Almuerzo', 'Cena'],
                id: store.state.currentTodo.id,
                Comida : store.state.currentTodo.Comida,
                Calorias : store.state.currentTodo.Calorias,
                Grasas : store.state.currentTodo.Grasas,
                Carbohidratos : store.state.currentTodo.Carbohidratos,
                Proteinas : store.state.currentTodo.Proteinas
            })

            const onSubmit = () => {
                store.actions.saveEdit(data)
            }

        return {
            data,
            store,
            onSubmit
        }
    },
}
</script>

<style>

</style>
