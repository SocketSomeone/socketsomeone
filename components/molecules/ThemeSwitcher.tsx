import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { cn } from '@/utils';

interface ThemeSwitcherProps {
	className?: string;
}

export default function ThemeSwitcher({className}: ThemeSwitcherProps) {
	const {resolvedTheme, setTheme} = useTheme();

	return (
		<button
			className={cn('absolute top-4 right-4 z-50 flex items-center justify-center p-2 rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200 select-none', className)}
			onClick={() => setTheme((prevState) => prevState === 'light' ? 'dark' : 'light')}
		>
			{resolvedTheme === 'light' ? (
				<MoonIcon className="w-6 h-6"/>
			) : (
				<SunIcon className="w-6 h-6"/>
			)}
		</button>
	);
}
