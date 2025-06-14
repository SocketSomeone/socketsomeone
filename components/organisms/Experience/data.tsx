import React, { useState } from 'react';
import { BriefcaseIcon, HeartIcon } from '@heroicons/react/24/solid';
import { BoltIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

export interface ExperienceEntry {
	name: string;
	description?: string;
	location: string;
	url?: string;
	role: string;
	skills: string[];
	responsibilities: string[];
	achievements: string[];
	icon?: React.ReactNode;
	startDate: string;
	endDate?: string;
}

const styleOfIcon = 'rounded-md bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 dark:text-blue-500/80 w-full h-full p-1';

const WorkIcon = <BriefcaseIcon width={36} className={styleOfIcon}/>;
const OpenSourceIcon = <HeartIcon width={36} className={styleOfIcon}/>;
const OrderIcon = <BoltIcon width={36} className={styleOfIcon}/>;


export function getExperienceEntries(): ExperienceEntry[] {
	const currentDate = new Date();

	return [
		{
			name: 'X5 Tech',
			url: 'https://x5.tech/',
			location: 'Russia, Moscow - Remote',
			startDate: 'Apr. 2024',
			endDate: 'Present',
			description: 'Contributed to the development of internal platform solutions by creating new services and tools aimed at improving the quality and scalability of the company’s information systems. Took part in strategic initiatives such as neural network integration, test automation, architectural transformation, and engineering culture development.',
			role: 'Senior Software Engineer',
			skills: [
				'Node.js',
				'TypeScript',
				'Nest.js',
				'Docker',
				'CI/CD',
			],
			responsibilities: [
				'Developed and maintained services powered by neural networks',
				'Conducted internal research and POCs',
				'Educated and mentored product development teams',
				'Helped shape engineering policies and best practices',
				'Built and evolved an internal testing automation platform',
				'Designed and maintained libraries and services for test automation',
				'Supported hiring and onboarding for strong cross-functional product teams',
				'Promoted and nurtured internal engineering culture'
			],
			achievements: [
				'Initiated and led the company’s open-source initiative',
				'Automated test coverage generation based on OpenAPI specifications',
				'Built an AI service that automatically generates test cases, code reviews, and business scenarios',
				'Took part in designing and executing the architectural migration to NestJS',
				'Developed a benchmarking and metrics system to evaluate neural network quality',
				'Contributed to hiring top talent into core business teams'
			],
			icon: ImageOrIcon('/images/x5.png', WorkIcon),
		},
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
			icon: ImageOrIcon('https://necord.org/img/favicon.ico', OpenSourceIcon),
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
			icon: ImageOrIcon('https://yahont.online/favicon.ico', WorkIcon),
		},
		{
			name: 'STC',
			description: 'Development of a high-load information system, including a client application, admin panel, and server-side component. The system is designed for corporate environments, providing reliable data processing and integration with external services.',
			location: 'Russia, Saint-Petersburg - Remote',
			url: 'https://stс-groups.ru',
			role: 'Software Architect',
			startDate: 'Apr. 2023',
			endDate: 'Feb. 2024',
			skills: [
				'Python',
				'Architecture',
				'UML'
			],
			responsibilities: [
				'Designed the overall platform architecture: created an infrastructure diagram and described key components',
				'Prepared technical documentation: functional diagrams for modules, API specifications, user permissions documentation',
				'Developed CI/CD processes (GitLab CI, Docker) for automated build, test, and deployment of services',
				'Collaborated with the development team and stakeholders to clarify requirements and coordinate changes'
			],
			achievements: [
				'Analyzed the existing system, identified bottlenecks, and provided recommendations to improve fault tolerance and security',
				'Performed performance profiling of key modules: reduced average response time by 40% by optimizing resource-intensive processes',
				'Designed and implemented migration from a monolithic application to a microservices architecture (using message queues and caching), improving scalability and maintainability',
				'Set up automated monitoring and metrics collection (log aggregation, load monitoring), enabling rapid response to system anomalies'
			],
			icon: ImageOrIcon('https://stc-groups.ru/favicon.ico', WorkIcon),
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
			icon: ImageOrIcon('/images/fotrum.jpg', WorkIcon),
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
			icon: ImageOrIcon('https://zencar.tech/favicon.ico', WorkIcon),
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
			icon: OrderIcon,
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
			icon: ImageOrIcon('https://nipbox.ru/favicon.ico', OrderIcon),
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
			icon: ImageOrIcon('https://upwork.com/favicon.ico', OrderIcon),
		}
	].sort((a, b) => {
		const aEndDate = a.endDate ? new Date(a.endDate) : currentDate;
		const bEndDate = b.endDate ? new Date(b.endDate) : currentDate;

		if (aEndDate.getTime() === bEndDate.getTime()) {
			return 0;
		}

		if (a.endDate === 'Present' && b.endDate !== 'Present') {
			return 1;
		}

		return bEndDate.getTime() - aEndDate.getTime();
	});
}


function ImageOrIcon(url: string, icon: React.ReactNode) {
	const [hasError, setHasError] = useState(false);

	if (url && !hasError) {
		return (
			<Image
				src={url}
				alt={`${url} Logo`}
				width={36}
				height={36}
				className="w-full h-full rounded-md object-contain"
				onError={() => setHasError(true)}
			/>
		);
	}

	return <>{icon}</>;
}
