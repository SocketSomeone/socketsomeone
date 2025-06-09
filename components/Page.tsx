import { PropsWithChildren } from 'react';
import { cn } from '@/utils';
import { NextSeo } from 'next-seo';
import { NextSeoProps } from 'next-seo/lib/types';

type Props = NextSeoProps & PropsWithChildren<any>;

export default function Page({ children, ...rest }: Props) {
	return (
		<>
			<NextSeo {...rest}/>
			<main className={cn('flex flex-col items-center flex-grow justify-center font-Poppins h-full')}>
				{children}
			</main>
		</>
	);
}
