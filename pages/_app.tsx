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

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
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
		</Fragment>
	);
}
