import {cn} from '@/utils';
import React from 'react';

type Props = {
	className?: string;
	before?: React.ReactNode;
	head?: string | React.ReactNode;
	title: string;
	description?: string;
	children?: React.ReactNode;
}

export default function SectionHeader({className, before, head, title, description, children}: Props) {
	return (
		<div
			className={cn('flex flex-col items-center justify-center text-center space-y-2 max-w-2xl',
				'print:justify-start print:text-start print:items-start print:pb-0',
				className)}>
			{before}

			{head && <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm
			print:text-2xl print:bg-transparent print:text-foreground print:font-bold print:px-4 print:pb-0
			">{head}</div>}

			<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl print:hidden">{title}</h1>

			{description &&
				<p className={'text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed print:hidden'}>{description}</p>}

			{children}
		</div>
	);
}
