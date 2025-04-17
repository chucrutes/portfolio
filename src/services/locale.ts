'use server'

import type { Locale } from 'next-intl'
import { cookies as nextCookies } from 'next/headers'
import { LANGUAGE_COOKIE, DEFAULT_LOCALE } from '../config/envs'

export async function getUserLocale() {
  const cookies = await nextCookies()
  return cookies.get(LANGUAGE_COOKIE)?.value || DEFAULT_LOCALE
}

export async function setUserLocale(locale: Locale) {
  const cookies = await nextCookies()

  cookies.set(LANGUAGE_COOKIE, locale)
}
