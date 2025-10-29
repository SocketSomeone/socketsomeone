'use client';
import { useCallback } from 'react';
import { cn } from '@/utils';
import { DownloadIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from "next-intl";

type Props = {
	className?: string;
}

export default function CVDownloader({ className }: Props) {
	const router = useRouter();
	const pathname = usePathname();
	const t = useTranslations('navigation')
	const openPrintMode = useCallback(async () => {
		if (pathname === '/') {
			window.print();
		} else {
			router.push('/');

			setTimeout(() => window.print(), 1000);
		}
	}, [pathname, router]);

	return (
		<button
			className={cn('print:hidden space-x-1 flex items-center justify-center px-4 h-6 rounded-xl bg-white/60 dark:bg-gray-800/60 ring-1 ring-slate-600/10 dark:ring-slate-300/10 hover:bg-slate-100 dark:hover:bg-gray-700/60 select-none cursor-pointer duration-200', className)}
			onClick={openPrintMode}
			aria-label="Download CV"
		>
			<DownloadIcon width={14}/>

			<span
				className={cn(
					`truncate text-sm inline animate-gradient text-foreground`,
				)}
			>
				  {t('downloadCv')}
				</span>
		</button>
	);
}
