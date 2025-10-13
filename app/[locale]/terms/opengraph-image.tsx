import { ImageResponse } from 'next/og';
import { createOgImageTemplate, OG_IMAGE_SIZE } from '@/utils/og';
import { routing } from '@/i18n/routing';

type Props = {
	params: Promise<{ locale: string }>;
};

const PAGE_TITLE = 'Terms of Service';
const PAGE_DESCRIPTION = 'Understand the terms governing the use of socketsomeone.me and socketsomeone.dev.';

export const dynamic = 'force-static';
export const size = OG_IMAGE_SIZE;
export const contentType = 'image/png';

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function TermsOpenGraphImage({ params }: Props) {
	const { locale } = await params;

	return new ImageResponse(
		createOgImageTemplate({
			title: PAGE_TITLE,
			description: PAGE_DESCRIPTION,
			locale,
			pathSegment: 'terms',
		}),
		OG_IMAGE_SIZE,
	);
}
