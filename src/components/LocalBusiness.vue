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
          <span itemprop="openingHours" :content="el.replace(' ', ', ')">{{
            el
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
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
      return this.$axios.defaults.baseURL
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
    domain() {
      return this.baseUrl
        .replace('http://', '')
        .replace('https://', '')
        .replace('/', '')
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
    main() {
      return {
        '@context': 'http://www.schema.org',
        '@type': 'ProfessionalService',
        name: 'Подарок на века',
        url: this.baseUrl,
        logo: 'Подарок на века logo',
        priceRange: '$$',
        paymentAccepted: 'Cash, Credit Card',
        image: this.baseUrl + 'logo.svg',
        description: this.description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '73 1985',
          addressLocality: 'Los Angeles',
          addressRegion: 'CA',
          postalCode: '93785',
          addressCountry: 'USA',
        },
        telephone: '+1 (300) 500-05000',
        email: `mailto:info@${this.domain}`,
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
}
</script>
