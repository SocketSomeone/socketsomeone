import CVDownloader from '@/components/molecules/CVDownloader';
import ThemeSwitcher from '@/components/molecules/ThemeSwitcher';
import Link from 'next/link';
import Logo from '@/components/atoms/Logo';
import { HeartIcon } from '@heroicons/react/24/solid';
import { cn } from '@/utils';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import SupportModal from '../molecules/SupportModal';

export default function Header() {
	const [supportModalOpen, setSupportModalOpen] = useState(false);
	const navLinks = [
		{ href: '/', label: 'About', isExternal: false },
		{ href: 'https://t.me/socketsomeoneshit', label: 'Blog', isExternal: true },
		{ href: '/#projects', label: 'Projects', isExternal: false },
		{ href: '/#contact', label: 'Contact', isExternal: false },
	];
	const openSupportModal = () => setSupportModalOpen(true);


	const supportButton = (
		<button className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer"
				onClick={openSupportModal}>
			Support me
		</button>
	);
	const supportDropdownButton = (
		<button
			className="text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex flex-row items-center space-x-1 text-gray-700 dark:text-gray-200"
			onClick={openSupportModal}>
			Support me <HeartIcon className="w-4 h-4 ml-1 text-red-500"/>
		</button>
	);

	return (
		<>
			<SupportModal isOpen={supportModalOpen} onClose={() => setSupportModalOpen(false)}/>

			<header
				className="fixed top-0 left-0 px-4 xl-wide:top-4 md:left-1/2 md:-translate-x-1/2 w-full xl-wide:container z-50 print:hidden bg-background/60 dark:bg-gray-900/60 backdrop-blur-xs border-b-1 xl-wide:border-1 rounded-none xl-wide:rounded-xl border-gray-200 dark:border-gray-700 flex justify-between items-center h-[64px]">
				<div className="flex items-center space-x-4">
					<Link href="/"
						  className="text-xl flex flex-row items-center space-x-2 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
						<Logo className='transition-transform sm:transform hover:-rotate-6 flex-shrink-0' width={32} height={32}/>

						<div className="flex flex-col">
							<small className="text-sm">SocketSomeone</small>
							<small className="text-xs text-muted-foreground">
								Alexey Filippov
							</small>
						</div>
					</Link>

				</div>

				<nav className="space-x-4 text-md font-medium text-gray-700 dark:text-gray-200 hidden md:flex">
					<NavLinks className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"/>
					{supportButton}
				</nav>

				<div className="flex items-center space-x-2 md:space-x-4">
					<CVDownloader className="hidden md:flex"/>
					<ThemeSwitcher/>
					<MobileDropdown/>
				</div>
			</header>
		</>

	);

	function NavLinks({ className, withDividers = false }: { className?: string, withDividers?: boolean }) {
		return (
			<>
				{navLinks.map(({ href, label, isExternal }) => {
					const dividerClass = 'border-b border-gray-200 dark:border-gray-700';

					const component = isExternal ? (
						<a href={href} className={cn(
							className, {
								[dividerClass]: withDividers,
							})
						} target="_blank" rel="noopener noreferrer" key={label}>
							{label}
						</a>
					) : (
						<Link href={href} className={cn(
							className, {
								[dividerClass]: withDividers,
							})
						} key={label}>
							{label}
						</Link>
					);

					return component;
				})}
			</>
		);
	}

	function MobileDropdown() {
		return (
			<div className="md:hidden relative">
				<details className="group">
					<summary
						className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer list-none">
						<Bars3Icon className="w-6 h-6 text-gray-800 dark:text-gray-200"/>
					</summary>
					<div
						className="absolute right-0 mt-2 w-36 bg-background dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 flex flex-col text-sm text-gray-700 dark:text-gray-200">
						<NavLinks className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"/>
						{supportDropdownButton}
					</div>
				</details>
			</div>
		);
	}
}
