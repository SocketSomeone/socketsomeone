'use client';
import './styles.module.css';

import React from 'react';
import Badge from '@/components/atoms/Badge';
import SectionHeader from '@/components/atoms/SectionHeader';
import { TimelineEvent, TimelineHeader, TimelinePeriod, TimelineSectionList } from '@/components/molecules/Timeline';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

import { cn } from '@/utils';
import { ExternalLinkIcon, LucideGraduationCap } from 'lucide-react';
import { ExperienceEntry, ImageOrIcon, useExperienceEntries } from './data';

type Props = {
	name?: string;
	title: string;
	subtitle?: string;
}

export default function Experience({name, title, subtitle}: Props) {
	const experienceEntries = useExperienceEntries();

	return (
		<div
			id={'experience'}
			className="my-auto w-full flex flex-col justify-center items-center mx-auto py-20 space-y-4 px-1 print:block print:py-8 print:mb-0 print:space-y-2">

			<LucideGraduationCap width={24} className="self-center text-gray-400 dark:text-gray-500 print:hidden"/>

			<SectionHeader head={name} title={title}
						   description={subtitle}/>

			<div className="md:container text-muted-foreground relative flex flex-col items-center print:pt-0 print:px-0">
				{experienceEntries.map((entry, entryIndex) => (
					<ExperienceItem
						key={`timeline-${entryIndex}`}
						entry={entry}
						isLast={entryIndex === experienceEntries.length - 1}
					/>
				))}
			</div>
		</div>
	);
}


function ExperienceItem({ entry, isLast }: {
	entry: ExperienceEntry,
	isLast?: boolean
}) {

	return (
		<TimelineEvent
			active={!entry.endDate || entry.endDate.includes('Present')}
			last={isLast}
			className="transition duration-400 ease-in-out"
		>
			<div className="flex flex-col">
				<ExperienceCard entry={entry}/>

				<ExperienceExpandableBody entry={entry}/>

				{entry.skills.length > 0 &&
					<ExperienceSkills skills={entry.skills}/>
				}
			</div>
		</TimelineEvent>
	);
}

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
	const hasUrl = Boolean(entry.url);

	return (
		<div className="flex flex-row items-center text-blue-500 print:break-inside-avoid">
			{entry.icon && (
				<div className={cn(
					'flex justify-center items-center w-12 h-12'
				)}>
					{ImageOrIcon(
						(entry.icon?.url || ''),
						(entry.icon?.fallback || entry.icon?.url)
					)}
				</div>
			)}

			<div className="flex flex-col-reverse sm:flex-row items-start justify-between w-full print:break-inside-avoid">
				<TimelineHeader>
					<div
						className="flex-col ml-4 inline-flex font-semibold leading-none text-xs sm:text-sm">
						<h3 className="flex items-center text-foreground">
							<div
								className="inline-flex items-center text-lg print:text-base leading-tight group/link focus-visible:text-blue-500"
								aria-label="{position} - {entry}"
							>
								<span>{entry.role}<span> @ </span><a
									className={cn({
										'text-blue-500': hasUrl
									})}
									href={entry.url}
								>{entry.name}
										</a>
										<ExternalLinkIcon
											className={cn('w-4 md:w-4 ml-1 mb-1 text-blue-500 inline-block', {
												'hidden': !hasUrl
											})}
										/>
								</span>
							</div>
						</h3>
						<span className="text-xs text-skin-muted">{entry.location}</span>
					</div>
				</TimelineHeader>

				<TimelinePeriod className={'ml-4 md:ml-0'} startDate={entry.startDate} endDate={entry.endDate ?? 'Present'}/>
			</div>
		</div>
	);
}

function ExperienceExpandableBody({ entry }: { entry: ExperienceEntry }) {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const canBeExpanded = Boolean(entry.responsibilities.length ||
		entry.achievements.length);

	return (
		<>
			<div className={cn(
				'overflow-hidden relative'
			)}>
				<p className="text-sm text-gray-800 dark:text-white mt-4">
					{entry.description}
				</p>

				{canBeExpanded && (
					<div
						className={cn(
							'overflow-hidden transition-all duration-300 ease-in-out max-sm:!h-auto md:after:from-background',
							'dark:md:after:from-gray-900 dark:md:after:to-gray-900/0 md:after:w-full md:after:h-12 md:after:absolute md:after:bg-gradient-to-t md:after:left-0  md:after:bottom-0 md:after:content-[\'\']',
							'md:after:transition-all duration-200 ease-in-out',
							isExpanded ? 'max-h-[1000px] md:after:h-0' : 'max-h-[90px] print:max-h-[1000px] md:after:h-12',
						)}
					>
						<TimelineSectionList name={'Responsibilities'} items={entry.responsibilities}/>

						<TimelineSectionList name={'Achievements'} items={entry.achievements}/>
					</div>
				)}
			</div>

			<button className="flex flex-row items-center mt-2 print:hidden"
					onClick={() => {
						setIsExpanded(!isExpanded);
					}}
					aria-label={isExpanded ? 'Show less' : 'Show more'}
			>
				{canBeExpanded && (
					<>
							<span
								className={cn('text-xs  font-semibold cursor-pointer underline')}>
							Show {isExpanded ? 'less' : 'more'}
							</span>

						<ChevronDownIcon className={
							cn('w-4 h-4 ml-1 cursor-pointer', {
								'rotate-180': isExpanded
							})
						}/>
					</>
				)}
			</button>
		</>
	);
}

function ExperienceSkills({ skills }: { skills: string[] }) {
	return (
		<div className="flex flex-wrap gap-2 mt-3 print:break-inside-avoid">
			{skills.map((skill, index) => (
				<Badge key={`skill-${index}`}
					   type={'flat'}
					   color={'blue'}
					   className={' border-white font-normal rounded-md'}>
					{skill}
				</Badge>
			))}
		</div>
	);
}
