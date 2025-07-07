'use client';

import { JSX } from 'react';
import SectionHeader from '../atoms/SectionHeader';
import LaurelIcon from '../icons/LaurelIcon';
import Loader from '../atoms/Loader';
import MarqueeProjectsHorizontal from './MarqueeProjectsHorizontal';
import { LinkIcon } from '@heroicons/react/24/solid';
import { cn } from '@/utils';
import GithubActivity from '../molecules/GithubActivity';
import { useQuery } from '@tanstack/react-query';


export default function Projects(): JSX.Element {
	const { isLoading: loading, error, data: projects } = useQuery({
		queryKey: ['projects'],
		queryFn: async () => {
			const response = await fetch('https://raw.githubusercontent.com/SocketSomeone/socketsomeone/refs/heads/master/assets/projects.json');
			if (!response.ok) {
				throw new Error('Failed to fetch projects');
			}
			return response.json();
		}
	})

	return (
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
							My Projects
						</div>

						<LaurelIcon className="w-8 h-8 text-yellow-500"/>
					</div>
				}
				title={'Check out my latest work'}
				description={'I\'ve worked on a variety of projects, ranging from web development to machine learning. Here are a few of my favorites.'}/>

			<div
				className="flex flex-row justify-center w-full rounded-lg border bg-gray-100/80 border-gray-300 backdrop-blur-xs dark:bg-gray-800/40 dark:border-gray-800 overflow-hidden">
				{
					loading || error
						? (<div className='h-[400px] w-full justify-center items-center flex'><Loader /></div>)
						: <MarqueeProjectsHorizontal projects={projects} rows={3}/>
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

		</div>
	);
}
