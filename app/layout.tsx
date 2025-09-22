'use client';
import '../styles/globals.css';
import 'react-tooltip/dist/react-tooltip.css';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { LanyardProvider } from '@/components/providers/LanyardProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import Layout from '@/components/Layout';
import { QueryClient } from '@tanstack/query-core';
import { Poppins } from 'next/font/google';
import { cn } from '@/utils';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { GoogleTagManager } from '@next/third-parties/google';

const queryClient = new QueryClient();

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	style: ['normal', 'italic'],
	display: 'swap',
	fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
});

type Props = {
	children: React.ReactNode
}

export default function RootLayout({
									   children,
								   }: Props) {
	return (
		<html lang="en" className={cn('scroll-smooth', poppins.className)}>
		<head/>
		<body className="bg-white text-foreground dark:bg-gray-900 antialiased ">
		{/*<DefaultSeo {...SEO} />*/}
		<GoogleTagManager gtmId="GTM-W3MWWW92"/>
		<NextIntlClientProvider locale={'en'}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider attribute="class" defaultTheme="system">
					<LanyardProvider>
						{children}
					</LanyardProvider>
				</ThemeProvider>
			</QueryClientProvider>
		</NextIntlClientProvider>
		</body>
		</html>
	);
}
