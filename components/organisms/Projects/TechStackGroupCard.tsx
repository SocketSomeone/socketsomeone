'use client';

import { motion } from 'motion/react';
import { SimpleIcon } from 'react-icon-cloud';
import { cn } from '@/utils';
import TechStackIcon from './TechStackIcon';
import { TechStackGroup } from './tech-stack.data';

type Props = {
	group: TechStackGroup;
	icons: Record<string, SimpleIcon>;
	className?: string;
};

export default function TechStackGroupCard({ group, icons, className }: Props) {
	return (
		<motion.section
			className={cn(
				'relative overflow-hidden rounded-[2rem] border border-black/8 bg-white/40 p-5 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.32)] backdrop-blur-xl dark:border-white/8 dark:bg-white/[0.025] dark:shadow-[0_18px_60px_-42px_rgba(0,0,0,0.52)]',
				group.variant === 'default' ? 'lg:col-span-1' : 'lg:col-span-2',
				className,
			)}
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.55, ease: 'easeOut' }}
			whileHover={{ y: -4, scale: 1.01 }}
		>
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_30%)]" />

			<div className="relative flex h-full flex-col gap-5">
				<div className="space-y-2">
					<div className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/45">
						{group.title}
					</div>
					<p className="max-w-xl text-sm leading-6 text-foreground/70">
						{group.description}
					</p>
				</div>

				<div
					className={cn(
						'grid gap-3',
						group.variant === 'compact'
							? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
							: group.variant === 'hero'
								? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
								: 'grid-cols-1 sm:grid-cols-2',
					)}
				>
					{group.items.map((item, index) => (
						<motion.div
							key={item.slug}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
						>
							<TechStackIcon
								item={item}
								icon={icons[item.slug]}
								size={
									group.variant === 'hero'
										? 'featured'
										: group.variant === 'compact'
											? 'compact'
											: 'default'
								}
								appearance={group.variant === 'compact' ? 'chip' : 'flat'}
								className="h-full"
							/>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
