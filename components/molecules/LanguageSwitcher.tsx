'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'use-intl';
import { IS_DEV } from '@/utils/config';

type LocaleOption = {
	value: string;
	label: string;
};

const BASE_LOCALES: LocaleOption[] = [
	{ value: 'en', label: 'English'  },
	{ value: 'ru', label: 'Русский' },
];

const CROWDIN_LOCALE: LocaleOption = {
	value: 'ach',
	label: 'Translate with Crowdin',
};

const CROWDIN_LINK = 'https://crowdin.com/project/socketsomeone';
const HOVER_COLOR = 'rgba(14, 165, 233, 0.08)';
const CHEVRON_SYMBOL = '\u25BC';

export default function LanguageSwitcher() {
	const router = useRouter();
	const locale = useLocale();
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const localeOptions = IS_DEV ? [...BASE_LOCALES, CROWDIN_LOCALE] : BASE_LOCALES;
	const activeLocale = localeOptions.find((option) => option.value === locale) ?? localeOptions[0];

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (!containerRef.current?.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleSelect = (value: string) => {
		if (value !== locale) {
			router.replace(pathname, { locale: value });
		}

		setIsOpen(false);
	};

	return (
		<div ref={containerRef} className="relative text-sm">
			<motion.button
				type="button"
				onClick={() => setIsOpen((prev) => !prev)}
				whileTap={{ scale: 0.97 }}
				aria-haspopup="listbox"
				aria-expanded={isOpen}
				className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 font-medium text-slate-700 backdrop-blur transition hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800/80 dark:focus-visible:ring-offset-slate-900"
			>
				<span>{activeLocale.label}</span>
				<motion.span
					className="ml-auto text-xs text-slate-500 dark:text-slate-400"
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.2, ease: 'easeOut' }}
					aria-hidden="true"
				>
					{CHEVRON_SYMBOL}
				</motion.span>
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						key="language-menu"
						initial={{ opacity: 0, y: -8, scale: 0.96 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -8, scale: 0.96 }}
						transition={{ type: 'spring', stiffness: 260, damping: 20 }}
						className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-2xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/90"
					>
						<ul role="listbox" aria-activedescendant={activeLocale.value}>
							{localeOptions.map((option) => {
								const isActive = option.value === locale;

								return (
									<motion.li
										key={option.value}
										layout
										initial={false}
										whileHover={{ backgroundColor: HOVER_COLOR }}
										className={`border-b border-slate-100/70 last:border-none dark:border-slate-800/70 ${
											isActive ? 'bg-sky-500/10 dark:bg-sky-500/20' : ''
										}`}
									>
										<button
											type="button"
											role="option"
											aria-selected={isActive}
											onClick={() => handleSelect(option.value)}
											className="flex w-full items-center gap-3 px-4 py-3 text-left text-slate-700 transition focus:outline-none dark:text-slate-200"
										>
											<span className="flex-1">{option.label}</span>
											{isActive && (
												<motion.span
													layout
													initial={{ opacity: 0, scale: 0.6 }}
													animate={{ opacity: 1, scale: 1 }}
													className="text-xs font-semibold uppercase text-sky-600 dark:text-sky-400"
												>
													Active
												</motion.span>
											)}
										</button>
									</motion.li>
								);
							})}
						</ul>

						<div
							className="border-t border-slate-100/70 bg-slate-50/70 px-4 py-2 text-xs text-slate-500 dark:border-slate-800/70 dark:bg-slate-900/80 dark:text-slate-400">
							<a
								href={CROWDIN_LINK}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 font-medium text-sky-600 transition hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
							>
								<span>Contribute on Crowdin</span>
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
