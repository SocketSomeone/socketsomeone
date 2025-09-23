'use client';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { cn } from '@/utils';

type Props = {
	targetIds: string[];
	className?: string;
}

export default function ScrollDownButton({ targetIds, className }: Props) {
	return (
		<ChevronDownIcon
			className={cn('cursor-pointer text-gray-500 dark:text-gray-300', className)}
			onClick={() => {
				const nextId = targetIds[targetIds.findIndex(id => id === window.location.hash.slice(1)) + 1] || targetIds[0];
				const element = document.getElementById(nextId);

				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
					history.replaceState(null, '', `#${nextId}`);
				}
			}}
		/>
	);
}
