'use client';

import { useTheme } from 'next-themes';
import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { cn } from '@/utils';
import { useEffect, useState } from 'react';

interface ThemeSwitcherProps {
	className?: string;
}

export default function ThemeSwitcher({className}: ThemeSwitcherProps) {
	const { theme, setTheme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	const nextTheme = theme === 'light'
		? 'dark'
		: theme === 'dark'
			? 'system'
			: 'light';

	const handleThemeSwitch = () => {
		setTheme(nextTheme);
	};

	const renderIcon = () => {
		switch (theme) {
			case 'light':
				return <MoonIcon className="w-6 h-6 text-black"/>;
			case 'dark':
				return <SunIcon className="w-6 h-6 text-yellow-400"/>;
			case 'system':
				return <ComputerDesktopIcon
					className={cn('w-6 h-6 text-black dark:text-white')}/>;
		}
	};

	return (
		<button
			className={cn(
				'flex items-center justify-center p-2 rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200 select-none cursor-pointer',
				'print:hidden',
				className
			)}
			onClick={handleThemeSwitch}
			aria-label="Toggle theme"
		>
			{renderIcon()}
		</button>
	);
}
