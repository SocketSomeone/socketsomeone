import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/utils/config';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
	const baseUrl = SITE_URL;

	const disallow = [
		'/api',
		'/_next',
		'/static',
		'/404',
		'/500'
	];

	const indexedPaths = ['', '/projects', '/contacts', '/terms', '/privacy'] as const;
	const allow = new Set<string>(['/']);

	routing.locales.forEach((locale) => {
		indexedPaths.forEach((path) => {
			const localizedPath = path ? `/${locale}${path}` : `/${locale}`;
			allow.add(localizedPath);
		});
	});

	return {
		rules: {
			userAgent: '*',
			allow: Array.from(allow).sort(),
			disallow
		},
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl
	};
}
