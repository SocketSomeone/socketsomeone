import React from 'react';
import { cn } from '@/utils';

type ChipType = 'flat' | 'outlined';
type ChipColor = 'white' | 'blue' | 'green' | 'red' | 'yellow' | 'gray';

interface ChipProps {
	children?: React.ReactNode;
	className?: string;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	type?: ChipType;
	color?: ChipColor;
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right';

	[key: string]: any;
}

const sizeVariants = {
	xs: 'p-[0.25rem] text-[0.65rem]',
	sm: 'px-[0.375rem] py-[0.25rem] text-[0.73rem]',
	md: 'px-2 py-[0.3rem] text-xs leading-none',
	lg: 'px-2.5 py-2 text-base leading-none',
	xl: 'px-3 py-2.5 text-xl leading-none',
};

const textColorVariants = (color: ChipColor) => {
	const colors: Record<ChipColor, string> = {
		gray: 'text-gray-800 dark:text-gray-200',
		red: 'text-red-800 dark:text-red-200',
		blue: 'text-blue-800 dark:text-blue-200',
		green: 'text-green-800 dark:text-green-200',
		yellow: 'text-yellow-800 dark:text-yellow-200',
		white: 'text-white dark:text-white',
	};
	return colors[color] || 'text-black';
};

const bgColorVariants = (color: ChipColor) => {
	const colors: Record<ChipColor, string> = {
		gray: 'bg-gray-100 dark:bg-gray-900',
		red: 'bg-red-100 dark:bg-red-900',
		blue: 'bg-blue-100 dark:bg-blue-900',
		green: 'bg-green-100 dark:bg-green-900',
		yellow: 'bg-yellow-100 dark:bg-yellow-900',
		white: 'bg-white dark:bg-gray-800',
	};
	return colors[color] || 'bg-white';
};

const borderColorVariants = (type: ChipType, color: ChipColor) => {
	if (type === 'flat') {
		return 'border-none';
	}

	const colors: Record<ChipColor, string> = {
		gray: 'border-gray-500',
		red: 'border-red-500',
		blue: 'border-blue-500',
		green: 'border-green-500',
		yellow: 'border-yellow-500',
		white: 'border-white',
	};
	return `border ${colors[color] || 'border-white'}`;
};

export default function Badge({children, className, size, type, color, icon, iconPosition, ...props}: ChipProps) {
	size ??= 'md';
	type ??= 'outlined';
	color ??= 'white';
	iconPosition ??= 'left';


	return (
		<div
			className={cn('inline-flex items-center whitespace-nowrap rounded-full text-center align-middle transition-all text-sm font-bold leading-none h-fit', sizeVariants[size], textColorVariants(color), bgColorVariants(color), borderColorVariants(type, color), className)}
			{...props}
		>
			{icon && iconPosition === 'left' && <>{icon}</>}
			{children}
			{icon && iconPosition === 'right' && <>{icon}</>}
		</div>
	);
}
