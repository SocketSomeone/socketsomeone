import {Html, Head, Main, NextScript} from 'next/document'
import Script from "next/script";

export default function Document() {
    return (
        <Html>
            <Head>
            </Head>
            <body className="dark:bg-gray-900">
            <Main/>
            <NextScript/>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-FGL4QES69Q"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FGL4QES69Q');
        `}
            </Script>
            </body>

        </Html>
    )
}
