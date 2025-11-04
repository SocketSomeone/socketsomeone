import React from 'react';
import { cn } from '@/utils';
import { GoogleTagManager } from '@next/third-parties/google';
import Providers from './providers/Providers';
import { Inter } from 'next/font/google';
import CrowdinInContext from './providers/CrowdinInContext';
import Head from 'next/head';

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
	children?: React.ReactNode;
	locale?: string;
	enableCrowdin?: boolean;
}

export default function Document({ children, locale, enableCrowdin }: Props) {
	return (
		<html lang={locale ?? 'en'} className={cn('scroll-smooth', inter.variable)} suppressHydrationWarning>
		<Head>
			<link rel="dns-prefetch" href="https://github.githubassets.com"/>
			<link rel="dns-prefetch" href="https://avatars.githubusercontent.com"/>
			<link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com"/>
			<link rel="dns-prefetch" href="https://user-images.githubusercontent.com/"/>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
			<link rel="preconnect" href="https://github.githubassets.com" crossOrigin="anonymous"/>
			<link rel="preconnect" href="https://avatars.githubusercontent.com"/>
		</Head>
		<CrowdinInContext enable={enableCrowdin}/>
		<GoogleTagManager gtmId="GTM-W3MWWW92"/>
		<body className="bg-white text-foreground dark:bg-gray-900 antialiased ">
		<Providers>
			{children}
		</Providers>
		</body>
		</html>
	);
}
