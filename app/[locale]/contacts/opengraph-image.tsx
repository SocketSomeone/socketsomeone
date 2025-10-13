import { ImageResponse } from 'next/og';
import { createOgImageTemplate, OG_IMAGE_SIZE } from '@/utils/og';
import { routing } from '@/i18n/routing';

type Props = {
	params: Promise<{ locale: string }>;
};

const PAGE_TITLE = 'Contact';
const PAGE_DESCRIPTION = 'Let’s collaborate! Reach out to Alexey Filippov (SocketSomeone) for engineering projects and open source work.';

export const dynamic = 'force-static';
export const size = OG_IMAGE_SIZE;
export const contentType = 'image/png';

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function ContactsOpenGraphImage({ params }: Props) {
	const { locale } = await params;

	return new ImageResponse(
		createOgImageTemplate({
			title: PAGE_TITLE,
			description: PAGE_DESCRIPTION,
			locale,
			pathSegment: 'contacts',
		}),
		OG_IMAGE_SIZE,
	);
}
