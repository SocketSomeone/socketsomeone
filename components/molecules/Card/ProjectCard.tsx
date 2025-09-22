import Badge from '@/components/atoms/Badge';
import { BoltIcon, FireIcon } from '@heroicons/react/20/solid';
import { BeakerIcon, LanguageIcon, StarIcon } from '@heroicons/react/24/solid';
import { cn } from '@/utils';

export interface ProjectCardProps {
	className?: string;
	thumbnail?: string;
	url?: string;
	owner?: string;
	title?: string;
	description?: string;
	metrics: {
		stars: number;
		language?: string
	};
	license?: string;
	newest: boolean;
	hotest: boolean;
}

export default function ProjectCard({
										className,
										url,
										owner,
										title,
										description,
										metrics: { stars, language },
										license,
										hotest, newest
									}: ProjectCardProps) {

	const chipData = {
		need: hotest || newest,
		text: hotest ? 'HOT' : 'NEW',
		color: hotest ? 'red' : 'blue' as 'red' | 'blue',
		icon: hotest ? <FireIcon width={'14px'}/> : <BoltIcon width={'14px'}/>,
	};


	return (
		<a
			href={url}
			className={cn('flex flex-row h-[160px] sm:h-[180px] pointer-events-auto p-4 w-full rounded-xl ' +
				'bg-white dark:bg-gray-800 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 hover:bg-slate-50 dark:ring-gray-800 dark:hover:ring-gray-700 cursor-pointer', className)}>

			<div className="flex flex-col justify-between overflow-hidden w-full">
				<div className="flex flex-col space-y-2">
					<div className="flex flex-row justify-between space-x-2 items-start">
						<h3 className="text-black/90 dark:text-white/90 items-center truncate space-x-1">
							<span className="text-black/50 dark:text-white/30">{owner}/</span>
							<span className="text-black/90 dark:text-white/90">{title}</span>
						</h3>

						{
							chipData.need && <>
								<Badge size={'xs'} color={chipData.color} type={'outlined'}
									   icon={chipData.icon} iconPosition={'right'}
									   className={'rounded-lg text-xs py-[0.15rem]'}>{chipData.text}</Badge>
							</>
						}
					</div>

					<p className="text-gray-500 grow text-sm font-normal dark:text-gray-300 line-clamp-2">{description ?? 'No description'}</p>
				</div>

				<div className="mt-2 justify-start text-black/50 dark:text-white/30">
					<div className="flex items-center justify-between">
						<span>Stars:</span>
						<span className="flex items-center space-x-1">
							<span>{stars.toLocaleString()}</span>
							<StarIcon className="w-4 h-4 text-blue-500"/>
						</span>
					</div>

					<div className="flex items-center justify-between">
						<span>Language:</span>
						<span className="flex items-center space-x-1">
							<span>{language ?? 'Unknown'}</span>
							<LanguageIcon className="w-4 h-4 text-blue-500"/>
						</span>
					</div>

					<div className="flex items-center justify-between">
						<span>License:</span>
						<span className="flex items-center space-x-1">
							<span>{license ?? 'N/A'}</span>
							<BeakerIcon className="w-4 h-4 text-blue-500"/>
						</span>
					</div>
				</div>
			</div>
		</a>
	);
}
