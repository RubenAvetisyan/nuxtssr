<template>
  <v-navigation-drawer
    v-model="hide"
    :mini-variant="miniVariant && !$vuetify.breakpoint.mobile && !isMobile"
    :clipped="clipped && !$vuetify.breakpoint.mobile && !isMobile"
    :fixed="!$vuetify.breakpoint.mobile && isMobile"
    :left="left"
    :right="!left"
    :expand-on-hover="miniVariant || drawer === false"
    :temporary="$vuetify.breakpoint.mobile && isMobile"
    :src="require('~/assets/images/fabric.png')"
    app
  >
    <v-list v-if="!!items.length">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        itemprop="url"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="small-caps" v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    left: { type: Boolean, default: true },
    items: {
      type: Array,
      default: () => [],
    },
  },
  asyncData({ route }) {
    return { path: route }
  },
  data() {
    return {
      isMobile: false,
    }
  },
  computed: {
    hide: {
      get() {
        return this.left ? this.drawer : this.rightDrawer
      },
      set(value) {
        const propName = this.left ? 'drawer' : 'rightDrawer'
        if (this.getDrawer(propName) === value) return
        this.setDrawer(propName)
      },
    },
    ...mapGetters({
      getDrawer: 'system/VNavigationDrawer/getDrawerProp',
    }),
    drawer: {
      get() {
        return this.getDrawer('drawer')
      },
      set(value) {
        if (this.getDrawer('drawer') === value) return
        this.setDrawer('drawer')
      },
    },
    miniVariant() {
      return this.getDrawer('miniVariant') || this.isMobile
    },
    clipped() {
      return this.getDrawer('clipped') || this.isMobile
    },
    fixed() {
      return this.getDrawer('fixed') || this.isMobile
    },
    rightDrawer: {
      get() {
        return this.getDrawer('rightDrawer')
      },
      set(value) {
        if (this.getDrawer('rightDrawer') === value) return
        this.setDrawer('rightDrawer')
      },
    },
  },
  methods: {
    ...mapActions({
      setDrawer: 'system/VNavigationDrawer/manageVNavigationDrawer',
    }),
  },
}
</script>
