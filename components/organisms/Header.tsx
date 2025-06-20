import CVDownloader from '@/components/molecules/CVDownloader';
import ThemeSwitcher from '@/components/molecules/ThemeSwitcher';
import Link from 'next/link';
import Logo from '@/components/atoms/Logo';

export default function Header() {
	return (
		<header
			className="fixed top-0 left-0 px-4 xl-wide:top-4 xl-wide:left-1/2 xl-wide:-translate-x-1/2 w-full md:container z-50 print:hidden bg-background/60 dark:bg-gray-900/60 backdrop-blur-xs border-b-1 xl-wide:border-1 rounded-none xl-wide:rounded-xl border-gray-200 dark:border-gray-700 flex justify-between items-center h-[64px]">
			<div className="flex items-center space-x-4">
				<Link href="/"
					  className="text-xl flex flex-row items-center space-x-2 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
					<Logo width={32} height={32}/>

					<div className="flex flex-col">
						<small className="text-sm">SocketSomeone</small>
						<small className="text-xs text-muted-foreground">
							Alexey Filippov
						</small>
					</div>
				</Link>

			</div>

			<nav className="space-x-4 text-md font-medium text-gray-700 dark:text-gray-200 hidden md:flex">
				<Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
					About
				</Link>
				<a href="https://t.me/socketsomeoneshit"
				   className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Blog</a>
				<Link href="/#projects" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
					Projects
				</Link>
				<Link href="/#contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
					Contact
				</Link>
			</nav>

			<div className="flex items-center space-x-4">
				<CVDownloader className="hidden md:flex"/>
				<ThemeSwitcher/>
			</div>
		</header>
	);
}
