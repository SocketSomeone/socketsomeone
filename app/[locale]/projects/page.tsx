import Projects from '@/components/organisms/Projects';
import { WakatimeStatsConnector } from '@/components/organisms/WakatimeStats';
import Page from '@/components/Page';
import { cn } from '@/utils';
import SectionHeader from '@/components/atoms/SectionHeader';
import { Metadata } from 'next';
import { createLocaleAlternates } from '@/utils/seo';
import ProjectsTechStackSection from '@/components/organisms/Projects/ProjectsTechStackSection';

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION = 'Explore the projects of Alexey Filippov, a software engineer specializing in web development, open source, and community building.';

type Props = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;

	return {
		title: PAGE_TITLE,
		description: PAGE_DESCRIPTION,
		alternates: createLocaleAlternates(locale, 'projects'),
		openGraph: {
			title: PAGE_TITLE,
			description: PAGE_DESCRIPTION,
			type: 'website',
			url: `/${locale}/projects`,
		},
		twitter: {
			title: PAGE_TITLE,
			description: PAGE_DESCRIPTION,
		}
	};
}

export default async function ProjectsPage() {

	return (
		<Page className={cn('flex w-full flex-col items-center gap-12 px-4 py-20 sm:px-8 lg:px-12')}>
			<div className="w-full max-w-5xl">
				<SectionHeader
					title={'Check out my latest work'}
					description={'I\'ve worked on a variety of projects, ranging from web development to machine learning. Here are a few of my favorites.'}
					align={'center'}
					className="mx-auto"
				/>
			</div>

			<div className="w-full max-w-6xl flex flex-col items-center">
				<Projects background={false} type="grid"/>
			</div>

			<ProjectsTechStackSection/>

			<div className="w-full max-w-6xl">
				<WakatimeStatsConnector/>
			</div>
		</Page>
	);
}
