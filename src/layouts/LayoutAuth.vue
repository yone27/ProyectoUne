<template>
    <q-layout view="lHh Lpr lff">
        <router-view></router-view>
    </q-layout>
</template>

<script>
import {ref} from 'vue'
export default {
  data () {
      const drawer = ref(false)
    return {
      drawer
    }
  }
}
</script>

<style lang="sass" scoped>
    .my-menu-link
        color: white
        background: #f2c037

</style>