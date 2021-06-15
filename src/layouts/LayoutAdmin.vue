<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff">
      <q-header bordered class="header header-a">
        <q-toolbar style="min-height: 60px">
          <q-toolbar-title></q-toolbar-title>
          <!-- <q-btn flat @click="drawer = !drawer" round dense icon="menu" /> -->
          <q-btn-dropdown size="md" flat dense round text-color="grey-8" icon="manage_accounts">
            <q-list>
              <q-item clickable v-close-popup class="row items-center">
                  <q-icon
                    name="settings"
                    size="sm"
                    color="grey-8"
                    class="q-pr-sm"
                  />
                  <q-item-label>Configuración</q-item-label>
              </q-item>
              <q-item clickable v-close-popup class="row items-center">
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
        class="menu menu-a"
        show-if-above
        :width="200"
        :breakpoint="400"
        bordered
      >
        <q-scroll-area style="height: calc(100% - 120px); margin-top: 120px">
          <q-list padding>
            <q-item
              active-class="my-menu-link"
              clickable
              v-ripple
              to="/admin"
              exact
            >
              <q-item-section avatar>
                <q-icon name="analytics" />
              </q-item-section>

              <q-item-section> Inicio </q-item-section>
            </q-item>

            <q-item
              active-class="my-menu-link"
              clickable
              v-ripple
              to="/admin/usuarios"
              exact
            >
              <q-item-section avatar>
                <q-icon name="supervised_user_circle" />
              </q-item-section>

              <q-item-section> Usuarios </q-item-section>
            </q-item>

            <q-expansion-item
              :content-inset-level="0.5"
              icon="inventory"
              label="Productos"
            >
              <q-item
                :content-inset-level="0.5"
                active-class="my-menu-link"
                clickable
                v-ripple
                to="/admin/impuestos"
                exact
              >
                <q-item-section avatar>
                  <q-icon name="savings" />
                </q-item-section>

                <q-item-section> Impuestos </q-item-section>
              </q-item>
              <q-item
                :content-inset-level="0.5"
                active-class="my-menu-link"
                clickable
                v-ripple
                to="/admin/ordenes"
                exact
              >
                <q-item-section avatar>
                  <q-icon name="store" />
                </q-item-section>

                <q-item-section> Ordenes </q-item-section>
              </q-item>
              <q-item
                :content-inset-level="0.5"
                active-class="my-menu-link"
                clickable
                v-ripple
                to="/admin/categorias"
                exact
              >
                <q-item-section avatar>
                  <q-icon name="view_list" />
                </q-item-section>

                <q-item-section> Categorias </q-item-section>
              </q-item>
              <q-item
                :content-inset-level="0.5"
                active-class="my-menu-link"
                clickable
                v-ripple
                to="/admin/productos"
                exact
              >
                <q-item-section avatar>
                  <q-icon name="inbox" />
                </q-item-section>

                <q-item-section> Productos </q-item-section>
              </q-item>
            </q-expansion-item>
          </q-list>
        </q-scroll-area>

        <div class="absolute-top" style="height: 100px;text-align: center;">
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
.my-menu-link
    color: white
    background: $primary
</style>