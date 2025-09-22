'use client';
import { PropsWithChildren } from 'react';
import { cn } from '@/utils';
import { NextSeo } from 'next-seo';
import { NextSeoProps } from 'next-seo/lib/types';

type Props = NextSeoProps & PropsWithChildren<any> & {
	className?: string;
}

export default function Page({ children, className, ...rest }: Props) {
	return (
		<>
			{/*<NextSeo {...rest} useAppDir={true}/>*/}
			<main
				className={cn('print:overflow-visible!', className)}>
				{children}
			</main>
		</>
	);
}
