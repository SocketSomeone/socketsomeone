import Projects from '@/components/organisms/Projects';
import Page from '@/components/Page';
import { cn } from '@/utils';
import SectionHeader from '@/components/atoms/SectionHeader';

export default function ProjectsPage() {
	return (
		<Page
			title="Projects"
			description="Explore the projects of Alexey Filippov, a software engineer specializing in web development, open source, and community building."
			className={cn('w-full xl-wide:container flex flex-col items-center px-4 py-20 md:pt-40 space-y-6')}
		>
			<SectionHeader title={'Check out my latest work'}
						   description={'I\'ve worked on a variety of projects, ranging from web development to machine learning. Here are a few of my favorites.'}
						   align={'center'}
			/>


			<Projects background={false} type="grid"/>
		</Page>
	);
}
