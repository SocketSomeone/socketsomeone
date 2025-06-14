import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
	titleTemplate: '%s | SocketSomeone',
	description: 'Personal website of Alexey Filippov, also known as SocketSomeone. A Software Engineer, Open-Source Enthusiast (OSS), and Tech Lead specializing in Backend development with over 5 years of experience.',
	canonical: 'https://socketsomeone.me',
	themeColor: '#FFFFFF',
	additionalLinkTags: [
		{ rel: 'dns-prefetch', href: 'https://github.githubassets.com' },
		{ rel: 'dns-prefetch', href: 'https://avatars.githubusercontent.com' },
		{ rel: 'dns-prefetch', href: 'https://github-cloud.s3.amazonaws.com' },
		{ rel: 'dns-prefetch', href: 'https://user-images.githubusercontent.com/' },
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '1' },
		{ rel: 'preconnect', href: 'https://github.githubassets.com', crossOrigin: '1' },
		{ rel: 'preconnect', href: 'https://avatars.githubusercontent.com' },
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		{ rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' },
		{ rel: 'shortcut icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
		{ rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#FFFFFF' },
		{ rel: 'manifest', href: '/favicons/site.webmanifest' },
		{ rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
		{ rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/favicon-96x96.png' },
		{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
		{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
	],
	additionalMetaTags: [
		{ name: 'hostname', content: 'socketsomeone.me' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ name: 'color-scheme', content: 'light dark' },
		{ name: 'author', content: 'SocketSomeone' },
		{
			name: 'keywords',
			content: 'Alexey Filippov, SocketSomeone, software engineer, full-stack developer, open source, OSS, backend, typescript, next.js, react, personal website'
		},
		{ name: 'robots', content: 'index, follow' },
		{ name: 'googlebot', content: 'index, follow' },
		{ name: 'apple-mobile-web-app-title', content: 'SocketSomeone' },
		{ name: 'application-name', content: 'SocketSomeone' },
		{ name: 'msapplication-TileColor', content: '#FFFFFF' },
		{ name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
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
	defaultOpenGraphImageWidth: 1200,
	defaultOpenGraphImageHeight: 640,
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
