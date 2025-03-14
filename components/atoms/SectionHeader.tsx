import { StarIcon } from '@heroicons/react/24/solid';

type Props = {
	title: string;
	subtitle?: string;
}

export default function SectionHeader({title, subtitle}: Props) {
	return (
		<>
			<h1 className="font-semibold text-center text-3xl text-gray-900 dark:text-white">{title}</h1>


			<div className="relative">
				<StarIcon
					className="absolute bottom-6 right-28 rotate-12 w-5 h-5 text-red-500"/>
				<StarIcon className="absolute bottom-0 right-24 rotate-12 w-5 h-5 text-yellow-500"/>
				<StarIcon className="absolute bottom-12 left-24 rotate-12 w-5 h-5 text-purple-500"/>
				<StarIcon className="absolute bottom-6 left-28 -rotate-12 w-5 h-5 text-blue-500"/>
			</div>

		</>
	);
}
