import createPWAPlugin      from 'next-pwa';
import createNextIntlPlugin from 'next-intl/plugin';

const withPWA = createPWAPlugin({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development'
})

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	reactStrictMode: true,
	trailingSlash: false,
	redirects: async () => {
		return [
			{
				source: '/:path*/',
				destination: '/:path*',
				permanent: true
			},
		]
	},
	images: {
		qualities: [25, 50, 75, 100],
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.discordapp.com'
			},
			{
				protocol: 'https',
				hostname: 'cdn.discord.com'
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com'
			}
		]
	}
}

const PLUGINS = [withPWA, withNextIntl];

export default PLUGINS.reduce((acc, plugin) => plugin(acc), nextConfig);
