<template>
    <q-form
        class="row q-col-gutter-md"
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
      </div>
    </q-form>
</template>

<script>
import { reactive, inject} from "vue";

export default {
    setup() {
        const store = inject('todos')

        const data = reactive({
            foodOptions: ['Desayuno', 'Almuerzo', 'Cena'],
            Comida :'Desayuno',
            Calorias : null,
            Grasas : null,
            Carbohidratos : null,
            Proteinas : null
        })

        const onSubmit = () => {
            store.actions.add(data)
        }

        return {
            data,
            onSubmit
        }
    }
}
</script>

<style>

</style>