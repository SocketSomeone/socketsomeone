'use client';
import Star from '@/components/atoms/Star';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { useMounted } from '@/hooks/useMounted';

type Props = {
	stars?: number;
}

type StarData = {
	x: number;
	y: number;
	radius: number;
	duration: number;
};

export default function StarsGrid({ stars }: Props) {
	const { resolvedTheme } = useTheme();
	const mounted = useMounted();
	const [starsCount, setStarsCount] = useState(0);
	const [starsData, setStarsData] = useState<StarData[]>([]);
	const [currentWidth, setCurrentWidth] = useState(0);
	const resizeTimeout = useRef<NodeJS.Timeout | null>(null);
	const isDarkMode = resolvedTheme === 'dark';

	useEffect(() => {
		if (!mounted || !isDarkMode) return;

		const updateStars = () => {
			const newCount = Math.min(Math.floor(window.innerWidth / 10), stars || 80);
			setStarsCount(newCount);
			setCurrentWidth(window.innerWidth);
			setStarsData(
				Array.from({ length: newCount }, () => ({
					x: Math.floor(Math.random() * Math.floor(document.documentElement.scrollWidth)),
					y: Math.floor(Math.random() * Math.floor(document.documentElement.scrollHeight)),
					radius: Math.random() * Math.floor(5),
					duration: Math.random() * (4 - 0.3) + 0.3,
				}))
			);
		};

		const debouncedUpdateStars = () => {
			if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
			resizeTimeout.current = setTimeout(updateStars, 200);
		};

		const handleResize = () => {
			debouncedUpdateStars();
		};

		updateStars();
		window.addEventListener('resize', handleResize);

		return () => {
			if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
			window.removeEventListener('resize', handleResize);
		};
	}, [mounted, isDarkMode, stars]);

	if (!mounted || !isDarkMode) return null;

	return (
		<div className="-z-1 print:hidden">
			<AnimatePresence>
				{starsData.map((star, index) => (
					<Star
						key={`star-${starsCount}-${index}-${currentWidth}`}
						x={star.x}
						y={star.y}
						radius={star.radius}
						duration={star.duration}
					/>
				))}
			</AnimatePresence>
		</div>
	);
}
