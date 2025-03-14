import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';
import { cn } from '@/utils';

interface ThemeSwitcherProps {
	className?: string;
}

export default function ThemeSwitcher({className}: ThemeSwitcherProps) {
	const {theme, resolvedTheme, setTheme} = useTheme();

	const nextTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';

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
			default:
				return <ComputerDesktopIcon className="w-6 h-6 ${resolvedTheme === 'light' ? 'text-black' : 'text-white"/>;
		}
	};

	return (
		<button
			className={cn(
				'absolute top-4 right-4 z-50 flex items-center justify-center p-2 rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200 select-none',
				className
			)}
			onClick={handleThemeSwitch}
			aria-label="Toggle theme"
		>
			{renderIcon()}
		</button>
	);
}
