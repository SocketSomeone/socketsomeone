'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { fetchSimpleIcons, SimpleIcon } from 'react-icon-cloud';
import SectionHeader from '@/components/atoms/SectionHeader';
import TechStackGroupCard from './TechStackGroupCard';
import { techStackGroups, techStackSlugs } from './tech-stack.data';

type IconMap = Record<string, SimpleIcon>;

export default function ProjectsTechStackSection() {
	const [icons, setIcons] = useState<IconMap>({});

	useEffect(() => {
		let mounted = true;

		fetchSimpleIcons({ slugs: techStackSlugs }).then((iconData) => {
			if (!mounted) {
				return;
			}

			setIcons(iconData.simpleIcons as IconMap);
		});

		return () => {
			mounted = false;
		};
	}, []);

	return (
		<section className="w-full max-w-6xl">
			<SectionHeader
				title="Tools I work with"
				description="A curated view of the languages, frameworks and infrastructure tools that shape most of my day-to-day engineering work."
				align="left"
				className="mb-6 max-w-3xl"
			/>

			<motion.div
				className="relative"
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
			>
				<motion.div
					className="pointer-events-none absolute -left-20 top-2 h-56 w-56 rounded-full bg-sky-400/18 blur-3xl dark:bg-sky-400/12"
					animate={{
						x: [0, 18, -8, 0],
						y: [0, 12, -6, 0],
						scale: [1, 1.05, 0.98, 1],
					}}
					transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
				/>
				<motion.div
					className="pointer-events-none absolute -bottom-8 right-0 h-60 w-60 rounded-full bg-blue-500/12 blur-3xl dark:bg-blue-500/10"
					animate={{
						x: [0, -14, 10, 0],
						y: [0, -10, 8, 0],
						scale: [1, 0.96, 1.04, 1],
					}}
					transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
				/>

				<div className="relative grid grid-cols-1 gap-4 lg:grid-cols-3">
					{techStackGroups.map((group) => (
						<TechStackGroupCard key={group.title} group={group} icons={icons} />
					))}
				</div>
			</motion.div>
		</section>
	);
}
