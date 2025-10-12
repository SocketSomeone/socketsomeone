import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/utils/config';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'SocketSomeone',
		short_name: 'SocketSomeone',
		description: 'Personal website of SocketSomeone',
		start_url: '/',
		scope: '/',
		display: 'standalone',
		background_color: '#fff',
		theme_color: '#fff',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
			{
				src: '/favicons/web-app-manifest-192x192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'maskable'
			},
			{
				src: '/favicons/web-app-manifest-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'maskable'
			}
		],
		related_applications: [
			{
				platform: 'webapp',
				url: `${SITE_URL}/manifest.json`
			}
		]
	};
}
