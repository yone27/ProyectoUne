<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff">
      <q-header class="header header-a box-shadow">
        <q-toolbar style="min-height: 60px">
          <q-toolbar-title></q-toolbar-title>
          <!-- <q-btn flat @click="drawer = !drawer" round dense icon="menu" /> -->
          <q-btn-dropdown
            size="md"
            flat
            dense
            round
            text-color="grey-8"
            icon="manage_accounts"
          >
            <q-list>
              <q-item
                clickable
                v-close-popup
                class="row items-center"
                to="/admin/webconfig"
              >
                <q-icon
                  name="settings"
                  size="sm"
                  color="grey-8"
                  class="q-pr-sm"
                />
                <q-item-label>Configuración</q-item-label>
              </q-item>
              <q-item
                clickable
                v-close-popup
                class="row items-center"
                to="/admin/profile"
              >
                <q-icon
                  name="perm_identity"
                  size="sm"
                  color="grey-8"
                  class="q-pr-sm"
                />
                <q-item-label>Perfil</q-item-label>
              </q-item>
              <q-item clickable v-close-popup class="row items-center">
                <q-icon
                  name="power_settings_new"
                  size="sm"
                  color="grey-8"
                  class="q-pr-sm"
                />
                <q-item-label>Salir</q-item-label>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        class="menu menu-a box-shadow"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 120px); margin-top: 120px">
          <q-list padding>
            <q-item
              clickable
              class="row items-center custom-link"
              active-class="my-menu-link"
              to="/admin"
              exact
            >
              <q-icon name="analytics" size="sm" class="q-pr-sm" />
              <q-item-label>Inicio</q-item-label>
            </q-item>

            <q-item
              clickable
              class="row items-center custom-link"
              active-class="my-menu-link"
              to="/admin/users"
              exact
            >
              <q-icon name="supervised_user_circle" size="sm" class="q-pr-sm" />
              <q-item-label>Usuarios</q-item-label>
            </q-item>

            <q-expansion-item
              :content-inset-level="0.5"
              icon="inventory"
              label="Productos"
              class="custom-link"
            >
              <q-item
                :content-inset-level="0.5"
                clickable
                class="row items-center custom-link"
                active-class="my-menu-link"
                to="/admin/taxes"
                exact
              >
                <q-icon name="panorama_fish_eye" size="xs" class="q-pr-sm" />
                <q-item-label>Impuestos</q-item-label>
              </q-item>
              <q-item
                :content-inset-level="0.5"
                clickable
                class="row items-center custom-link"
                active-class="my-menu-link"
                to="/admin/orders"
                exact
              >
                <q-icon name="panorama_fish_eye" size="xs" class="q-pr-sm" />
                <q-item-label>Ordenes</q-item-label>
              </q-item>

              <q-item
                :content-inset-level="0.5"
                clickable
                class="row items-center custom-link"
                active-class="my-menu-link"
                to="/admin/categories"
                exact
              >
                <q-icon name="panorama_fish_eye" size="xs" class="q-pr-sm" />
                <q-item-label>Categorias</q-item-label>
              </q-item>

              <q-item
                :content-inset-level="0.5"
                clickable
                class="row items-center custom-link"
                active-class="my-menu-link"
                to="/admin/products"
                exact
              >
                <q-icon name="panorama_fish_eye" size="xs" class="q-pr-sm" />
                <q-item-label>Productos</q-item-label>
              </q-item>
            </q-expansion-item>
          </q-list>
        </q-scroll-area>

        <div class="absolute-top" style="height: 100px; text-align: center">
          <img src="~assets/logo.png" style="width: 160px" />
        </div>
      </q-drawer>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    const drawer = ref(false);
    return {
      drawer,
    };
  },
};
</script>

<style lang="sass" scoped>
.body--light
    background-color: #f8f8f8
.my-menu-link
    color: white
    background: $primary
    color: white
    box-shadow: 0 0 10px 1px rgba($primary, 70%)
    border-radius: 5px
.custom-link
    width: 90%
    margin: 0 auto
    .q-hoverable
        .q-item__section--avatar
            padding: 0 !important
        i
                padding-right:8px
    &:hover
        bacground: none !important
        > div
            transition: transform .25s ease
            transform: translateX(5px)
</style>