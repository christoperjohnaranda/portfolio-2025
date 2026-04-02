import createMiddleware from 'next-intl/middleware'
import { locales } from './i18n'

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: 'en',

  // Disable auto-detection so users control language via the switcher
  localeDetection: false,

  // Only use prefix for non-default locales
  // Indonesian (default): / or /project
  // English: /en or /en/project
  localePrefix: 'as-needed'
})

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(id|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
}









