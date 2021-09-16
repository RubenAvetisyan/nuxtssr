<template>
  <div itemscope itemtype="https://schema.org/LocalBusiness">
    <div v-for="(value, key) in structuredDataForTags" :key="key" itemscope>
      <p
        v-if="
          typeof value === 'string' &&
          value !== '' &&
          !key.includes('@') &&
          !value.includes('$$')
        "
        :itemprop="key"
      >
        {{ key }}: {{ value }}
      </p>
    </div>
    <div
      v-if="structuredDataForTags.openingHours.length"
      itemscope
      class="text-left"
    >
      <ul>
        <p>openingHours:</p>
        <li v-for="(el, i) in structuredDataForTags.openingHours" :key="i">
          Open:
          <span
            itemprop="openingHours"
            :content="replaceTheString(el, /\s/ ,', ')"
            >{{ el }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const { parseURL } = require('ufo')
export default {
  props: {
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    currenciesAccepted: { type: String, default: 'USD' },
    itemListElement: { type: Array, default: () => [] },
    mo: { type: null, default: '' },
    tu: { type: null, default: '' },
    we: { type: null, default: '' },
    th: { type: null, default: '' },
    fr: { type: null, default: '' },
    sa: { type: null, default: '' },
    su: { type: null, default: '' },
  },
  head() {
    return {
      script: [
        {
          type: 'application/ld+json',
          json: this.structuredData,
          pbody: true,
        },
      ],
    }
  },
  computed: {
    baseUrl() {
      return process.env.baseUrl
    },
    oh() {
      const { mo, tu, we, th, fr, sa, su } = this
      const result = [
        mo && `Mo ${mo}`,
        tu && `Tu ${tu}`,
        we && `We ${we}`,
        th && `Th ${th}`,
        fr && `Fr ${fr}`,
        sa && `Sa ${sa}`,
        su && `Su ${su}`,
      ].filter((el) => el !== '')
      return result
    },
    itemLE() {
      return this.itemListElement.length
        ? this.itemListElement.map((el) => {
            return {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: el,
              },
            }
          })
        : []
    },
    hasOfferCatalog() {
      return {
        '@type': 'OfferCatalog',
        name: 'Legal services',
        itemListElement: this.itemLE,
      }
    },
    main({ $route, baseUrl, description }) {
      return {
        '@context': 'http://www.schema.org',
        '@type': 'ProfessionalService',
        name: 'Подарок на века',
        url: baseUrl + $route.path,
        logo: baseUrl + '/logo.avif',
        priceRange: '$$',
        paymentAccepted: 'Cash, Credit Card',
        image: baseUrl + '/logo.avif',
        description,
        address: {
          '@type': 'postalAddress',
          addressCountry: 'Ru',
          addressLocality: 'Москва',
          addressRegion: 'Московский Область',
          postalCode: '',
          streetAddress: 'Комсомольская пл. д. 1а',
          telephone: '+8-926-266-71-98',
          sameAs: [
            'https://instagram.com/podaroknaveka',
            'https://www.facebook.com/podaroknaveka/',
            'https://vk.com/podaroknaveka',
          ],
        },
        telephone: '+1 (300) 500-05000',
        email:
          'mailto:info@' +
          parseURL('https://online-shop-324618-bpyxxgs6la-uc.a.run.app').host,
      }
    },
    structuredDataForTags() {
      const { name, address, url, telephone, email, openingHours } = {
        ...this.main,
        ...{ openingHours: this.oh },
      }
      return { name, address, url, telephone, email, openingHours }
    },
    structuredData() {
      const result = {
        ...this.main,
        ...(this.itemLE.length && { hasOfferCatalog: this.hasOfferCatalog }),
        ...(this.oh.length && { openingHours: this.oh.join(' ') }),
      }
      return result
    },
  },
  methods: {
    replaceTheString(string, within, replaceTo) {
      string.replaceAll(within, replaceTo)
    }
  }
}
</script>
