import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/utils/config';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = SITE_URL;
	const lastModified = new Date();

	const staticRoutes = [
		{ path: '', changeFrequency: 'weekly', priority: 1 },
		{ path: '/projects', changeFrequency: 'weekly', priority: 0.9 },
		{ path: '/contacts', changeFrequency: 'monthly', priority: 0.7 },
		{ path: '/terms', changeFrequency: 'yearly', priority: 0.5 },
		{ path: '/privacy', changeFrequency: 'yearly', priority: 0.5 }
	] as const;

	const buildAlternates = (path: string) =>
		routing.locales.reduce<Record<string, string>>((localesMap, locale) => {
			const localePath = path ? `/${locale}${path}` : `/${locale}`;
			localesMap[locale] = `${baseUrl}${localePath}`;
			return localesMap;
		}, {});

	return routing.locales.flatMap((locale) => staticRoutes.map(({ path, changeFrequency, priority }) => {
		const fullPath = path ? `/${locale}${path}` : `/${locale}`;

		return {
			url: `${baseUrl}${fullPath}`,
			lastModified,
			changeFrequency,
			priority,
			alternates: {
				languages: buildAlternates(path)
			}
		};
	}));
}
