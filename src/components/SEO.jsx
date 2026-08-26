import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.sakeenergy.co.za'
const DEFAULT_IMAGE = `${SITE_URL}/logo-og.png`

export default function SEO({ title, description, path = '/', image = DEFAULT_IMAGE }) {
  const fullTitle = title
    ? `${title} | Sake Energy Solutions`
    : 'Sake Energy Solutions | Industrial Automation & Renewable Energy | South Africa'
  const canonical = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
