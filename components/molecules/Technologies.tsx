'use client';
import React, { JSX, useEffect, useMemo, useState } from 'react';
import { fetchSimpleIcons, renderSimpleIcon, SimpleIcon, } from 'react-icon-cloud';
import { useTheme } from 'next-themes';

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

const iconCache = new Map<string, JSX.Element>();

const getRandomInt = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
	const cacheKey = `${icon.slug}-${theme}`;

	if (iconCache.has(cacheKey)) {
		return iconCache.get(cacheKey);
	}

	const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
	const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';
	const minContrastRatio = theme === 'dark' ? 2 : 1.2;

	const rendered = renderSimpleIcon({
		icon,
		bgHex,
		fallbackHex,
		minContrastRatio,
		size: 42,
		aProps: {
			href: undefined,
			target: undefined,
			rel: undefined,
			onClick: (e: any) => e.preventDefault(),
		},
	});

	iconCache.set(cacheKey, rendered);
	return rendered;
};

function Technologies() {
	const [data, setData] = useState<IconData | null>(null);
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		const iconSlugs = [
			'nestjs',
			'javascript',
			'typescript',
			'docker',
			'githubactions',
			'kubernetes',
			'python',
			'sharp',
			'cplusplus',
			'react',
			'tailwindcss',
			'postgresql',
			'redis',
			'rabbitmq',
			'nginx'
		];

		fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
	}, []);

	const iconPositions = useMemo(() => {
		if (!data) return [];

		type IconTiming = { left: number; start: number; end: number };
		const usedPositions: IconTiming[] = [];

		const isOverlapping = (left: number, start: number, end: number) => {
			return usedPositions.some(pos =>
				Math.abs(pos.left - left) < 8 &&
				!(end <= pos.start || start >= pos.end)
			);
		};

		const getNonOverlappingLeft = (start: number, end: number) => {
			let left: number;
			let attempts = 0;
			do {
				left = getRandomInt(5, 95);
				attempts++;
				if (attempts > 30) break;
			} while (isOverlapping(left, start, end));
			usedPositions.push({ left, start, end });
			return `${left}%`;
		};

		return Object.values(data.simpleIcons).map((icon) => {
			const delaySec = Math.random() * 10;
			const durationSec = getRandomInt(15, 30);
			const start = delaySec;
			const end = delaySec + durationSec;
			const left = getNonOverlappingLeft(start, end);
			const size = getRandomInt(30, 70);
			const [width, height] = [size, size];

			return {
				icon,
				left,
				start,
				end,
				delay: `${delaySec}s`,
				duration: `${durationSec}s`,
				width,
				height,
			};
		});
	}, [data]);

	const renderedIcons = useMemo(() => {
		if (!data) return [];

		return iconPositions.map(({ icon, left, delay, duration, width, height }) => ({
			element: renderCustomIcon(icon, resolvedTheme || 'light'),
			style: {
				position: 'absolute',
				bottom: '-100px',
				left,
				width,
				height,
				animationDelay: delay,
				animationDuration: duration,
			},
		}));
	}, [data, iconPositions, resolvedTheme]);

	return (
		<ul className="-z-1 hidden sm:flex print:hidden absolute bottom-0 w-full h-[100vh] overflow-hidden">
			{renderedIcons.map((icon, index) => (
				<li
					key={`technology-${index}`}
					className={`absolute block list-none object-contain animate-float duration-[${index * 250}]`}
					style={icon.style as any}
				>
					{icon.element}
				</li>
			))}
		</ul>
	);
}

export default React.memo(Technologies);
