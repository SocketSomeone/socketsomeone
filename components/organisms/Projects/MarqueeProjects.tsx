import { Carousel, CarouselContent, CarouselItem } from '../../magicui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import Placeholder from '../../molecules/Placeholder';
import ProjectCard from '../../molecules/Card/ProjectCard';

export interface MarqueeProjectsHorizontalProps {
	projects: any;
	rows: number;
}

export default function MarqueeProjects({ projects, rows }: MarqueeProjectsHorizontalProps) {
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
			className="flex flex-col flex-wrap w-full overflow-hidden">
			{
				projects.length === 0 ? (
						<Placeholder
							className={'w-full h-[400px]'}
							image="gifs/duck-haha-classic.gif"
							header={'No projects found'}
							description={'It seems like there are no projects to display at the moment. Please check back later or explore my other work on GitHub.'}
						/>
					) :
					projectsRows.map((row: any[], index: number) => (
						<Carousel key={index}
								  opts={{
									  loop: true,
									  dragFree: true
								  }}
								  plugins={[AutoScroll({
									  speed: 2,
									  direction: index % 2 === 0 ? 'backward' : 'forward',
									  stopOnInteraction: false,
									  startDelay: 1
								  })]}
								  className={'w-full py-2'}
						>
							<CarouselContent>
								{row.map((project: any, i: number) => (

									<CarouselItem className={'basis-auto'} key={i}>
										<ProjectCard url={project.html_url || project.homepage}
													 owner={project.owner.login}
													 thumbnail={project.owner.login !== 'SocketSomeone' ? project.owner.avatar_url : 'icons/github_gradient.svg'}
													 title={project.name} description={project.description}
													 metrics={{
														 stars: project.stargazers_count,
														 language: project.language,
													 }}
													 license={project.license?.spdx_id}
													 newest={new Date(project.created_at) > threeMonthsAgo}
													 hotest={mostPopularProjects.includes(project.id)}
													 className="w-[18rem] md:w-[24rem] lg:w-[26rem] xl:w-[27.1rem]"
										/>
									</CarouselItem>

								))}
							</CarouselContent>

						</Carousel>
					))
			}

			<div
				className="pointer-events-none absolute inset-y-0 left-0 w-0 sm:w-1/4 md:w-1/6 xl:w-1/4  bg-linear-to-r from-white dark:from-background"></div>
			<div
				className="pointer-events-none absolute inset-y-0 right-0 w-0 sm:w-1/4 md:w-1/6 xl:w-1/4 bg-linear-to-l from-white dark:from-background"></div>
		</div>
	);
}
