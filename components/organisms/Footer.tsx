'use client';
import Logo from '../atoms/Logo';
import Divider from '../atoms/Divider';
import { cn } from '@/utils';
import { useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from '../molecules/LanguageSwitcher';
import SocialLinks from './SocialLinks';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const styleOfLink = 'hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300';

type LinkItem =
	| { type: 'link'; href: string; label: string }
	| { type: 'button'; onClick: () => void; label: string };

type LinkColumn = {
	title: string;
	items: LinkItem[];
};

export default function Footer() {
	const t = useTranslations('navigation');
	const openCookieManager = useCallback(() => {
		const plugin = window.CookieConsentWrapper?.unwrap();

		if (plugin) {
			plugin.showSettings(0);
		} else {
			console.warn('Cookie Consent plugin not found');
		}
	}, []);

	const handlePrint = useCallback(() => {
		window.print();
	}, []);

	const linkColumns: LinkColumn[] = [
		{
			title: t('navigation_footer'),
			items: [
				{ type: 'link', href: '/', label: t('about') },
				{ type: 'button', onClick: handlePrint, label: t('resume') },
				{ type: 'link', href: '/#projects', label: t('projects') },
				{ type: 'link', href: '/#contact', label: t('contact') },
			],
		},
		{
			title: t('support_footer'),
			items: [
				{ type: 'link', href: 'https://t.me/socketsomeoneshit', label: t('blog') },
				{ type: 'link', href: 'https://crowdin.com/project/socketsomeone', label: t('translate_footer')},
			]
		},
		{
			title: t('information_footer'),
			items: [
				{ type: 'link', href: '/privacy', label: t('privacy_policy') },
				{ type: 'link', href: '/terms', label: t('terms_of_service') },
				{ type: 'button', onClick: openCookieManager, label: t('manage_cookies') },
			],
		},
		{
			title: t('partners_footer'),
			items: [
				{ type: 'link', href: 'https://www.jetbrains.com/?from=SocketSomeone', label: 'JetBrains' },
				{ type: 'link', href: 'https://crowdin.com/project/socketsomeone', label: 'Crowdin' },
			],
		}
	];

	const [openSections, setOpenSections] = useState<Record<string, boolean>>(() =>
		linkColumns.reduce((acc, column) => {
			acc[column.title] = false;
			return acc;
		}, {} as Record<string, boolean>),
	);

	const toggleSection = useCallback((title: string) => {
		setOpenSections((prev) => ({
			...prev,
			[title]: !prev[title],
		}));
	}, []);

	return (
		<footer
			className="px-0! mt-10 py-6 print:hidden md:container bg-background/60 dark:bg-gray-900/60 backdrop-blur-xs border border-b-0 sm:rounded-t-xl border-gray-200 dark:border-gray-700">
			<div className="md:container pt-6 px-2 md:px-10">
				<div className="mb-10 w-full px-4 text-sm text-gray-600 dark:text-gray-300 md:mb-12 md:max-w-6xl md:mx-auto">
					<div className="flex flex-col gap-10 md:hidden">
						<div className="flex flex-col items-start gap-6 text-left">
							<Link href="/" className="inline-flex">
								<Logo className="w-12 opacity-70 hover:opacity-100 hover:scale-110 duration-300"/>
							</Link>
							<div className="flex w-full flex-col gap-6">
								<div className="flex flex-col gap-3">
									<h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t('language_footer')}</h3>
									<LanguageSwitcher className="h-14 w-full"/>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-4 font-medium">
							{linkColumns.map((column) => {
								const isOpen = openSections[column.title];
								return (
									<div key={column.title}
										 className="rounded-lg border border-gray-200/60 bg-white/40 p-0 dark:border-gray-700/60 dark:bg-gray-900/40">
										<button
											type="button"
											onClick={() => toggleSection(column.title)}
											className="flex w-full items-center justify-between gap-4 px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground"
											aria-expanded={isOpen}
										>
											<span>{column.title}</span>
											<ChevronDownIcon
												className={cn('h-4 w-4 transition-transform duration-200', isOpen ? 'rotate-180' : 'rotate-0')}/>
										</button>
										<AnimatePresence initial={false}>
											{isOpen && (
												<motion.div
													key="content"
													initial={{ height: 0, opacity: 0 }}
													animate={{ height: 'auto', opacity: 1 }}
													exit={{ height: 0, opacity: 0 }}
													transition={{ duration: 0.25, ease: 'easeInOut' }}
													className="overflow-hidden"
												>
													<div
														className="flex flex-col gap-2 px-3 pb-4 pt-1 text-sm text-gray-600 dark:text-gray-300">
														{column.items.map((item) => {
															if (item.type === 'link') {
																return (
																	<Link key={item.label} href={item?.href} className={cn(styleOfLink)}>
																		{item.label}
																	</Link>
																);
															}

															return (
																<button
																	key={item.label}
																	type="button"
																	className={cn(styleOfLink, 'cursor-pointer text-left')}
																	onClick={item.onClick}
																>
																	{item.label}
																</button>
															);
														})}
													</div>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								);
							})}
						</div>
						<div className="flex flex-col gap-3">
							<h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t('social_footer')}</h3>
							<SocialLinks className="justify-start!" type="plain"/>
						</div>
					</div>

					<div className="hidden md:grid md:grid-cols-5 md:items-start md:gap-16">
						<div className="col-span-2 flex flex-col items-start gap-6 text-left">
							<Link href="/" className="inline-flex">
								<Logo className="w-12 opacity-70 hover:opacity-100 hover:scale-110 duration-300"/>
							</Link>
							<div className="flex w-full flex-col gap-6">
								<div className="flex flex-col gap-3">
									<h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t('language_footer')}</h3>
									<LanguageSwitcher className="h-14 w-full"/>
								</div>
								<div className="flex flex-col gap-3">
									<h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t('social_footer')}</h3>
									<SocialLinks className="justify-start!" type="plain"/>
								</div>
							</div>
						</div>
						<div className="col-span-3 grid grid-cols-1 gap-10 font-medium text-gray-600 dark:text-gray-300 md:grid-cols-2 lg:grid-cols-3 ">
							{linkColumns.map((column) => (
								<div key={column.title} className="flex flex-col gap-3">
									<h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{column.title}</h3>
									<div className="flex flex-col gap-2">
										{column.items.map((item) => {
											if (item.type === 'link') {
												return (
													<Link key={item.label} href={item.href} className={cn(styleOfLink)}>
														{item.label}
													</Link>
												);
											}

											return (
												<button
													key={item.label}
													type="button"
													className={cn(styleOfLink, 'cursor-pointer text-left')}
													onClick={item.onClick}
												>
													{item.label}
												</button>
											);
										})}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<Divider className="mb-4"/>

			<div className="flex flex-col text-center items-center">
				<p className="text-xs font-medium mb-2 text-muted-foreground">
					ИП: Филиппов А.Н. • ИНН: 391105816033 • ОГРНИП: 324390000002554
				</p>

				<p className="text-xs font-medium mb-2 text-muted-foreground">
					© 2020 - {new Date().getFullYear()} • Built by Alexey Filippov •{' '}
					<a
						href="https://github.com/SocketSomeone/socketsomeone"
						className="border-b border-transparent hover:border-black/10 dark:hover:border-white/10 transition-colors"
					>
						View source on GitHub
					</a>
				</p>
			</div>
		</footer>
	);
}
