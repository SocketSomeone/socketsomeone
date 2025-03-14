import React from 'react';
import { cn } from '@/lib/utils';

type TimelineEventProps = {
	active?: boolean;
	last?: boolean;
	position?: 'left' | 'right';
	children: React.ReactNode;
	onClick?: () => void;
};

export const TimelineEvent = ({active, last, position, children, onClick}: TimelineEventProps) => {
	const isLeft = position === 'left';
	const currentPos = isLeft ? 'left' : 'right';

	return (
		<div
			className={cn('relative w-full lg:w-1/2', {
				'border-none': last,

				'pb-16': !last,
				'lg:left-0 pl-5 lg:pl-0 lg:pr-10 border-l lg:border-r lg:border-l-0': isLeft,
				'lg:left-1/2 pl-5 lg:pl-10 border-l lg:border-l': !isLeft
			})}
		>
			<TimelineDot active={!!active} position={currentPos}/>

			<div
				className="relative w-full rounded-lg border bg-white py-5 px-10 dark:border-gray-700
				 dark:bg-gray-800 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 hover:bg-slate-50
				  dark:ring-gray-800 dark:hover:ring-gray-700 cursor-pointer
				  "
				onClick={onClick}
			>
				<div className="-translate-y-1 flex flex-col gap-2">{children}</div>
			</div>
		</div>
	);
};


export const TimelineHeader = ({children}: { children: React.ReactNode }) => {
	return <h3 className="text-lg font-semibold text-muted-foreground flex  gap-2 items-center">{children}</h3>;
};

export const TimelineDot = ({active, position}: { active: boolean; position: 'left' | 'right' }) => {
	const isLeft = position === 'left';

	return (
		<div
			className={cn(
				'absolute top-0 left-[-9.1px] lg:left-[-6.9px] w-4 h-4 rounded-full aspect-square',
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
