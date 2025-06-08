import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
	title: 'Alexey Filippov - Software Engineer | SocketSomeone',
	description: 'Personal website of Alexey Filippov, also known as SocketSomeone. A Software Engineer, Open-Source Enthusiast (OSS), and Tech Lead specializing in Backend development with over 5 years of experience.',
	canonical: 'https://socketsomeone.me',
	themeColor: '#3b82f6',
	languageAlternates: [],
	additionalLinkTags: [
		{ rel: 'icon', href: '/favicon.ico' },
		{ rel: 'manifest', href: '/manifest.json' },
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '1' },
		{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
		{ rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
		{ rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
		{ rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
		{ rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
		{ rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
		{ rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
		{ rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
		{ rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
		{ rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
		{ rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
		{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
		{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
	],
	additionalMetaTags: [
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ name: 'author', content: 'SocketSomeone' },
		{
			name: 'keywords',
			content: 'Alexey Filippov, SocketSomeone, software engineer, full-stack developer, open source, OSS, backend, typescript, next.js, react, personal website'
		},
		{ name: 'robots', content: 'index, follow' },
		{ name: 'googlebot', content: 'index, follow' },
		{ name: 'msapplication-TileColor', content: '#FFFFFF' },
		{ name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
		{ name: 'theme-color', content: '#3b82f6' },
		{ name: 'twitter:title', content: 'Alexey Filippov (aka SocketSomeone) – Software Engineer & OSS Enthusiast' },
		{
			name: 'twitter:description',
			content: 'Personal website of Alexey Filippov, also known as SocketSomeone. A Software Engineer, Open-Source Enthusiast (OSS), and Tech Lead specializing in Backend development with over 5 years of experience.'
		},
	],
	robotsProps: {
		nosnippet: false,
		noimageindex: false,
		notranslate: false,
		noarchive: false,
	},
	openGraph: {
		type: 'profile',
		locale: 'en_US',
		url: 'https://socketsomeone.me',
		siteName: 'Alexey Filippov – SocketSomeone',
		title: 'Alexey Filippov (aka SocketSomeone) – Software Engineer & OSS Enthusiast',
		description: 'Personal website of Alexey Filippov, also known as SocketSomeone. A Software Engineer, Open-Source Enthusiast (OSS), and Tech Lead specializing in Backend development with over 5 years of experience.',
		profile: {
			firstName: 'Alexey',
			lastName: 'Filippov',
			gender: 'Male',
			username: 'SocketSomeone',
		},
		images: [
			{
				url: 'https://socketsomeone.me/og.png',
				alt: 'Open Graph preview of Alexey Filippov (SocketSomeone)',
				width: 1200,
				height: 640,
				type: 'image/png',
			}
		],
		defaultImageWidth: 1200,
		defaultImageHeight: 640,
	},
	twitter: {
		handle: '@SocketSomeone',
		site: 'https://socketsomeone.me',
		cardType: 'summary_large_image',
	},
};

export default config;
