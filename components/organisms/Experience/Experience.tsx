import React from 'react';
import { TimelineEvent, TimelineHeader } from '../../molecules/Timeline';
import { BriefcaseIcon, ChevronDownIcon, HeartIcon } from '@heroicons/react/24/solid';
import { BoltIcon } from '@heroicons/react/20/solid';
import { cn } from '@/utils';
import { ExternalLinkIcon } from 'lucide-react';
import Badge from '../../atoms/Badge';

import './styles.module.css';


interface ExperienceEntry {
	startDate: string;
	endDate?: string;
}

interface Company extends ExperienceEntry {
	name: string;
	description?: string;
	location: string;
	url?: string;
	role: string;
	skills: string[];
	responsibilities: string[];
	achievements: string[];
	icon?: React.ReactNode;
}

export default function Experience() {
	const currentDate = new Date();
	const companies: Company[] = [
		{
			name: 'Necord',
			url: 'https://necord.org',
			location: 'Open Source - Remote',
			startDate: 'Oct. 2021',
			endDate: 'Present',
			description:
				'This module provides fast and easy way for creating Discord bots and deep integration with your NestJS application.',
			role: 'Maintainer',
			skills: ['Node.js', 'TypeScript', 'Discord.js', 'Nest.js'],
			responsibilities: [
				'Created a package for creating Discord bots with Nest.js',
				'Provided support for the package users',
				'Implemented new features and bug fixes'
			],
			achievements: [
				'Published a package that has been downloaded over 1000 times',
				'Gained a community of 100+ developers using the package',
				'More 400 stars on GitHub'
			],
			icon: <HeartIcon width={36}/>,
		},
		{
			name: 'Yahont',
			description: 'Participated in the development of a mobile application for selling jewelry products.',
			location: 'Russia, Kazan - Remote',
			url: 'https://yahont.online',
			role: 'Software Engineer',
			startDate: 'Feb. 2024',
			endDate: 'Jan. 2025',
			skills: ['Node.js', 'JavaScript', 'TypeScript', 'Nest.js'],
			responsibilities: [
				'Developed the Backend-for-Frontend (BFF) using Node.js',
				'Collaborated closely with backend and frontend developers',
				'Implemented automated testing for backend functionality'
			],
			achievements: [
				'Wrote a significant part of the BFF in Node.js, reducing the workload on backend developers',
				'Reduced the time needed to identify backend-related bugs'
			],
			icon: <BriefcaseIcon width={36}/>,
		},
		{
			name: 'Fotrum',
			description: 'Led the backend development of a competitive gaming mobile application aimed at rivaling Faceit.',
			location: 'Russia, Saint-Petersburg - Remote',
			url: 'https://apps.apple.com/ru/app/fotrum/id1564952971',
			role: 'Tech Lead',
			startDate: 'Dec. 2021',
			endDate: 'Apr. 2023',
			skills: [
				'Node.js',
				'TypeScript',
				'Nest.js',
				'Microservices',
				'NATS',
				'RabbitMQ',
				'Centrifugo',
				'PostgreSQL',
				'Redis',
				'Docker',
				'CI/CD',
			],
			responsibilities: [
				'Team formation and hiring process',
				'Performed regular code reviews',
				'Integrated CI/CD pipelines using GitHub Actions',
				'Managed project deployment with Docker and Kubernetes',
				'Decomposed user stories together with the Product Manager',
				'Mentored team members and provided onboarding support',
				'Estimated feature development timelines and justified them to the business'
			],
			achievements: [
				'Successfully built and onboarded a full development team',
				'Established development processes within two months, including mentorship and code review routines',
				'Modularized the application architecture by defining clear responsibility zones',
				'Started transitioning from a monolithic architecture to microservices',
				'Implemented message queues and caching mechanisms to improve performance',
				'Introduced Domain-Driven Design (DDD) and Command Query Responsibility Segregation (CQRS)',
				'Conducted a full development audit and documentation process'
			],
			icon: <BriefcaseIcon width={36}/>,
		},
		{
			name: 'ZEN.CAR',
			description: 'Contributed to the development of a service for selecting auto repair shops.',
			location: 'Russia, Innopolis - Remote',
			url: 'https://zencar.tech/',
			role: 'Software Developer',
			startDate: 'Nov. 2020',
			endDate: 'Dec. 2021',
			skills: [
				'Node.js',
				'TypeScript',
				'Nest.js',
				'Hasura',
				'PostgreSQL',
				'Redis',
				'ElasticSearch',
				'GraphQL',
				'Docker',
				'Kubernetes',
			],
			responsibilities: [
				'Developed analytics algorithms to estimate order completion time',
				'Implemented a cost calculation module for final order pricing',
				'Integrated ElasticSearch to enhance search functionality',
				'Developed a spare parts tracking system',
				'Set up CI/CD integration',
				'Deployed the application on Kubernetes',
				'Performed refactoring of the existing codebase'
			],
			achievements: [
				'Significantly contributed to feature development and functional improvements, enhancing the user experience in choosing auto repair services',
				'Designed and implemented analytics algorithms to optimize order processing times, improving service efficiency',
				'Successfully refactored the legacy codebase to improve readability, scalability, and maintainability'
			],
			icon: <BriefcaseIcon width={36}/>,
		},
		{
			name: 'Burger Club',
			description: 'Contributed to the development of a fast food delivery service.',
			location: 'Russia, Kaliningrad - Remote',
			role: 'Fullstack Developer',
			startDate: 'Aug. 2020',
			endDate: 'Nov. 2020',
			skills: [
				'Node.js',
				'Vue.js',
				'Tailwind CSS',
				'HTML',
				'Strapi'
			],
			responsibilities: [
				'Developed a new CMS database and migrated product data from 1C',
				'Built a Telegram bot for placing orders',
				'Participated in the design and architecture of the application'
			],
			achievements: [
				'Developed an adaptive web version in a short timeframe',
				'Improved skills in bot development',
				'Conducted full application profiling and resolved performance issues'
			],
			icon: <BoltIcon width={36}/>,
		},
		{
			name: 'NIPBOX',
			description: 'Worked on a full-cycle delivery service for Japanese sweets, allowing users to order randomized snack boxes via the website.',
			location: 'Remote',
			url: 'https://nipbox.ru',
			role: 'Fullstack Developer',
			startDate: 'Apr. 2019',
			endDate: 'Jul. 2020',
			skills: [
				'Node.js',
				'React.js',
				'TypeScript',
				'Nest.js',
				'SEO'
			],
			responsibilities: [
				'Designed a unique and engaging website UI',
				'Implemented core project functionality and logic',
				'Developed site layout and optimized it for SEO',
				'Integrated payment gateways for online purchases'
			],
			achievements: [
				'Created a fully functional e-commerce website from scratch',
				'Achieved over 500,000 customers in a year with high conversion rates',
				'Gained consistent organic traffic of 100+ unique visitors per day through SEO optimization'
			],
			icon: <BoltIcon width={36}/>,
		},
		{
			name: 'Freelance',
			description: 'Worked on various freelance projects, including a web application for a restaurant and a mobile application for a delivery service.',
			location: 'Worldwide - Remote',
			role: 'Fullstack Developer',
			startDate: 'Jan. 2018',
			endDate: 'Present',
			skills: [],
			responsibilities: [],
			achievements: [],
			icon: <BoltIcon width={36}/>,
		}
	].sort((a, b) => {
		const aEndDate = a.endDate ? new Date(a.endDate) : currentDate;
		const bEndDate = b.endDate ? new Date(b.endDate) : currentDate;

		if (a.endDate === 'Present') {
			if (b.endDate === 'Present') {
				return 0;
			}

			return -1;
		}

		return bEndDate.getTime() - aEndDate.getTime();
	});

	return (
		<div className="md:container text-muted-foreground self-center pt-10 w-full relative">
			{companies.map((company, companyIndex) => (
				<TimelineExperience
					key={`timeline-${companyIndex}`}
					company={company}
					companyIndex={companyIndex}
					isLast={companyIndex === companies.length - 1}
				/>
			))}
		</div>
	);
}


