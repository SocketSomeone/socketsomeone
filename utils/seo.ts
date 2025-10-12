import { routing } from '@/i18n/routing';

function normalizePath(path?: string) {
	if (!path || path === '/') {
		return '';
	}

	const trimmed = path.replace(/^\/+|\/+$/g, '');
	return trimmed ? `/${trimmed}` : '';
}

export function createLocaleAlternates(locale: string, path?: string) {
	const normalizedPath = normalizePath(path);
	const canonical = `/${locale}${normalizedPath}`;

	const languages = routing.locales.reduce<Record<string, string>>((acc, currentLocale) => {
		acc[currentLocale] = `/${currentLocale}${normalizedPath}`;
		return acc;
	}, {});

	return {
		canonical,
		languages
	};
}
