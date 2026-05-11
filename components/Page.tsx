'use client';
import { PropsWithChildren } from 'react';

import { cn } from '@/utils';

type Props = {
	className?: string;
} & PropsWithChildren<any>

export default function Page({ children, className }: Props) {
	return (
		<>
			<main
				className={cn('print:overflow-visible!', className)}>
				{children}
			</main>
		</>
	);
}
