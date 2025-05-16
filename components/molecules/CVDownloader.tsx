import { useCallback } from 'react';
import { cn } from '@/utils';
import { DownloadIcon } from 'lucide-react';

export default function CVDownloader() {
	const openPrintMode = useCallback(() => window.print(), []);

	return (
		<button
			className="print:hidden absolute top-5 right-15 z-50 space-x-1 flex items-center justify-center px-4 h-6 mt-1 rounded-full bg-white dark:bg-gray-800 ring-1 ring-slate-600/10 dark:ring-slate-300/10 hover:bg-slate-50 select-none cursor-pointer"
			onClick={openPrintMode}
			aria-label="Download CV"
		>
			<DownloadIcon width={14}/>

			<span
				className={cn(
					`truncate text-sm inline animate-gradient text-foreground`,
				)}
			>
				  Download CV
				</span>
		</button>
	);
}
