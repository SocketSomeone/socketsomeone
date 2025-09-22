'use client';

import { useTranslations } from 'next-intl';

export default function Page() {
	const t = useTranslations('navigation');

	return (
		<div>
			<h1 className="text-3xl font-bold underline">Hello, Next.js 13!</h1>
			<p>{t('about')}</p>
		</div>
	);
}
