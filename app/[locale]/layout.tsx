import { getMessages, setRequestLocale } from 'next-intl/server';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import React, { Suspense } from 'react';

type Props = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	// Enable static rendering
	setRequestLocale(locale);
	const messages = await getMessages({ locale });

	return (
		<Suspense>
			<NextIntlClientProvider locale={locale} messages={messages}>
				<div className="relative flex flex-col min-h-screen overflow-hidden print:overflow-visible! font-Poppins">
					<Header/>

					{children}

					<Footer/>
				</div>
			</NextIntlClientProvider>
		</Suspense>
	);
}
