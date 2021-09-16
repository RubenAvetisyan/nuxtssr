<template>
  <v-app>
    <v-responsive class="showcase">
      <video
        :src="require('~/assets/videos/backgroung1.mp4')"
        muted
        loop
        autoplay
      ></video>
      <!-- <nuxt-img
        src="/body.webp"
        height="100vh"
        width="100%"
        loading="lazy"
        alt="Подарок на века логотип"
        class="transition-linear-out-slow-in"
        :contextmenu="false"
      ></nuxt-img> -->
      <div class="overlay"></div>

      <main>
        <nuxt />
      </main>
    </v-responsive>
  </v-app>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.showcase {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  min-height: 100vh;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #fff;
}

.showcase video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.5;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  mix-blend-mode: color;
  z-index: 2;
  backdrop-filter: blur(7px) saturate(77%);
  -webkit-backdrop-filter: blur(17px) saturate(77%);
  background-color: rgba(255, 255, 255, 0.57);
  border-radius: 12px;
}

main {
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  z-index: 3;
}
</style>
