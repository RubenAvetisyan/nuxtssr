<template>
  <v-app>
    <v-system-bar window color="primary" class="system-bar"></v-system-bar>
    <div class="showcase">
      <nuxt-picture
        src="/body.webp"
        height="100vh"
        width="100%"
        loading="lazy"
        alt="Подарок на века логотип"
        class="body--image transition-fast-in-fast-out"
      ></nuxt-picture>
    </div>
    <div class="overlay"></div>
    <main>
      <v-container>
        <nuxt />
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'Mobile',
}
</script>


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

picture {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.8;
  z-index: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #661a00;
  mix-blend-mode: soft-light;
  z-index: 1;
}

main {
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 3;
}

.system-bar {
  z-index: 4;
  height: 5vh;
}
</style>
