import Logo from '../atoms/Logo';
import Divider from '../atoms/Divider';
import Link from 'next/link';
import { cn } from '@/utils';
import { useCallback } from 'react';

const styleOfLink = 'hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300';

export default function Footer() {
	const openCookieManager = useCallback(() => {
		const plugin = window.CookieConsentWrapper?.unwrap();

		if (plugin) {
			plugin.showSettings(0);
		} else {
			console.warn('Cookie Consent plugin not found');
		}
	}, []);

	return (
		<footer
			className="px-0! mt-10 xs:px-6 py-6 text-center print:hidden md:container bg-background/60 dark:bg-gray-900/60 backdrop-blur-xs border border-b-0 sm:rounded-t-xl border-gray-200 dark:border-gray-700">
			<div className="flex flex-col items-center mb-3">
				<Link href="/">
					<Logo className="w-12 opacity-70 hover:opacity-100 hover:scale-110 duration-300"/>
				</Link>
			</div>


			<div className="flex flex-wrap justify-center gap-6 gap-y-2 text-sm font-medium mb-6 text-gray-600 dark:text-gray-300">
				<Link href="/" className={cn(styleOfLink)}>About</Link>
				<button className={cn(styleOfLink, 'cursor-pointer')}
						onClick={() => window.print()}>Resume
				</button>
				<Link href="/#projects"
					  className={cn(styleOfLink)}>Projects</Link>
				<Link href="/#contact"
					  className={cn(styleOfLink)}>Contacts</Link>
				<Link href="/privacy" className={cn(styleOfLink)}>Privacy Policy</Link>
				<Link href="/terms" className={cn(styleOfLink)}>Terms of Service</Link>
				<button type="button" data-cc="show-preferencesModal" onClick={openCookieManager}
						className={cn(styleOfLink, 'cursor-pointer')}>Manage Cookies
				</button>
			</div>

			<Divider className="mb-4"/>

			<p className="text-xs font-medium mb-2 text-muted-foreground">
				SocketSomeone • {new Date().getFullYear()}
			</p>
			<p className="text-xs font-medium text-muted-foreground">
				ИП: Филиппов А.Н. • ИНН: 391105816033 • ОГРНИП: 324390000002554
			</p>
		</footer>
	);
}
