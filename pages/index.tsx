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

			<Projects/>

			<Experience/>

			<Contact/>

			<Technologies/>

			<Toast/>

			<StarsGrid stars={80}/>
		</Page>
	);
}
