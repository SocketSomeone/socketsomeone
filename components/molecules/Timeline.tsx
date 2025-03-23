import React from 'react';
import { cn } from '@/lib/utils';

type TimelineEventProps = {
	active?: boolean;
	last?: boolean;
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
};

export const TimelineEvent = ({active, last, children, onClick, className}: TimelineEventProps) => {


	return (
		<div
			className={cn('relative w-full lg:w-1/2 left-1/2 -translate-x-1/2 pl-5 border-l border-b', {
				'border-none': last,

				'py-2': !last,
				'pt-2': last,
			})}
		>
			<TimelineDot active={!!active}/>

			<div
				className={cn('relative w-full  py-5 px-4 md:px-8 bg-white bg-opacity-80 dark:border-gray-700 ' +
					'dark:bg-gray-800 dark:bg-opacity-80  ring-slate-700/10 hover:bg-slate-50' +
					'dark:ring-gray-800 dark:hover:ring-gray-700 cursor-pointer', className)}
				onClick={onClick}
			>
				<div className="-translate-y-1 flex flex-col gap-2">{children}</div>
			</div>
		</div>
	);
};


export const TimelineHeader = ({children}: { children: React.ReactNode }) => {
	return <h3 className="text-lg font-semibold text-muted-foreground flex items-center">{children}</h3>;
};

export const TimelineDot = ({active, }: { active: boolean; }) => {
	const isLeft = false;

	return (
		<div
			className={cn(
				'absolute top-0 left-[-6.5px] lg:left-[-6.2px] w-4 h-4 rounded-full aspect-square',
				{
					'bg-emerald-500': active,
					'bg-neutral-700': !active,
					'w-3 h-3': !active,
					'lg:left-[-7.2px]': active && !isLeft,
				}
			)}
		>
			{active && (
				<div
					className={cn(
						'absolute top-0 left-0 rounded-full  w-4 h-4 bg-emerald-500 animate-ping aspect-square'
					)}
				/>
			)}
		</div>
	);
};
