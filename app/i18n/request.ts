import { getRequestConfig } from 'next-intl/server'
import { getUserLocale } from '../services/locale'

export default getRequestConfig(async () => {
  const locale = await getUserLocale()
  console.log(locale)

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default
  }
})
