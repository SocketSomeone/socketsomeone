import { PropsWithChildren } from 'react';
import { cn } from '@/utils';

export default function Page({children}: PropsWithChildren) {
	return (
		<main className={cn('flex flex-col items-center justify-center font-Poppins z-1000')}>
			{children}
		</main>
	);
}
