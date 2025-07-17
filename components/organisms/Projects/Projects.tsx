'use client';

import { JSX } from 'react';
import SectionHeader from '@/components/atoms/SectionHeader';
import LaurelIcon from '@/components/icons/LaurelIcon';
import Loader from '@/components/atoms/Loader';
import MarqueeProjects from './MarqueeProjects';
import { LinkIcon } from '@heroicons/react/24/solid';
import { cn } from '@/utils';
import GithubActivity from '../../molecules/GithubActivity';
import { useQuery } from '@tanstack/react-query';
import GridProjects from './GridProjects';

interface ProjectsProps {
	type: 'marquee' | 'grid';
	background: boolean;
}

export default function Projects({ type, background }: ProjectsProps): JSX.Element {
	const { isLoading: loading, error, data: projects } = useQuery({
		queryKey: ['projects'],
		queryFn: async () => {
			const response = await fetch('https://raw.githubusercontent.com/SocketSomeone/socketsomeone/refs/heads/master/assets/projects.json');
			if (!response.ok) {
				throw new Error('Failed to fetch projects');
			}
			return response.json();
		}
	});

	const isMarquee = type === 'marquee';
	const Component = isMarquee ? MarqueeProjects : GridProjects;

	return (
		<>

			<div
				className={cn('flex flex-row justify-center w-full rounded-lg', {
					'bg-gray-100/80 border-gray-300 backdrop-blur-xs dark:bg-gray-800/40 dark:border-gray-800 border overflow-hidden': background,
					'bg-transparent dark:bg-transparent': !background
				})}>
				{
					loading || error
						? (<div className="h-[400px] w-full justify-center items-center flex"><Loader/></div>)
						: <Component projects={projects} rows={3}/>
				}
			</div>


			<GithubActivity/>

			<a href="https://github.com/SocketSomeone"
			   className="flex items-center justify-center truncate mb-3 py-3 px-4 bg-white shadow-xl shadow-black/5 ring-1 ring-slate-600/10 hover:bg-slate-50 dark:bg-gray-800 dark:ring-gray-800 rounded-xl">

				<LinkIcon className="w-4 h-4 mr-2"/>

				<span className="truncate text-lg font-regular">
					More projects on my GitHub
				</span>
			</a>
		</>
	);
}
