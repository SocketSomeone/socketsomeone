'use client';

import { useEffect } from 'react';
import { redirect } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { hasLocale } from 'next-intl';
import Document from '@/components/Document';
import Loader from '@/components/atoms/Loader';

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
