import Light from '@/components/atoms/Light';
import Technologies from '@/components/molecules/Technologies';
import Toast from '@/components/molecules/Toast';
import Intro from '@/components/organisms/Intro';
import StarsGrid from '@/components/molecules/StarsGrid';
import Experience from '@/components/organisms/Experience/Experience';
import Page from '@/components/Page';
import Contact from '@/components/organisms/Contact';
import { createLocaleAlternates } from '@/utils/seo';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import ScrollDownButton from '@/components/molecules/ScrollDownButton';
import PrintMode from '@/components/atoms/PrintMode';
import { ClientHomeProjects } from '@/components/organisms/Projects/ClientHomeProjects';
import React from 'react';

type Props = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({
		locale,
		namespace: 'home'
	});

	return {
		title: t('title'),
		description: t('description'),
		alternates: createLocaleAlternates(locale),
		openGraph: {
			title: t('title'),
			description: t('description'),
			type: 'website',
			url: `/${locale}`,
		},
		twitter: {
			title: t('title'),
			description: t('description'),
		}
	};
}

export default function HomePage() {
	return (
		<Page className={'grow'}>
			<Light/>

			<div className="md:container w-full flex flex-col print:h-fit px-4 pt-6 md:pt-0 h-screen relative -top-16 xl-wide:-top-20">
				<Intro/>


				<div className="justify-center mb-5 print:hidden">
					<ScrollDownButton className="animate-bounce w-8 h-8 mx-auto"
									  targetIds={['projects', 'experience']}
					/>
				</div>
			</div>

			<ClientHomeProjects/>

			<Experience/>

			<Contact/>

			<Technologies/>

			<Toast/>

			<StarsGrid stars={80}/>

			<PrintMode/>
		</Page>
	);
}
