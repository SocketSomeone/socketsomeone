'use client';

import { MouseEvent, ReactNode, useMemo } from 'react';
import { renderSimpleIcon, SimpleIcon } from 'react-icon-cloud';
import { useTheme } from 'next-themes';
import { cn } from '@/utils';
import { TechStackItem } from './tech-stack.data';

const iconCache = new Map<string, ReactNode>();

type Props = {
	item: TechStackItem;
	icon?: SimpleIcon;
	size?: 'featured' | 'default' | 'compact';
	appearance?: 'flat' | 'chip';
	className?: string;
};

export default function TechStackIcon({
	item,
	icon,
	size = 'default',
	appearance = 'chip',
	className,
}: Props) {
	const { resolvedTheme } = useTheme();

	const iconElement = useMemo(() => {
		if (!icon) {
			return null;
		}

		const cacheKey = `${item.slug}-${resolvedTheme}-${size}`;
		const cached = iconCache.get(cacheKey);
		if (cached) {
			return cached;
		}

		const rendered = renderSimpleIcon({
			icon,
			size: size === 'featured' ? 38 : size === 'compact' ? 24 : 32,
			bgHex: resolvedTheme === 'dark' ? '#0F172A' : '#F8FAFC',
			fallbackHex: resolvedTheme === 'dark' ? '#F8FAFC' : '#0F172A',
			minContrastRatio: resolvedTheme === 'dark' ? 1.8 : 1.3,
			aProps: {
				href: undefined,
				target: undefined,
				rel: undefined,
				style: { cursor: 'default' },
				onClick: (event: MouseEvent<HTMLElement>) => event.preventDefault(),
			},
		});

		iconCache.set(cacheKey, rendered);
		return rendered;
	}, [icon, item.slug, resolvedTheme, size]);

	return (
		<div
			title={item.name}
			className={cn(
				'group flex items-center gap-3 text-left transition-colors duration-300',
				appearance === 'flat'
					? 'rounded-none bg-transparent px-0 py-0 shadow-none'
					: 'rounded-2xl border border-white/45 bg-white/65 px-3 py-2.5 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.55)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_16px_44px_-28px_rgba(0,0,0,0.75)]',
				appearance === 'chip' && size === 'featured' && 'px-4 py-3 sm:px-5 sm:py-4',
				appearance === 'chip' && size === 'default' && 'px-3.5 py-3',
				className,
			)}
		>
			<div
				className={cn(
					'flex shrink-0 items-center justify-center transition-all duration-300',
					appearance === 'flat'
						? 'rounded-xl border border-slate-300/80 bg-white/55 ring-1 ring-black/4 group-hover:bg-white/75 dark:border-white/12 dark:bg-white/[0.035] dark:ring-white/8 dark:group-hover:bg-white/[0.06]'
						: 'rounded-xl bg-slate-950/[0.04] ring-1 ring-black/5 dark:bg-white/[0.06] dark:ring-white/10',
					{
						'h-12 w-12': size === 'featured',
						'h-11 w-11': size === 'default',
						'h-9 w-9': size === 'compact',
					},
				)}
			>
				{iconElement ?? (
					<span
						className={cn('font-semibold text-foreground/80', {
							'text-base': size === 'featured',
							'text-sm': size === 'default',
							'text-xs': size === 'compact',
						})}
					>
						{item.name.slice(0, 2).toUpperCase()}
					</span>
				)}
			</div>

			<div className="min-w-0">
				<div
					className={cn('font-medium text-foreground transition-colors duration-300 group-hover:text-foreground/90', {
						'text-base leading-snug sm:text-lg': size === 'featured',
						'text-sm sm:text-base': size === 'default',
						'truncate text-xs sm:text-sm': size === 'compact',
					})}
				>
					{item.name}
				</div>
			</div>
		</div>
	);
}
