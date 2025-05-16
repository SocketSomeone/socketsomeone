import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export const GradientColors = {
	'orange-purple': 'from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50',
	'blue-purple': 'from-[#8fdfff]/50 via-[#9c40ff]/50 to-[#8fdfff]/50',
	'pink-purple': 'from-[#ff40aa]/50 via-[#9c40ff]/50 to-[#ff40aa]/50',
	'green-purple': 'from-[#40ff8f]/50 via-[#9c40ff]/50 to-[#40ff8f]/50',
	'red-purple': 'from-[#ff4040]/50 via-[#9c40ff]/50 to-[#ff4040]/50',
	'red-orange': 'from-[#ff4040]/50 via-[#ffaa40]/50 to-[#ff4040]/50',
};

export default function AnimatedGradientText({
												 children,
												 className,
												 color = 'orange-purple',
											 }: {
	children: ReactNode;
	className?: string;
	color?: keyof typeof GradientColors;
}) {
	return (
		<div
			className={cn(
				'group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-xs transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40',
				className,
			)}
		>
			<div
				className={cn(
					`absolute inset-0 block h-full w-full animate-gradient bg-linear-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] [mask-composite:subtract]! [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`,
					GradientColors[color],
				)}
			/>

			{children}
		</div>
	);
}
