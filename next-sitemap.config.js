/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://socketsomeone.me',
	generateRobotsTxt: true, // (optional)
	exclude: [
		'/404',
		'/500',
		'/_error',
		'/_next',
		'/api',
		'/static',
		'/favicon.ico',
		'/terms',
		'/privacy'
	],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
				disallow: [
					'/api', '/_next', '/static',
					'/404', '/500', '/_error',
					'/favicon.ico', '/terms', '/privacy'
				]
			}
		]
	},
	// ...other options
}
