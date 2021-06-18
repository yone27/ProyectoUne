<template>
  <q-page class="container q-pt-lg">
    <!-- products -->
    <section class="row q-py-xl">
      <aside class="col-12 col-sm-3 col-md-3 q-pr-md">
        <h2 class="text-h5 q-my-none q-mb-md">Categorías</h2>
        <q-list>
          <q-item
            clickable
            class="row items-center custom-link my-menu-link"
            active-class="my-menu-link"
          >
            <q-item-label>Inicio</q-item-label>
          </q-item>

          <q-item
            clickable
            class="row items-center custom-link"
            active-class="my-menu-link"
          >
            <q-item-label>Usuarios</q-item-label>
          </q-item>
        </q-list>
      </aside>
      <div class="col-12 col-sm-9 col-md-9 row">
        <article class="card card-product col-12 col-sm-6 col-md-4" flat>
          <router-link to="/products/2"
          style="text-decoration: none;"
            >
            <div class="text-center">
              <div class="group-img">
                <q-img
                  class="rounded-borders card-productImg"
                  src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/40-450x420.jpg"
                />
                <div class="group-action">
                  <div class="shop-action q-gutter-sm">
                    <q-btn
                      round
                      icon="add_shopping_cart"
                      text-color="black"
                      color="white"
                    />
                    <q-btn
                      round
                      icon="favorite_border"
                      text-color="black"
                      color="white"
                    />
                  </div>
                </div>
              </div>
              <h3 class="text-h6 q-mt-sm q-mb-xs text-green-8">
                Nombre de producto
              </h3>
              <p class="text-caption q-mb-xs">$930.97</p>
              <q-btn flat label="Ver más" />
            </div>
          </router-link>
        </article>
      </div>
    </section>
    <!-- /products -->
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.my-menu-link
    color: white
    background: $primary
    color: white
    box-shadow: 0 0 10px 1px rgba($primary, 70%)
    border-radius: 5px
.custom-link
    .q-hoverable
        .q-item__section--avatar
            padding: 0 !important
        i
            padding-right: 8px
    &:hover
        bacground: none !important
        > div
            transition: transform .25s ease
            transform: translateX(5px)
</style>