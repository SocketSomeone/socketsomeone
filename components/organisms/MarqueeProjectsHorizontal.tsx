import ProjectCard from '@/components/molecules/ProjectCard';
import { Carousel, CarouselContent, CarouselItem } from '../magicui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

export interface MarqueeProjectsHorizontalProps {
	projects: any;
	rows: number;
}

export default function MarqueeProjectsHorizontal({projects, rows}: MarqueeProjectsHorizontalProps) {
	const projectsRows = projects.reduce((resultArray: any[], item: any, index: number) => {
		const chunkIndex = index % rows;

		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = [];
		}

		resultArray[chunkIndex].push(item);

		return resultArray;
	}, []);

	const mostPopularProjects = projects
		.filter((project: any) => project.stargazers_count > 100)
		.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
		.slice(0, 5)
		.map((project: any) => project.id);
	const threeMonthsAgo = new Date(new Date().setMonth(new Date().getMonth() - 6));

	return (
		<div
			className="flex flex-col flex-wrap rounded-lg border bg-background bg-gray-100 border-gray-300 bg-opacity-80 backdrop-blur-sm dark:bg-gray-800 dark:border-gray-800 dark:bg-opacity-40">
			{
				projectsRows.map((row: any[], index: number) => (
					<Carousel key={index}
							  opts={{
								  loop: true,
								  dragFree: true
							  }}
						plugins={[AutoScroll({
							speed: 2,
							direction:  index % 2 === 0 ? 'backward' : 'forward',
							stopOnInteraction: false,
							startDelay: 1
						})]}
							  className={'w-[100vw]'}
					>
						<CarouselContent className={''}>
							{row.map((project: any, i: number) => (

								<CarouselItem className={'basis-auto'} key={i}>
									<ProjectCard url={project.html_url || project.homepage}
												 thumbnail={project.owner.login !== 'SocketSomeone' ? project.owner.avatar_url : 'icons/github_gradient.svg'}
												 title={project.name} description={project.description}
												 metrics={{
													 forks: project.forks,
													 stars: project.stargazers_count,
													 issues: project.open_issues,
													 language: project.language
												 }}
												 newest={new Date(project.created_at) > threeMonthsAgo}
												 hotest={mostPopularProjects.includes(project.id)}/>
								</CarouselItem>

							))}
						</CarouselContent>

					</Carousel>
				))
			}

			<div
				className="pointer-events-none absolute inset-y-0 left-0 w-0 sm:w-1/4 md:w-1/6 xl:w-1/4  bg-gradient-to-r from-white dark:from-background"></div>
			<div
				className="pointer-events-none absolute inset-y-0 right-0 w-0 sm:w-1/4 md:w-1/6 xl:w-1/4 bg-gradient-to-l from-white dark:from-background"></div>
		</div>
	);
}
