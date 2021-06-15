<template>
  <q-layout view="hhh lpR fff">
    <q-header class="container" style="background-color: transparent">
      <q-toolbar class="q-py-md wrapc row justify-between">
        <q-toolbar-title
          class="col-12 col-sm-6"
        >
          <img
            class="logo"
            src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/logo.svg"
          />
        </q-toolbar-title>
        <div class="q-gutter-md col-12 col-sm-6 text-right">
          <q-btn
            size="md"
            flat
            text-color="grey"
            label="Unirse ahora"
            to="/signup"
          />
          <q-btn
            size="md"
            color="green-8"
            label="Iniciar sesión"
            outline 
            to="/signin"
          />
          <q-btn
            unelevated
            size="md"
            text-color="black"
            round
            icon="face"
            class="azul-lighter"
          >
            <q-badge round floating color="teal">8</q-badge>
          </q-btn>
          <q-btn
            unelevated
            size="md"
            text-color="black"
            round
            icon="favorite_border"
            class="green-lighter"
          />
          <q-btn
            unelevated
            size="md"
            text-color="black"
            round
            icon="add_shopping_cart"
            class="brown-lighter"
          />
        </div>
      </q-toolbar>

      <q-tabs class="bg-green-8" align="left">
        <q-route-tab to="/" label="Inicio" />
        <q-route-tab to="/about" label="Sobre Nosotros" />
        <q-route-tab to="/contact" label="Contacto" />
        <q-route-tab to="/products" label="Productos" />
        <q-route-tab to="/pedidos" label="Pedidos" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="container bg-transparent text-white">
      <div class="column items-center q-py-xl">
        <div class="col text-center">
          <figure>
            <img
              class="logo"
              src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/logo.svg"
            />
          </figure>
          <p class="text-black">
            <strong class="block">Direccion:</strong> Lorem ipsum dolor sit
            amet.
          </p>
          <p class="text-black">
            <strong class="block">Telefonos:</strong> +58 555 8855 85
          </p>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<style lang="sass">
.azul-lighter
    background-color: #e8f8f7
.green-lighter
    background-color: #f6f3e3
.brown-lighter
    background-color: #f3e4dc
.logo
    max-width: 130px
.wrapc
    flex-wrap: wrap
</style>