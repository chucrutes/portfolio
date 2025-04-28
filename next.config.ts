import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.14', '192.168.0.106']
}
const withNextIntl = createNextIntlPlugin('./src/app/i18n/request.ts')
export default withNextIntl(nextConfig)
