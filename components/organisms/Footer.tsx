import Logo from '../atoms/Logo';
import Divider from '../atoms/Divider';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="px-4 pb-6 text-center print:hidden md:container">
			<div className="flex flex-col items-center mb-2">
				<Link href="/">
					<Logo className="w-12 mb-1 opacity-70 hover:opacity-100 duration-200"/>
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
