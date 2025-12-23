'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { cn } from '@/utils';
import { IoIosContrast } from 'react-icons/io';
import { useMounted } from '@/hooks/useMounted';

interface ThemeSwitcherProps {
	className?: string;
}

export default function ThemeSwitcher({ className }: ThemeSwitcherProps) {
	const { theme, resolvedTheme, setTheme } = useTheme();
	const mounted = useMounted();

	if (!mounted) return null;

	const currentTheme = theme ?? 'system';

	const nextTheme = currentTheme === 'light'
		? 'dark'
		: currentTheme === 'dark'
			? 'system'
			: 'light';

	const handleThemeSwitch = () => {
		setTheme(nextTheme);
	};

	const renderIcon = () => {
		switch (currentTheme) {
			case 'light':
				return <MoonIcon className="w-6 h-6 text-black"/>;
			case 'dark':
				return <SunIcon className="w-6 h-6 text-yellow-400"/>;
			case 'system':
				return <IoIosContrast
					className={cn('w-6 h-6 text-black dark:text-white')}/>;
		}

		return null;
	};

	return (
		<button
			className={cn(
				'flex items-center justify-center select-none cursor-pointer md:mr-0!',
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
