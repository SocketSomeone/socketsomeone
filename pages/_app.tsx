import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import {DefaultSeo} from "next-seo";

import SEO from "../next-seo.config";
import {Fragment} from "react";

export default function App({Component, pageProps}: AppProps) {
    return (
        <Fragment>
            <DefaultSeo {...SEO} />
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </Fragment>
    )
}
