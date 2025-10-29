import Light from '@/components/atoms/Light';
import Technologies from '@/components/molecules/Technologies';
import Toast from '@/components/molecules/Toast';
import Intro from '@/components/organisms/Intro';
import StarsGrid from '@/components/molecules/StarsGrid';
import Experience from '@/components/organisms/Experience/Experience';
import Page from '@/components/Page';
import Projects from '@/components/organisms/Projects';
import Contact from '@/components/organisms/Contact';
import { cn } from '@/utils';
import SectionHeader from '@/components/atoms/SectionHeader';
import LaurelIcon from '@/components/icons/LaurelIcon';
import { createLocaleAlternates } from '@/utils/seo';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import ScrollDownButton from '@/components/molecules/ScrollDownButton';
import PrintMode from '@/components/atoms/PrintMode';

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

export default async function HomePage({ params }: Props) {
	const {locale} = await params;

	const t = await getTranslations({
		locale,
		namespace: 'home.sections'
	});

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

			<div
				id={'projects'}
				className={cn('flex flex-col justify-center items-center w-full py-20 space-y-6 px-0! xl-wide:px-1 print:hidden')}>
				<SectionHeader
					before={
						<div className="flex flex-row items-center space-x-0 ">
							<LaurelIcon
								className="w-8 h-8 -scale-x-100 text-yellow-500"/>
							<div
								className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
								{t('projects.name')}
							</div>

							<LaurelIcon className="w-8 h-8 text-yellow-500"/>
						</div>
					}
					title={t('projects.title')}
					description={t('projects.subtitle')}
				/>
				<Projects background={true} type="marquee"/>
			</div>


			<Experience name={t('professions.name')} title={t('professions.title')}
						subtitle={t('professions.subtitle')}/>

			<Contact name={t('contacts.name')} title={t('contacts.title')}
					 subtitleStart={t('contacts.subtitleStart')} tg={t('contacts.tg')}
					 subtitleEnd={t('contacts.subtitleEnd')}/>

			<Technologies/>

			<Toast/>

			<StarsGrid stars={80}/>

			<PrintMode/>
		</Page>
	);
}
