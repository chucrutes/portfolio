import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  // i18n: {
  //   locales: ['en-US', 'pt-BR'],
  //   defaultLocale: 'en-US',
  //   domains: [
  //     {
  //       domain: 'localhost',
  //       defaultLocale: 'en-US'
  //     },
  //     {
  //       domain: 'br.localhost',
  //       defaultLocale: 'pt-BR'
  //     },
  //   ]
  // }
  /* config options here */
}
const withNextIntl = createNextIntlPlugin('./app/i18n/request.ts')
export default withNextIntl(nextConfig)
