import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
	const requested = locale;
	const currentLocale = hasLocale(routing.locales, requested)
		? requested
		: routing.defaultLocale;

	return {
		locale: currentLocale,
		messages: (await import(`../messages/${currentLocale}/main.json`)).default,
	};
});
