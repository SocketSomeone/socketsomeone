'use client';

import Light from '../components/atoms/Light';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';
import Technologies from '../components/molecules/Technologies';
import Toast from '../components/molecules/Toast';
import Intro from '@/components/organisms/Intro';
import StarsGrid from '@/components/molecules/StarsGrid';
import Experience from '@/components/organisms/Experience/Experience';
import Page from '@/components/Page';
import Projects from '@/components/organisms/Projects';
import { useSearchParams } from 'next/navigation';
import Contact from '@/components/organisms/Contact';
import { cn } from '@/utils';
import SectionHeader from '@/components/atoms/SectionHeader';
import LaurelIcon from '@/components/icons/LaurelIcon';

export default function Home() {
	const searchParams = useSearchParams();
	const isPrintMode = searchParams.has('view', 'cv');

	useEffect(() => {
		if (isPrintMode) {
			window.print();
		}
	}, [isPrintMode]);

	return (
		<Page
			title="Alexey Filippov - Software Engineer"
			description="Portfolio of Alexey Filippov, a software engineer specializing in web development, open source, and community building."
		>
			<Light/>

			<div
				className="md:container w-full h-screen flex flex-col print:h-fit px-4 pt-6 md:pt-0">
				<Intro/>

				<div className="justify-center mb-5 print:hidden">
					<ChevronDownIcon
						className="animate-bounce cursor-pointer w-8 h-8 mx-auto text-gray-500 dark:text-gray-300"
						onClick={() => {
							window.scrollTo({
								top: ['projects', 'experience'].map((id) => document.getElementById(id))
									.find(Boolean)
									?.offsetTop,
								behavior: 'smooth'
							});
						}}
					/>
				</div>
			</div>

			<div
				id={'projects'}
				className={cn('flex flex-col justify-center items-center w-full py-20 space-y-6 px-0! xl-wide:px-1 print:hidden')}>
				<SectionHeader
					before={
						<div className="flex flex-row items-center space-x-0 ">
							<LaurelIcon
								className="w-8 h-8 -scale-x-100 text-yellow-500"/>
							<div
								className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
								My Projects
							</div>

							<LaurelIcon className="w-8 h-8 text-yellow-500"/>
						</div>
					}
					title={'Check out my latest work'}
					description={'I\'ve worked on a variety of projects, ranging from web development to machine learning. Here are a few of my favorites.'}
				/>
				<Projects background={true} type="marquee"/>
			</div>


			<Experience/>

			<Contact/>

			<Technologies/>

			<Toast/>

			<StarsGrid stars={80}/>
		</Page>
	);
}
