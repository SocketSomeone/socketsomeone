import Logo from '../atoms/Logo';
import Divider from '../atoms/Divider';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="px-4 py-6 text-center print:hidden md:container bg-background/60 dark:bg-gray-900/60 backdrop-blur-xs border border-b-0 sm:rounded-t-lg border-gray-200 dark:border-gray-700">
			<div className="flex flex-col items-center mb-3">
				<Link href="/">
					<Logo className="w-12 opacity-70 hover:opacity-100 hover:scale-110 duration-300"/>
				</Link>
			</div>


			<div className="flex flex-wrap justify-center gap-6 gap-y-2 text-sm font-medium mb-6 text-gray-600 dark:text-gray-300">
				<Link href="/">About</Link>
				<button onClick={() => window.print()}>Resume</button>
				<Link href="/#projects">Projects</Link>
				<Link href="/#contact">Contacts</Link>
				<Link href="/privacy">Privacy Policy</Link>
				<Link href="/terms">Terms of Service</Link>
			</div>

			<Divider className="mb-4"/>

			<p className="text-xs font-medium mb-2 text-gray-500 dark:text-gray-400">
				SocketSomeone • {new Date().getFullYear()}
			</p>
			<p className="text-xs font-medium text-gray-500 dark:text-gray-400">
				ИП: Филиппов А.Н. • ИНН: 391105816033 • ОГРНИП: 324390000002554
			</p>
		</footer>
	);
}
