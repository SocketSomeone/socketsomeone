import Placeholder from '../../molecules/Placeholder';
import ProjectCard from '../../molecules/ProjectCard';
import { cn } from '@/utils';

export interface GridProjectsProps {
	projects: any;
}

export default function GridProjects({ projects }: GridProjectsProps) {
	const mostPopularProjects = projects
		.filter((project: any) => project.stargazers_count > 100)
		.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
		.slice(0, 5)
		.map((project: any) => project.id);
	const threeMonthsAgo = new Date(new Date().setMonth(new Date().getMonth() - 6));

	return (
		<>
			{
				projects.length === 0 ? (
					<Placeholder
						className={'w-full h-[400px]'}
						image="gifs/duck-haha-classic.gif"
						header={'No projects found'}
						description={'It seems like there are no projects to display at the moment. Please check back later or explore my other work on GitHub.'}
					/>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{projects.map((project: any, index: number) => (
							<ProjectCard key={index}
										 className={cn('w-full')}
										 url={project.html_url || project.homepage}
										 owner={project.owner.login}
										 thumbnail={project.owner.login !== 'SocketSomeone' ? project.owner.avatar_url : 'icons/github_gradient.svg'}
										 title={project.name} description={project.description}
										 metrics={{
											 stars: project.stargazers_count,
											 language: project.language
										 }}
										 license={project.license?.spdx_id}
										 newest={new Date(project.created_at) > threeMonthsAgo}
										 hotest={mostPopularProjects.includes(project.id)}/>

						))}
					</div>
				)
			}
		</>
	);
}
