import ProjectCard from '@/components/molecules/ProjectCard';
import Marquee from '@/components/magicui/marquee';

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

  return (
    <div
      className="flex flex-col flex-wrap items-center justify-center rounded-lg border bg-background bg-gray-100 border-gray-300 bg-opacity-80 backdrop-blur-sm dark:bg-gray-800 dark:border-gray-800 dark:bg-opacity-40">
      {
        projectsRows.map((row: any[], index: number) => (
          <Marquee key={index} pauseOnHover reverse={index % 2 === 0} className={'[--duration:60s]'}>
            {row.map((project: any, i: number) => (
              <ProjectCard key={i} url={project.html_url}
                           thumbnail={project.owner.login !== 'SocketSomeone' ? project.owner.avatar_url : 'icons/github_gradient.svg'}
                           title={project.name} description={project.description} metrics={{
                forks: project.forks,
                stars: project.stargazers_count,
                issues: project.open_issues,
                language: project.language
              }}/>
            ))}
          </Marquee>
        ))
      }

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/4 sm:w-1/4 md:1/2  bg-gradient-to-r from-white dark:from-background"></div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/4 sm:w-1/4 md:1/2 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
