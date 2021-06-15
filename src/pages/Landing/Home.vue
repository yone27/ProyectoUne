<template>
  <q-page class="container q-pt-lg">
    <!-- parallax -->
    <div class="row q-pb-lg">
      <div class="col">
        <q-carousel
          animated
          v-model="slide"
          infinite
          :autoplay="autoplay"
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide
            class="column no-wrap flex-center"
            :name="1"
            img-src="~assets/parallax.jpg"
          >
            <div class="q-mt-md text-center">
              <h2 class="q-ma-none text-white">Lorem ipsum dolor</h2>
              <p class="text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat repudiandae
              </p>
              <q-btn color="green-8" label="Ver más" />
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
    <!-- /parallax -->

    <!-- icons -->
    <div class="row separator q-pb-lg justify-between">
      <q-card class="card card-a col-12 col-sm-6 col-md-3" flat>
        <q-card-section horizontal class="card-section q-gutter-md">
          <q-card-section class="card-section flex flex-center">
            <q-img
              style="width: 50px"
              class="rounded-borders"
              src="~assets/icon1.png"
            />
          </q-card-section>
          <q-card-section class="card-section">
            <h3 class="text-h6 q-ma-none">Maxima calidad</h3>
            <p class="text-caption text-grey q-ma-none">
              Choose from select produce to start.
            </p>
          </q-card-section>
        </q-card-section>
      </q-card>
      <q-card class="card card-a col-12 col-sm-6 col-md-3" flat>
        <q-card-section horizontal class="card-section q-gutter-md">
          <q-card-section class="card-section flex flex-center">
            <q-img
              style="width: 50px"
              class="rounded-borders"
              src="~assets/icon2.png"
            />
          </q-card-section>
          <q-card-section class="card-section">
            <h3 class="text-h6 q-ma-none">100% Natural</h3>
            <p class="text-caption text-grey q-ma-none">
              Choose from select produce to start.
            </p>
          </q-card-section>
        </q-card-section>
      </q-card>
      <q-card class="card card-a col-12 col-sm-6 col-md-3" flat>
        <q-card-section horizontal class="card-section q-gutter-md">
          <q-card-section class="card-section flex flex-center">
            <q-img
              style="width: 50px"
              class="rounded-borders"
              src="~assets/icon3.png"
            />
          </q-card-section>
          <q-card-section class="card-section">
            <h3 class="text-h6 q-ma-none">Transporte</h3>
            <p class="text-caption text-grey q-ma-none">
              Choose from select produce to start.
            </p>
          </q-card-section>
        </q-card-section>
      </q-card>
      <q-card class="card card-a col-12 col-sm-6 col-md-3" flat>
        <q-card-section horizontal class="card-section q-gutter-md">
          <q-card-section class="card-section flex flex-center">
            <q-img
              style="width: 50px"
              class="rounded-borders"
              src="~assets/icon4.png"
            />
          </q-card-section>
          <q-card-section class="card-section">
            <h3 class="text-h6 q-ma-none">otro</h3>
            <p class="text-caption text-grey q-ma-none">
              Choose from select produce to start.
            </p>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
    <!-- /icons -->

    <!-- products -->
    <div class="row separator">
      <div class="col-12">
        <h2 class="text-h4 text-green-8 text-weight-bold text-center">
          Nuestros productos
          <small class="text-h5 text-lime-5 text-weight-regular block">
              Lorem ipsum, dolor sit amet.
          </small>
        </h2>
      </div>
      <div class="col-12">
        <div class="row justify-center">
          <q-card class="card card-b col-12 col-sm-4 col-md-3" flat>
            <q-card-section class="card-section text-center">
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
            </q-card-section>
          </q-card>
          <q-card class="card card-b col-12 col-sm-4 col-md-3" flat>
            <q-card-section class="card-section text-center">
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
            </q-card-section>
          </q-card>
          <q-card class="card card-b col-12 col-sm-4 col-md-3" flat>
            <q-card-section class="card-section text-center">
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
            </q-card-section>
          </q-card>
          <q-card class="card card-b col-12 col-sm-4 col-md-3" flat>
            <q-card-section class="card-section text-center">
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
            </q-card-section>
          </q-card>
          <q-card class="card card-b col-12 col-sm-4 col-md-3" flat>
            <q-card-section class="card-section text-center">
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
            </q-card-section>
          </q-card>
          <q-card class="card card-b col-12 col-sm-4 col-md-3" flat>
            <q-card-section class="card-section text-center">
              <div class="group-img">
                <q-img
                  class="rounded-borders card-productImg"
                  src="~assets/icon1.png"
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
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!-- /products -->
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>

<style lang="scss">
.card-section {
  padding: 0;
}
.card-b {
  cursor: pointer;
}
.card-b:hover .card-productImg {
  transform: scale(1.05);
}
.card-productImg {
  transition: all 0.3s ease;
}
.shop-action {
  display: flex;
  transition: all 0.35s ease;
  justify-content: center;
}
.group-img {
  position: relative;
}
.group-action {
  width: 100%;
  opacity: 0;
  bottom: 0;
  position: absolute;
  z-index: 3;
  transition: all 0.3s ease-in-out;
}
.card-b:hover .group-action {
  transform: translateY(0);
  bottom: 10px;
  opacity: 1;
}
.separator {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 20px;
}
</style>