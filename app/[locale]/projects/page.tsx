import Projects from '@/components/organisms/Projects';
import WakatimeStats from '@/components/organisms/WakatimeStats';
import Page from '@/components/Page';
import { cn } from '@/utils';
import SectionHeader from '@/components/atoms/SectionHeader';
import { Metadata } from 'next';
import { createLocaleAlternates } from '@/utils/seo';
import Placeholder from '@/components/molecules/Placeholder';
import { fetchWakatimeData } from '@/utils/wakatime';

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
	const wakatimeData = await fetchWakatimeData();

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

			<div className="w-full max-w-6xl">
				{wakatimeData ? (
					<WakatimeStats data={wakatimeData}/>
				) : (
					<div
						className="flex w-full items-center justify-center rounded-3xl border border-border/40 bg-muted/40 px-6 py-10 text-center text-sm text-foreground/70">
						<Placeholder header="Wakatime stats are unavailable"
									 description="Unfortunately, Wakatime statistics are currently unavailable. Please try again later."
						/>
					</div>
				)}
			</div>
		</Page>
	);
}
