import { ImageResponse } from 'next/og';
import { createOgImageTemplate, OG_IMAGE_SIZE } from '@/utils/og';

export const dynamic = 'force-static';
export const size = OG_IMAGE_SIZE;
export const contentType = 'image/png';

export default async function HomeOpenGraphImage() {

	return new ImageResponse(
		createOgImageTemplate({
			title: 'Alexey Filippov',
			description: 'Software engineer specializing in backend systems, open source, and product development.',
			locale: 'en',
			pathSegment: '/',
		}),
		OG_IMAGE_SIZE,
	);
}
