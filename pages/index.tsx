'use client';

import Light from '../components/atoms/Light';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useEffect, useMemo, useState } from 'react';
import Technologies from '../components/molecules/Technologies';
import Toast from '../components/molecules/Toast';
import Intro from '@/components/organisms/Intro';
import StarsGrid from '@/components/molecules/StarsGrid';
import SectionHeader from '@/components/atoms/SectionHeader';
import Experience from '@/components/organisms/Experience/Experience';
import { LucideGraduationCap } from 'lucide-react';
import Page from '@/components/Page';
import Projects from "@/components/organisms/Projects";
import { useSearchParams } from "next/navigation";
import Contact from "@/components/organisms/Contact";
import { useFetch } from "use-http";

export default function Home() {
	const [projects, setProjects] = useState<any>([]);
	const [starsCount, setStarsCount] = useState(0);
	const stars = useMemo(() => starsCount, [projects]);
	const searchParams = useSearchParams();
	const isPrintMode = searchParams.has('view', 'cv');
	const {
		get,
		response,
		loading,
		error
	} = useFetch('https://raw.githubusercontent.com');

	useEffect(() => {
		initialProjects();
	}, [projects]);


	async function initialProjects() {
		if (projects.length !== 0) {
			return;
		}

		const initialProjects = await get('SocketSomeone/socketsomeone/refs/heads/master/assets/projects.json');
		if (response.ok) {
			setProjects(initialProjects);
		}

		setStarsCount(80);
	}

	useEffect(() => {
		if (isPrintMode) {
			window.print()
		}
	}, [isPrintMode]);

	return (
		<Page>
			<Light/>


			<div
				className="md:container px-5 pt-6 md:pt-0 mx-auto my-auto w-full">

				<div
					className="h-screen flex flex-col print:h-auto">
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
			</div>

			<Projects
				projects={projects}
				loading={loading}
				error={error}
			/>

			<div
				id={'experience'}
				className="my-auto w-full flex flex-col justify-center items-center mx-auto py-20 space-y-4 px-1 print:block print:py-4 print:mb-0 print:space-y-0">

				<LucideGraduationCap width={24} className="self-center text-gray-400 dark:text-gray-500 print:hidden"/>

				<SectionHeader head={'Experience'} title={'My professional journey'}
							   description={'A showcase of my career journey — the roles, responsibilities, and achievements that define my professional growth.'}/>

				<Experience/>
			</div>

			<Contact/>

			<Technologies/>

			<Toast/>

			<StarsGrid stars={stars}/>
		</Page>
	);
}
