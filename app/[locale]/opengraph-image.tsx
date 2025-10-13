import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';
import { createOgImageTemplate, OG_IMAGE_SIZE } from '@/utils/og';
import { routing } from '@/i18n/routing';

type Props = {
	params: Promise<{ locale: string }>;
};

export const dynamic = 'force-static';
export const size = OG_IMAGE_SIZE;
export const contentType = 'image/png';

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleOpenGraphImage({ params }: Props) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'home' });

	return new ImageResponse(
		createOgImageTemplate({
			title: t('title'),
			description: t('description'),
			locale,
			pathSegment: '/',
		}),
		OG_IMAGE_SIZE,
	);
}
