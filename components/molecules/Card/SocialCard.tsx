'use client';
import { SocialLink } from '../../../interfaces';
import Image from 'next/image';

export default function SocialCard({
									   href,
									   alt,
									   icon,
									   name,
									   description,
								   }: SocialLink) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="rounded-xl w-full h-[88px] overflow-x-hidden transition-colors p-4 items-center flex space-x-4 justify-between
			bg-white dark:bg-gray-800 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 hover:bg-slate-50 dark:ring-gray-800 dark:hover:ring-gray-700 cursor-pointer
			"
		>
			<div className="overflow-x-hidden flex flex-col leading-relaxed space-y-2">
				<span className="font-medium text-black dark:text-white truncate">{name}</span>
				{description && <span className="text-black/50 dark:text-white/30 text-sm">{description}</span>}
			</div>

			<div className="flex-shrink-0">
				<Image
					src={icon}
					alt={alt || name}
					className="w-9 h-9"
					width={36} height={36}
				/>
			</div>
		</a>
	);
}
