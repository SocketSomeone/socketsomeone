import Metrics from './Metrics';
import Badge from '../atoms/Badge';
import { FireIcon } from '@heroicons/react/20/solid';
import { LightningBolt } from 'next/dist/client/components/react-dev-overlay/internal/icons/LightningBolt';

export interface ProjectCardProps {
	thumbnail?: string;
	url?: string;
	title?: string;
	description?: string;
	metrics: {
		stars: number;
		forks: number;
		issues?: number;
		language?: string
	};
	newest: boolean;
	hotest: boolean;
}

export default function ProjectCard({
										thumbnail,
										url,
										title,
										description,
										metrics: {forks, stars, issues, language},
										hotest, newest
									}: ProjectCardProps) {

	const chipData = {
		need: hotest || newest,
		text: hotest ? 'HOT' : 'NEW',
		color: hotest ? 'red' : 'blue' as 'red' | 'blue',
		icon: hotest ? <FireIcon  width={'14px'} /> : <LightningBolt width={'14px'} />,
	};


	return (
		<a
			href={url}
			className="flex flex-row pointer-events-auto py-2 px-4 mx-2 my-4 w-[22rem] sm:w-[26rem] md:w-[24rem] lg:w-[26rem] xl:w-[30rem] rounded-xl bg-white dark:bg-gray-800 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 hover:bg-slate-50 dark:ring-gray-800 dark:hover:ring-gray-700 cursor-pointer">
			<img
				src={thumbnail}
				alt={title}
				className="w-16 sm:w-20 md:w-20 lg:w-28 xl:w-32 hidden sm:flex self-center rounded-2xl mr-4 object-contain"/>

			<div className="flex flex-col justify-between overflow-hidden w-full p-4">
				<div className="flex flex-row">
					<h1 className="text-2xl truncate w-fit font-medium dark:text-white ">{title}</h1>

					{
						(chipData.need) && <>
							<Badge size={'xs'} color={chipData.color} type={'outlined'}
								   icon={chipData.icon} iconPosition={'right'}
								   className={'ml-2 my-auto rounded-lg text-xs py-[0.15rem]'}>{chipData.text}</Badge>
						</>
					}
				</div>


				<p className="text-gray-500 flex-1 text-sm font-normal dark:text-gray-300">{description ?? 'No description'}</p>

				<Metrics style={'mt-2 justify-start dark:text-blue-500'} forks={forks} stars={stars}
						 issues={issues ?? 0} language={language ?? 'Unknown'}/>
			</div>
		</a>
	);
}
