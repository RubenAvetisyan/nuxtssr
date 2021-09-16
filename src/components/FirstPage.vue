<template>
  <v-card
    primary-title
    height="90vh"
    width="37vw"
    tile
    flat
    elevation="24"
    class="fp transition-linear-out-slow-in rounded-tl-xl rounded-tr-xl"
  >
    <v-card-title class="title"> Подарок на века </v-card-title>
    <v-card-text>
      <p class="text">Доставка по Москве бесплатно...</p>
    </v-card-text>
    <nuxt-img
      src="/logo-stamp.webp"
      height="116px"
      sizes="sm:5vw md:100px 2xl:100vw"
      fit="outside"
      alt="Подарок на века логотип"
      class="transition-linear-out-slow-in stamp"
      :contextmenu="false"
    ></nuxt-img>
    <v-footer inset padless outlined tile color="primary" absolute class="">
      <p class="accent--text text-center">Работаем в рижиме 24/7</p>
    </v-footer>
  </v-card>
</template>

<style scoped>
.stamp {
  position: absolute;
  z-index: 10;
  float: right;
  right: 14px;
  bottom: 50px;
}

.fp {
  top: 5.5vh;
  left: 5vw;
  backdrop-filter: blur(17px) saturate(77%);
  -webkit-backdrop-filter: blur(17px) saturate(77%);
  background-color: rgba(256, 256, 256, 0.57);
  border-radius: 12px;
}

.title {
  font-size: 1.8rem !important;
}

.text {
  font-size: 1em;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 0.0125em !important;
  font-family: 'CyrillicOldBold', Helvetica, Arial, Verdana, Tahoma, sans-serif !important;
}
</style>
