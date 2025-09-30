import React from 'react';
import { cn } from '@/utils';
import { GoogleTagManager } from '@next/third-parties/google';
import Providers from './providers/Providers';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { IS_DEV } from '@/utils/config';

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
		<head>
		</head>
		<GoogleTagManager gtmId="GTM-W3MWWW92"/>
		<body className="bg-white text-foreground dark:bg-gray-900 antialiased ">
		<Providers>
			{children}
		</Providers>
		</body>
		{IS_DEV && enableCrowdin && (
			<>
				<Script
					id="crowdin"
					type="text/javascript"
					dangerouslySetInnerHTML={{
						__html: 'var _jipt = []; _jipt.push([\'project\', \'socketsomeone\']);',
					}}
				/>
				<Script src="https://cdn.crowdin.com/jipt/jipt.js" type="text/javascript"/>
			</>
		)}
		</html>
	);
}
