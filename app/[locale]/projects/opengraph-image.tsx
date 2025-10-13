import { ImageResponse } from 'next/og';
import { createOgImageTemplate, OG_IMAGE_SIZE } from '@/utils/og';
import { routing } from '@/i18n/routing';

type Props = {
	params: Promise<{ locale: string }>;
};

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION = 'Explore featured work by SocketSomeone, spanning backend systems, open source, and product engineering.';

export const dynamic = 'force-static';
export const size = OG_IMAGE_SIZE;
export const contentType = 'image/png';

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function ProjectsOpenGraphImage({ params }: Props) {
	const { locale } = await params;

	return new ImageResponse(
		createOgImageTemplate({
			title: PAGE_TITLE,
			description: PAGE_DESCRIPTION,
			locale,
			pathSegment: 'projects',
		}),
		OG_IMAGE_SIZE,
	);
}
