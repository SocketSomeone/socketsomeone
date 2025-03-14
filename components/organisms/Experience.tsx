import React from 'react';
import { TimelineEvent, TimelineHeader } from '../molecules/Timeline';
import { BriefcaseIcon, HeartIcon } from '@heroicons/react/24/solid';
import { BoltIcon } from '@heroicons/react/20/solid';


interface ExperienceEntry {
	startDate: string;
	endDate?: string;
}

interface Company extends ExperienceEntry {
	name: string;
	description: string;
	url?: string;
	role: string;
	skills: string[];
	responsibilities: string[];
	achievements: string[];
	icon?: React.ReactNode;
}

interface ExperienceProps {
	[key: string]: any;

	children?: React.ReactNode;
	className?: string;
}

export default function Experience({children, className, ...props}: ExperienceProps) {
	const currentDate = new Date();
	const companies: Company[] = [
		{
			name: 'Necord',
			url: 'https://necord.org',
			startDate: 'Oct. 2021',
			endDate: 'Present',
			description: 'This package uses the best of the NodeJS world under the hood. ' +
				'Discord.js is the most powerful library for creating bots and Nest.js is a progressive framework for creating well-architectured applications. ' +
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
			name: 'Octopod LLC | Yahont',
			description: 'Participated in the development of a mobile application for selling jewelry products.',
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
			name: 'Octopod LLC | Fotrum',
			description: 'Led the backend development of a competitive gaming mobile application aimed at rivaling Faceit.',
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
			icon: <BoltIcon width={48} height={48}/>,
		},
		{
			name: 'Freelance',
			description: 'Worked on various projects, including the development of websites and web applications.',
			role: 'Fullstack Developer',
			startDate: 'Jan. 2018',
			endDate: 'Present',
			skills: [],
			responsibilities: [],
			achievements: [],
			icon: <BoltIcon width={48} height={48}/>,
		}
	].sort((a, b) => {
		const aEndDate = a.endDate ? new Date(a.endDate) : currentDate;
		const bEndDate = b.endDate ? new Date(b.endDate) : currentDate;
		return bEndDate.getTime() - aEndDate.getTime();
	});

	return (
		<div className="md:container text-muted-foreground self-center w-full relative">
			{companies.map((company, index) => (
				<>
					<TimelineEvent key={index} active={!company.endDate || company.endDate.includes('Present')}
								   last={index === companies.length - 1} position={index % 2 === 0 ? 'left' : 'right'}
								   onClick={() => {
									   if (company.url) {
										   window.open(company.url, '_blank');
									   }
								   }}>
						<div className="flex flex-col gap-2">
							<div className="flex flex-row gap-2 items-center justify-between">
								<TimelineHeader>
									{company.name}
								</TimelineHeader>
								{company.icon && company.icon}
							</div>


							<span
								className="text-xs bg-neutral-100 text-neutral-700 dark:bg-gray-800 dark:text-gray-400 pb-1 rounded-lg">
								{company.role}
							</span>

							<p className="text-sm text-gray-100 dark:text-white">
								{company.description}
							</p>

							{company.responsibilities.length > 0 && (
								<>
									<p className="text-md opacity-55 font-semibold">
										Responsibilities:
									</p>
									<ol className="list-disc flex flex-col pl-4">
										{company.responsibilities.map((responsibility, index) => (
											<li key={index} className="list-disc text-sm py-0.5  ml-1 opacity-55">
												{responsibility}
											</li>
										))}
									</ol>
								</>
							)}

							{company.achievements.length > 0 && (
								<>
									<p className="text-md opacity-55 font-semibold">
										Achievements:
									</p>
									<ol className="list-disc flex flex-col pl-4">
										{company.achievements.map((achievement, index) => (
											<li key={index} className="list-disc text-sm py-0.5 ml-1 opacity-55">
												{achievement}
											</li>
										))}
									</ol>
								</>
							)}

							<div className="flex flex-wrap gap-2">
								{company.skills.map((skill, index) => (
									<span key={index}
										  className="text-xs bg-neutral-100 text-neutral-700 dark:bg-gray-800 dark:text-gray-400 px-1.5 py-0.5 rounded-lg">
										{skill}
									</span>
								))}
							</div>

							<small className="text-sm text-right font-thin opacity-55">
								{company.startDate} - {company.endDate}
							</small>
						</div>
					</TimelineEvent>
				</>
			))}
		</div>
	);
}
