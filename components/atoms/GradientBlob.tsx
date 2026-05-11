import type { HTMLAttributes } from 'react';

import { cn } from '@/utils';

type Props = {
	innerClassName?: string;
	gradientClassName: string;
	blurClassName?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function GradientBlob({
	className,
	innerClassName,
	gradientClassName,
	blurClassName = 'blur-3xl',
	...rest
}: Props) {
	return (
		<div
			aria-hidden="true"
			{...rest}
			className={cn('pointer-events-none absolute -z-10', className)}
		>
			<div
				className={cn(
					'rounded-full',
					gradientClassName,
					blurClassName,
					innerClassName
				)}
			/>
		</div>
	);
}
