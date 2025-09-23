import '../styles/globals.css';
import 'react-tooltip/dist/react-tooltip.css';

import React from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/utils';
import { GoogleTagManager } from '@next/third-parties/google';
import { Metadata, Viewport } from 'next';
import Providers from '@/components/providers/Providers';

const inter = Inter({
	subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	style: ['normal', 'italic'],
	display: 'swap',
	fallback: [
		'-apple-system',
		'BlinkMacSystemFont',
		'Segoe UI',
		'Roboto',
		'Oxygen',
		'Ubuntu',
		'Cantarell',
		'Fira Sans',
		'Droid Sans',
		'Helvetica Neue',
		'sans-serif'
	],
	variable: '--font-inter',
});

type Props = {
	children: React.ReactNode
}

export const metadata: Metadata = {
	metadataBase: new URL('https://socketsomeone.me'),
	referrer: 'strict-origin-when-cross-origin',
	title: {
		default: 'SocketSomeone',
		template: '%s | SocketSomeone',
	},
	description: 'Personal website of Alexey Filippov, also known as SocketSomeone. A Software Engineer, Open-Source Enthusiast (OSS), and Tech Lead specializing in Backend development with over 5 years of experience.',
	keywords: [
		'Alexey Filippov',
		'SocketSomeone',
		'software engineer',
		'full-stack developer',
		'open source',
		'OSS',
		'backend',
		'typescript',
		'next.js',
		'react',
		'personal website'
	],
	manifest: '/manifest.json',
	icons: {
		icon: [
			{ url: '/favicons/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
			{ url: '/favicons/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
			{ url: '/favicons/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
			{ url: '/favicons/favicon.ico', type: 'image/x-icon' },
			{ url: '/favicons/favicon.svg', type: 'image/svg+xml' }
		],
		shortcut: [
			{ url: '/favicons/favicon.ico', type: 'image/x-icon' }
		],
		apple: [
			{ url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
		],
		other: [
			{ rel: 'mask-icon', url: '/favicons/safari-pinned-tab.svg', color: '#FFFFFF' }
		]
	},
	applicationName: 'SocketSomeone',
	appleWebApp: {
		title: 'SocketSomeone',
	},
	alternates: {
		canonical: '/',
		languages: {
			'en': '/en',
			'ru': '/ru',
		},
		types: {
			'application/rss+xml': '/rss.xml',
		}
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true
		}
	},
	openGraph: {
		type: 'profile',
		locale: 'en_US',
		url: 'https://socketsomeone.me',
		siteName: 'Alexey Filippov – SocketSomeone',
		title: 'Alexey Filippov (aka SocketSomeone) – Software Engineer & OSS Enthusiast',
		description: 'Personal website of Alexey Filippov, also known as SocketSomeone. A Software Engineer, Open-Source Enthusiast (OSS), and Tech Lead specializing in Backend development with over 5 years of experience.',
		firstName: 'Alexey',
		lastName: 'Filippov',
		gender: 'Male',
		username: 'SocketSomeone',
		images: [
			{
				url: 'https://socketsomeone.me/og.png',
				alt: 'Open Graph preview of Alexey Filippov (SocketSomeone)',
				width: 1200,
				height: 640,
				type: 'image/png',
			}
		],
		emails: [
			'socket.someone@gmail.com'
		]
	},
	twitter: {
		title: 'Alexey Filippov (aka SocketSomeone) – Software Engineer & OSS Enthusiast',
		description: 'Personal website of Alexey Filippov, also known as SocketSomeone. A Software Engineer, Open-Source Enthusiast (OSS), and Tech Lead specializing in Backend development with over 5 years of experience.',
		creator: '@SocketSomeone',
		site: 'https://socketsomeone.me',
		card: 'summary_large_image',
		images: [
			{
				url: 'https://socketsomeone.me/og.png',
				alt: 'Open Graph preview of Alexey Filippov (SocketSomeone)',
				width: 1200,
				height: 640,
				type: 'image/png',
			}
		]
	}
};

export const viewport: Viewport = {
	themeColor: '#FFFFFF',
	width: 'device-width',
	initialScale: 1,
	colorScheme: 'light dark',
};

export default function RootLayout({
									   children,
								   }: Props) {
	return (
		<html lang="en" className={cn('scroll-smooth', inter.variable)} suppressHydrationWarning>
		<head/>
		<GoogleTagManager gtmId="GTM-W3MWWW92"/>
		<body className="bg-white text-foreground dark:bg-gray-900 antialiased ">
		<Providers>
			{children}
		</Providers>
		</body>
		</html>
	);
}
