import createMiddleware from 'next-intl/middleware'
import { locales } from './i18n'

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: 'id',

  // Automatically detect locale from browser/headers
  localeDetection: true,

  // Always use prefix (e.g., /id/about, /en/about)
  localePrefix: 'always'
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(id|en)/:path*']
}