function TimelineExperience({company, companyIndex, isLast}: {
	company: Company,
	companyIndex: number,
	isLast?: boolean
}) {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const canBeExpanded = Boolean(company.responsibilities.length ||
		company.achievements.length);

	const hasUrl = Boolean(company.url);

	return (
		<TimelineEvent
			active={!company.endDate || company.endDate.includes('Present')}
			last={isLast}
			className="transition duration-400 ease-in-out"
			onClick={() => {
				setIsExpanded(!isExpanded);
			}}>
			<div className="flex flex-col">
				<div className="flex flex-row items-center text-blue-500">
					{company.icon && (
						<div className={cn(
							'flex justify-center items-center w-12 h-12 rounded-md bg-blue-500/10 text-blue-500',
							'dark:bg-blue-500/20 dark:text-blue-500/80',
						)}>
							{company.icon}
						</div>
					)}

					<div className="flex flex-row items-start justify-between w-full">
						<TimelineHeader>
							<div
								className="flex-col gap-1 ml-4 inline-flex font-semibold leading-none text-xs sm:text-sm">
								<h3 className="flex items-center text-foreground">
									<div
										className="inline-flex items-center text-lg print:text-base leading-tight group/link focus-visible:text-blue-500"
										aria-label="{position} - {company}">
										<span>
											{company.role}
											<span> @ </span>
											<a
												className={cn({
													'text-blue-500': hasUrl
												})}
												href={company.url}
											>{company.name}</a>

											<ExternalLinkIcon
												className={cn('w-4 md:w-4 ml-1 mb-1 text-blue-500 inline-block', {
													'hidden': !hasUrl
												})}
											/>
										</span>
									</div>

								</h3>
								<span
									className="text-xs text-skin-muted">
									{company.location}
								</span>
							</div>
						</TimelineHeader>

						<small className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
							{company.startDate} - {company.endDate}
						</small>
					</div>
				</div>

				<div className={cn(
					'overflow-hidden relative'
				)}>
					<p className="text-sm text-gray-800 dark:text-white mt-4">
						{company.description}
					</p>

					{canBeExpanded && (
						<div
							className={cn(
								'overflow-hidden transition-all duration-300 ease-in-out max-sm:!h-auto md:after:from-background',
								'dark:md:after:from-gray-900 dark:md:after:to-gray-900/0 md:after:w-full md:after:h-12 md:after:absolute md:after:bg-gradient-to-t md:after:left-0  md:after:bottom-0 md:after:content-[\'\']',
								'md:after:transition-all duration-300 duration-200 ease-in-out',
								isExpanded ? 'max-h-[1000px] md:after:h-0' : 'max-h-[90px]'
							)}
						>
							<TimelineSectionList name={'Responsibilities'} items={company.responsibilities}/>

							<TimelineSectionList name={'Achievements'} items={company.achievements}/>
						</div>
					)}
				</div>

				<button className="flex flex-row items-center mt-2">
					{canBeExpanded && (
						<>
							<span
								className={cn('text-xs  font-semibold cursor-pointer underline')}>
							Show {isExpanded ? 'less' : 'more'}
							</span>

							<ChevronDownIcon className={
								cn('w-4 h-4 ml-1', {
									'rotate-180': isExpanded
								})
							}/>
						</>
					)}
				</button>

				<div className="flex flex-wrap gap-2 mt-3">
					{company.skills.map((skill, index) => (
						<Badge key={`skill-${companyIndex}-${index}`}
							   type={'flat'}
							   color={'blue'}
							   className={' border-white font-normal rounded-md'}>
							{skill}
						</Badge>
					))}
				</div>
			</div>
		</TimelineEvent>
	);
}


function TimelineSectionList({name, items, className}: {
	name: string;
	items: string[];
	className?: string
}) {
	if (items.length === 0) {
		return;
	}

	return (
		<>
			<p className={cn('text-md font-semibold text-foreground my-2', className)}>
				{name}:
			</p>
			<ol className={`list-disc flex flex-col pl-4 mb-4 custom-list-marker`}>
				{items.map((item, index) => (
					<li key={`item-${index}`}
						className={`list-disc text-sm py-0.5 ml-1 text-muted-foreground`}>
						{item}
					</li>
				))}
			</ol>
		</>
	);
}
