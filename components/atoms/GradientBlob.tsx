import { cn } from '@/utils';
import type { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
	innerClassName?: string;
	gradientClassName: string;
	blurClassName?: string;
};

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
