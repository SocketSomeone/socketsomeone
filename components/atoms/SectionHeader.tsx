'use client';
import { cn } from '@/utils';
import React from 'react';

type Props = {
	className?: string;
	before?: React.ReactNode;
	head?: string | React.ReactNode;
	title: string;
	description?: string;
	children?: React.ReactNode;
	align?: 'left' | 'center' | 'right';
}

export default function SectionHeader({ className, before, head, title, description, children, align = 'center' }: Props) {
	return (
		<div
			className={cn(
				'flex flex-col space-y-2 max-w-2xl',
				'print:justify-start print:text-start print:items-start print:pb-0',
				{
					'items-center justify-center text-center': align === 'center',
					'items-start justify-start text-left': align === 'left',
					'items-end justify-end text-right': align === 'right',
				},
				className
			)}>
			{before}

			{head && <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm
			print:text-2xl print:bg-transparent print:text-foreground print:font-bold print:px-4 print:pb-0 print:mb-0
			">{head}</div>}

			<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl print:hidden">{title}</h1>

			{description && (
				<p className={'text-muted-foreground sm:text-lg/relaxed md:text-xl/relaxed print:hidden'}>
					{description}
				</p>
			)}

			{children}
		</div>
	);
}
