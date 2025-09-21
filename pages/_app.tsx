import '../styles/globals.css';
import 'react-tooltip/dist/react-tooltip.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';
import { Fragment } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';
import Layout from '@/components/Layout';
import { LanyardProvider } from '@/components/providers/LanyardProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/query-core';
import { NextIntlClientProvider } from 'next-intl';

const queryClient = new QueryClient();
const DEFAULT_LOCALE = 'en';

export default function App({ Component, pageProps }: AppProps) {
	const locale = pageProps.locale || DEFAULT_LOCALE;
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	return (
		<Fragment>
			<NextIntlClientProvider
				locale={locale}
				messages={pageProps.messages || {}}
				timeZone={timeZone}
			>
				<DefaultSeo {...SEO} />
				<GoogleTagManager gtmId="GTM-W3MWWW92"/>
				<ThemeProvider attribute="class" defaultTheme="system">
					<LanyardProvider>
						<QueryClientProvider client={queryClient}>
							<Layout>
								<Component {...pageProps} />
							</Layout>
						</QueryClientProvider>
					</LanyardProvider>
				</ThemeProvider>
			</NextIntlClientProvider>
		</Fragment>
	);
}
