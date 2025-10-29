import { defineRouting } from 'next-intl/routing';
import { IS_DEV } from '@/utils/config';

const LOCALES = ['en', 'ru'];

if (IS_DEV) {
	LOCALES.push('ach'); // adding fictional locale for development purposes
}

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: LOCALES,

	// Used when no locale matches
	defaultLocale: 'en',
	// Whether or not to prefix the default locale
	localePrefix: 'always',
	// Whether or not to automatically detect the user's locale
	localeDetection: false,
	// Whether or not to store the user's locale in a cookie
	localeCookie: false,
});
