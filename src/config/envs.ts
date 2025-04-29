import type { Locale } from 'next-intl'

export const LANGUAGE_COOKIE = 'accept_language'
export const LOCALES: Array<string> = ['en', 'pt', 'th'] as const
export const DEFAULT_LOCALE: Locale = 'en'
