'use client';
import { motion } from 'motion/react';

type StarProps = {
	x: number;
	y: number;
	radius: number;
	duration: number;
};

export default function Star({ x, y, radius, duration }: StarProps) {
	return (
		<motion.div
			className="absolute dark:bg-white rounded-full opacity-100 hidden dark:flex animate-pulse -z-1"
			style={{
				top: y + 'px',
				left: x + 'px',
				height: radius + 'px',
				width: radius + 'px',
				animationDuration: duration + 's',
			}}
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.5 }}
			transition={{ duration: 1 }}
		/>
	);
}
