import React from 'react';
import { cn } from '@/lib/utils';

type TimelineEventProps = {
	active?: boolean;
	last?: boolean;
	position?: 'left' | 'right';
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
};

export const TimelineEvent = ({active, last, position, children, onClick, className}: TimelineEventProps) => {
	const isLeft = position === 'left';
	const currentPos = isLeft ? 'left' : 'right';

	return (
		<div
			className={cn('relative w-full lg:w-1/2 left-1/2 -translate-x-1/2', {
				'border-none': last,

				'pb-8': !last,
				'pl-5 border-l lg:border-l': !isLeft
			})}
		>
			<TimelineDot active={!!active} position={currentPos}/>

			<div
				className={cn("relative w-full rounded-lg border bg-white bg-opacity-20 backdrop-blur-sm py-5 px-4 md:px-10 dark:border-gray-700 " +
					"dark:bg-gray-800 dark:bg-opacity-80 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 hover:bg-slate-50" +
					"dark:ring-gray-800 dark:hover:ring-gray-700 cursor-pointer", className)}
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

export const TimelineDot = ({active, position}: { active: boolean; position: 'left' | 'right' }) => {
	const isLeft = position === 'left';

	return (
		<div
			className={cn(
				'absolute top-0 left-[-6.5px] lg:left-[-6.9px] w-4 h-4 rounded-full aspect-square',
				{
					'bg-emerald-500': active,
					'bg-neutral-700': !active,
					'w-3 h-3': !active,
					'left-[-6.9px]': !active && isLeft,
					'lg:left-[-9px]': active && !isLeft,
					// 'right-[-6.5px]': !active && !isLeft,
					'lg:left-auto lg:right-[-6.9px]': isLeft && !active,
					'lg:left-auto lg:right-[-8px]': isLeft && active
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
