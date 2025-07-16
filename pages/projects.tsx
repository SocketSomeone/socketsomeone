import Projects from '@/components/organisms/Projects';
import Page from '@/components/Page';
import { cn } from '@/utils';
import SectionHeader from '@/components/atoms/SectionHeader';

export default function ProjectsPage() {
	return (
		<Page
			title="Projects"
			description="Explore the projects of Alexey Filippov, a software engineer specializing in web development, open source, and community building."
		>

			<div className="w-full xl-wide:container px-4 pt-6 md:pt-20">
				<div
					className={cn('flex flex-col justify-center items-center w-full py-20 space-y-6 print:hidden')}>
					<div className={cn('flex flex-row justify-between items-start w-full')}>
						<SectionHeader title={'Check out my latest work'}
									   description={'I\'ve worked on a variety of projects, ranging from web development to machine learning. Here are a few of my favorites.'}
									   align={'left'}
									   className={'self-end'}
						/>

						<img src={'https://media.tenor.com/GK-qmS9zYeQAAAAi/buggs-buggy-gifs-skeleton.gif'}
							 alt="skeleton"
							 className="w-24 h-24 object-cover hidden md:block animate-pulse"/>
					</div>


					<Projects background={false} type="grid"/>
				</div>
			</div>
		</Page>
	);
}
