import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';
import { Fragment } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';

export default function App({Component, pageProps}: AppProps) {
	return (
		<Fragment>
			<DefaultSeo {...SEO} />
			<GoogleTagManager gtmId="GTM-W3MWWW92"/>
			<ThemeProvider attribute="class" defaultTheme="system">
				<Component {...pageProps} />
			</ThemeProvider>
		</Fragment>
	);
}
