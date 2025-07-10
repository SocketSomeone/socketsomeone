import Star from '@/components/atoms/Star';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'motion/react';

type Props = {
	stars?: number;
}

export default function StarsGrid({ stars }: Props) {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [starsCount, setStarsCount] = useState(0);
	const [currentWidth, setCurrentWidth] = useState(0);
	const resizeTimeout = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		setMounted(true);

		const updateStars = () => {
			const newCount = Math.min(Math.floor(window.innerWidth / 10), stars || 80);
			setStarsCount(newCount);
			setCurrentWidth(window.innerWidth);
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
	}, [stars]);

	if (!mounted || resolvedTheme !== 'dark') return null;

	return (
		<div className="z-[-1] print:hidden">
			<AnimatePresence>
				{Array.from({ length: starsCount }, (_, i) => (
					<Star key={`star-${starsCount}-${i}-${currentWidth}`} />
				))}
			</AnimatePresence>
		</div>
	);
}
