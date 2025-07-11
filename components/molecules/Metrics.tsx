import { BeakerIcon, BookmarkIcon, LanguageIcon, StarIcon } from '@heroicons/react/24/solid';

interface MetricsProps {
	style: string;
	stars?: number;
	forks?: number;
	issues?: number;
	language?: string;
}

export default function Metrics({ style, stars, forks, issues, language }: MetricsProps) {
	// Horizontal list with icons and text
	return (
		<ul className={`flex space-x-4 text-sm  text-blue-500 ${style}`}>
			<li className="flex items-center">
				<StarIcon className="w-5 h-5 mr-2"/>
				{stars ?? 0}
			</li>

			<li className="flex items-center">
				<BeakerIcon className="w-5 h-5 mr-2"/>
				{forks ?? 0}
			</li>

			{typeof issues === 'number' &&
				<li className="flex items-center">
					<BookmarkIcon className="w-5 h-5 mr-2"/>
					{issues ?? 0}
				</li>
			}

			{language &&
				<li className="hidden md:flex items-center">
					<LanguageIcon className="w-5 h-5 mr-2"/>
					{language.replace('TypeScript', 'TS').replace('JavaScript', 'JS') ?? 'Unknown'}
				</li>
			}
		</ul>
	);
}
