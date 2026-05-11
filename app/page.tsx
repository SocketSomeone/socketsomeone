'use client';

import { hasLocale } from 'next-intl';
import { useEffect } from 'react';

import Loader from '@/components/atoms/Loader';
import { redirect } from '@/i18n/navigation';
import Document from '@/components/Document';
import { routing } from '@/i18n/routing';

export default function Page() {
	useEffect(() => {
		const browserLocale = navigator.language.split('-')[0];
		let localeToRedirect = 'en';

		if (hasLocale(routing.locales, browserLocale)) {
			localeToRedirect = browserLocale;
		}

		redirect({
			href: '/',
			locale: localeToRedirect,
		});
	}, []);

	return (
		<Document>
			<div className="w-full h-full min-h-screen flex justify-center items-center">
				<Loader/>
			</div>
		</Document>
	);
}
