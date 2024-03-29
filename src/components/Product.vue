<template>
  <v-hover v-slot="{ hover: h }">
    <v-card
      light
      :elevation="h ? 10 : 0"
      :outlined="!h"
      :img="cardBackground"
      flat
      width="10.4rem"
      height="31.3rem"
      max-height="500px"
      class="
        mx-auto
        d-block
        fill-height
        justify-center
        text-center
        rounded-lg rounded-tr-xl
        card--outlined
        transition-fast-in-fast-out
      "
      itemscope
      itemtype="https://schema.org/Book"
      :itemid="item.model"
    >
      <v-responsive
        :height="167"
        :max-height="167"
        class="fill-height white"
        content-class="justify-center align-center"
      >
        <v-btn
          color="primary"
          elevation="0"
          width="45"
          height="45"
          dark
          small
          absolute
          class="mx-0 mt-0 rounded-bl-xl rounded-tl-xl"
          style="right: 0; top: 0; z-index: 1"
          :aria-label="`книга ${item.name.ru} полажить в карзину`"
          ><v-icon>{{ mdiCartArrowDown }}</v-icon></v-btn
        >
        <nuxt-img
          :src="imgSrc"
          format="webp"
          height="167"
          loading="lazy"
          :size="size"
          :alt="`маленькая кратинка - ${item.name.ru}`"
          aria-label="image"
          itemscope
          itemtype="https://schema.org/Offer"
          itemprop="Book"
          :itemid="item.model"
          :itemref="`refs-${item.model}`"
          class="transition-fast-in-fast-out"
        />

        <!-- <v-img
          v-cloak
          :lazy-src="imgSrc"
          :src="imgSrc"
          :srcset="_srcset.srcset"
          :height="167"
          :sizes="_srcset.size"
          eager
          :alt="`маленькая кратинка книги ${item.name.ru}`"
          :aspect-ratio="227 / 167"
          max-width="227"
          max-height="167"
          min-height="167"
          transition="transition-fast-in-fast-out"
          contain
          style="position: absolute; top: 0; left: 0; width: 100%"
        ></v-img> -->
      </v-responsive>

      <v-divider></v-divider>

      <v-responsive
        height="18.938rem"
        :max-height="303"
        content-class="overflow-hidden justify-center text-center"
      >
        <v-rating
          :value="item.points"
          background-color="#546E7A"
          color="#F9A825"
          :empty-icon="mdiStarOutline"
          :full-icon="mdiStar"
          :half-icon="mdiStarHalfFull"
          hover
          length="5"
          class="
            align-center
            justify-center
            align-self-center
            text-center
            mb-0
            pa-0
          "
        />
        <v-card-title
          :ref="`cardTitle${item._id.$oid}`"
          class="
            mx-auto
            font-weight-bold
            justify-center
            text-center text-break text-body-2
            py-0
            px-1
            my-0
            primary--text
          "
        >
          <h3
            style="font-size: 0.87rem"
            class="title-cyrillic--bold small-caps font-weight-thin"
          >
            {{ item.name.ru }}
          </h3>
        </v-card-title>

        <v-card-text
          class="overflow-hidden text-caption text-break mt-1 secondary--text"
        >
          <v-divider v-if="item.metaDescription.ru" class="mx-auto"></v-divider>
          <p aria-label="product-description">
            {{ item.metaDescription.ru }}
          </p>
        </v-card-text>
      </v-responsive>

      <v-responsive min-height="30px">
        <v-card-text class="overflow-hidden text-center py-0 my-0">
          <v-divider v-if="item.metaDescription.ru" class="mx-auto"></v-divider>
          <span
            class="
              font-weight-light
              subtitle-1
              justify-center
              text-center text-caption
              secondary--text
            "
          >
            модель:&nbsp;&nbsp;&nbsp;{{ item.model }}
          </span>
        </v-card-text>
      </v-responsive>
    </v-card>
  </v-hover>
</template>

<script>
import {
  mdiStarOutline,
  mdiStar,
  mdiStarHalfFull,
  mdiCartArrowDown,
} from '@mdi/js'
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
      validator(obj) {
        try {
          const validationKeys = [
            'img',
            'metaDescription',
            'name',
            'model',
            'points',
          ]
          const hasKay = validationKeys.every((key) => key in obj)
          // const imgHasMainImage = hasKay('mainImage')
          return hasKay // && imgHasMainImage
        } catch (error) {
          //
        }
      },
    },
    itemsLength: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    isDivider: false,
    mdiStarOutline,
    mdiStar,
    mdiStarHalfFull,
    mdiCartArrowDown,
  }),
  head({ imgSrc, item }) {
    return {
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org/',
            '@type': 'Product',
            name: item.name.ru,
            image: imgSrc,
            sku: item.model,
            review: '',
            ISBN: '',
            brand: '',
            description: item.metaDescription.ru,
            offers: {
              '@type': 'Offer',
              sku: item.model,
              review: '',
              ISBN: '',
              brand: '',
              url: process.env.baseUrl + '/государева-служба',
              priceCurrency: 'RUB',
              price: item.price,
              availability: 'https://schema.org/InStock',
              itemCondition: 'https://schema.org/NewCondition',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: item.points || 5,
              bestRating: 5,
              worstRating: 5,
              ratingCount: !item.points ? 1 : 9,
            },
          },
          pbody: true,
        },
      ],
    }
  },
  computed: {
    cardBackground() {
      const picture = require('~/assets/images/so-white.avif').default

      return picture
    },
    imgSrc() {
      return require(`~/assets/images/products/${this.item.img.mainImage}`)
        .default
    },
    size() {
      return this.getVw(227)
    },
  },
  mounted() {
    this.setDivider()
  },
  methods: {
    getVw(width) {
      const result = []
      const screens = {
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
        '2xl': 1920,
      }
      for (const size in screens) {
        result.push(`${size}:${Math.ceil((width / screens[size]) * 100)}vw`)
      }
      return result.join(' ')
    },
    _srcset() {
      const sizes = this.$img.getSizes(this.imgSrc, {
        sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
        modifiers: {
          format: 'webp',
          height: 167,
          fit: 'outside',
        },
      })
      // console.log('sizes: ', sizes)
      return sizes
    },
    setDivider() {
      this.$nextTick(() => {
        const ref = `cardTitle${this.item._id.$oid}`
        if (Reflect.has(this.$refs, ref)) {
          this.isDivider = this.$refs[ref].offsetHeight <= 56
          return this.isDivider
        }

        if (this.isDivider === null) {
          this.setDivider()
        }
      })
    },
  },
}
</script>

<style scoped>
.product {
  background-image: url('~/assets/images/fabric.avif');
}
</style>
