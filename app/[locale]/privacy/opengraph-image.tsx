import { ImageResponse } from 'next/og';
import { createOgImageTemplate, OG_IMAGE_SIZE } from '@/utils/og';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

type Props = {
	params: Promise<{ locale: string }>;
};

const PAGE_DESCRIPTION_FALLBACK = 'Details on how socketsomeone.me collects, uses, and protects your personal data.';

export const dynamic = 'force-static';
export const size = OG_IMAGE_SIZE;
export const contentType = 'image/png';

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function PrivacyOpenGraphImage({ params }: Props) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'privacy' }).catch(() => null);

	const title = t?.('title') ?? 'Privacy Policy';
	const description = t?.('description') ?? PAGE_DESCRIPTION_FALLBACK;

	return new ImageResponse(
		createOgImageTemplate({
			title,
			description,
			locale,
			pathSegment: 'privacy',
		}),
		OG_IMAGE_SIZE,
	);
}
