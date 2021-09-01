<template>
  <v-row>
    <v-col class="text-center">
      <VuetifyLogo />
      <LocalBusiness mo="10:00-18:00" :item-list-element="['delivery']" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    VuetifyLogo: () => import('../components/VuetifyLogo.vue'),
    LocalBusiness: () => import('../components/LocalBusiness.vue'),
  },
}
</script>
