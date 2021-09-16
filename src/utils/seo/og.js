const websiteSchema = (
  siteName,
  url,
  title,
  description,
  ogImageLink,
  secureUrlLink = 'https://jamstack-explorers-nuxt-mission.com/social-preview.png',
  ogImageAlt = ''
) => {
  if (
    !siteName ||
    !url ||
    !title ||
    !description ||
    !secureUrlLink ||
    !ogImageLink ||
    !ogImageAlt
  )
    throw new Error(
      'Missing !siteName || !url || !title || !description || !secureUrlLink || !imageLink || !imageAlt'
    )

  return [
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: siteName,
    },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      hid: 'og:url',
      property: 'og:url',
      content: url,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: ogImageLink,
    },
    {
      hid: 'og:image:secure_url',
      property: 'og:image:secure_url',
      content: secureUrlLink,
    },
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: ogImageAlt,
    },
  ]
}

export default websiteSchema
