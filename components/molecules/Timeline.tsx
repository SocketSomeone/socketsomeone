import React from 'react';
import { cn } from '@/lib/utils';

type TimelineEventProps = {
	active?: boolean;
	last?: boolean;
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
};

export const TimelineEvent = ({ active, last, children, onClick, className }: TimelineEventProps) => {
	return (
		<div
			className={cn('relative w-full lg:w-1/2 border-b print:pb-0 before:-ml-6 before:w-px before:bg-border before:h-full before:mt-2 print:before:hidden before:absolute print:w-full! print:before:ml-0', {
				'border-none': last,
				'py-2': !last,
				'pt-2': last,
			})}
		>
			<TimelineDot active={!!active}/>

			<div
				className={cn('relative w-full py-5 px-4 print:py-2', className)}
				onClick={onClick}
			>
				<div className="-translate-y-1 flex flex-col gap-2">{children}</div>
			</div>
		</div>
	);
};


export const TimelineHeader = ({ children }: { children: React.ReactNode }) => {
	return <h3 className="text-lg font-semibold text-muted-foreground flex items-center">{children}</h3>;
};

export const TimelineDot = ({ active, }: { active: boolean; }) => {
	return (
		<div
			className={cn(
				'absolute w-2 h-2 bg-neutral-700 rounded-full mt-6 -translate-x-[1.71rem] ring-8 print:hidden ring-background dark:ring-gray-900',
				{
					'bg-emerald-500': active,
				}
			)}
		>
			{active && (
				<div
					className={cn(
						'absolute w-2 h-2 rounded-full top-0 left-0 ring print:hidden bg-emerald-500 animate-ping aspect-square'
					)}
				/>
			)}
		</div>
	);
};

export const TimelinePeriod = ({ className, startDate, endDate }: { className: string, startDate: string, endDate: string }) => {
	return (
		<small className={
			cn('text-xs sm:text-sm tabular-nums text-muted-foreground text-right whitespace-nowrap', className)
		}>
			{startDate} - {endDate}
		</small>
	);
};

export function TimelineSectionList({ name, items, className }: {
	name: string;
	items: string[];
	className?: string
}) {
	if (items.length === 0) {
		return;
	}

	return (
		<>
			<p className={cn('text-md font-semibold text-foreground my-2 print:break-inside-avoid', className)}>
				{name}:
			</p>
			<ol className={`list-disc flex flex-col pl-4 mb-4 custom-list-marker`}>
				{items.map((item, index) => (
					<li key={`item-${index}`}
						className={`list-disc text-sm py-0.5 ml-1 text-muted-foreground print:break-inside-avoid`}>
						{item}
					</li>
				))}
			</ol>
		</>
	);
}
