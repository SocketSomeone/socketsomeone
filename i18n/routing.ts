import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ['en', 'ru'],

	// Used when no locale matches
	defaultLocale: 'en',
	// Whether or not to prefix the default locale
	localePrefix: 'always',
	// Whether or not to automatically detect the user's locale
	localeDetection: false
});
