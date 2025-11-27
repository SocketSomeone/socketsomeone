export const IS_DEV = process.env.NODE_ENV === 'development';
export const IS_PROD = process.env.NODE_ENV === 'production';

const SITE_URLS: Record<string, string> = {
	'development': 'http://localhost:3000',
	'production': 'https://socketsomeone.me'
}

export const SITE_URL = SITE_URLS[process.env.NODE_ENV || 'development'].replace(/\/+$/, '');
export const CROWDIN_PROJECT_URL = 'https://i18n.socketsomeone.me';
export const EMAILS = {
	CONTACT: 'contact@socketsomeone.me',
	LEGAL: 'legal@socketsomeone.me',
	SECURITY: 'security@socketsomeone.me'
}

