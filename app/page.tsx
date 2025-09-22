'use client';

import { redirect } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { hasLocale } from 'next-intl';

export default function Page() {
	const browserLocale = navigator.language.split('-')[0];
	let localeToRedirect = 'en';

	if (hasLocale(routing.locales, browserLocale)) {
		localeToRedirect = browserLocale;
	}

	return redirect({
		href: '/',
		locale: localeToRedirect,
	});
}
