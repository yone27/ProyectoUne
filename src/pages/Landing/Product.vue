<template>
  <q-page class="container q-pt-lg">
    <!-- product -->
    <section class="row q-pb-xl">
      <aside class="col-12 col-sm-5 col-md-5 row justify-center items-center">
        <q-img
          style="max-width: 350px"
          src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/contact1.jpg"
        />
      </aside>
      <article class="col-12 col-sm-7 col-md-7 row items-center">
        <div>
          <header>
            <h2 class="text-h4 text-grey text-weight-bold">
              Nombre del producto
              <small class="block text-primary"> 35.55$ </small>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate.
            </p>
          </header>
          <footer class="row q-my-md">
            <q-input
              style="max-width: 100px"
              class="q-pr-sm"
              outlined
              v-model="amount"
              type="number"
            />
            <q-btn
              size="md"
              color="green-8"
              label="Añadir"
              outline
              to="/signin"
            />
          </footer>
          <aside class="row items-center">
            <q-btn
              round
              icon="favorite_border"
              text-color="black"
              color="white"
              class="q-mr-sm"
            />
            <p class="text-grey-7 text-h6 q-my-none">Nombre categoria</p>
          </aside>
        </div>
      </article>
    </section>
    <!-- /product -->
  </q-page>
</template>

<script>
export default {
  setup() {
    let amount = 0;
    return {
      amount,
    };
  },
};
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