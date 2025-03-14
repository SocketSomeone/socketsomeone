import Footer from '../components/organisms/Footer';
import Light from '../components/atoms/Light';
import { ChevronDownIcon, LinkIcon } from '@heroicons/react/24/solid';
import { useEffect, useMemo, useState } from 'react';
import { useFetch } from 'use-http';
import Loader from '../components/atoms/Loader';
import Technologies from '../components/molecules/Technologies';
import Toast from '../components/molecules/Toast';
import MarqueeProjectsHorizontal from '@/components/organisms/MarqueeProjectsHorizontal';
import Intro from '@/components/organisms/Intro';
import StarsGrid from '@/components/molecules/StarsGrid';
import SectionHeader from '@/components/atoms/SectionHeader';
import { TimelineEvent, TimelineHeader } from '@/components/molecules/Timeline';
import Experience from '@/components/organisms/Experience';

export default function Home() {
	const [projects, setProjects] = useState<any>([]);
	const [starsCount, setStarsCount] = useState(0);
	const stars = useMemo(() => starsCount, [projects]);
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

		const initialProjects = await get('SocketSomeone/socketsomeone/refs/heads/main/assets/projects.json');
		if (response.ok) {
			setProjects(initialProjects);
		}

		setStarsCount(80);
	}

	return (
		<div className="p-0 px-8 relative overflow-hidden">
			<main
				className="min-h-[100vh] flex flex-col align-center justify-center font-Poppins z-1000">

				<Light/>


				<div
					className="md:container px-5 pt-6 md:pt-0 mx-auto my-auto w-full">


					<div
						className="h-screen flex flex-col">
						<Intro/>

						{projects.length > 0 ?
							<div className="justify-center mb-5">
								<ChevronDownIcon
									className="animate-bounce cursor-pointer w-8 h-8 mx-auto text-gray-500 dark:text-gray-300"
									onClick={() => {
										window.scrollTo({
											top: document.getElementById('projects')?.offsetTop,
											behavior: 'smooth'
										});
									}}
								/>
							</div>
							: <Footer/>
						}
					</div>

				</div>

				{projects.length > 0 &&
					<div
						id={'projects'}
						className="flex flex-col justify-center items-center w-full mx-auto py-20 space-y-4 px-1">

						<SectionHeader title={'My Projects'}
									   subtitle={'Here are some of my projects that I have worked on.'}/>

						<div className="flex flex-row justify-center py-16 w-full">
							{
								loading || error
									? <Loader/>
									: <MarqueeProjectsHorizontal projects={projects} rows={3}/>
							}
						</div>


						<div className="flex justify-center pb-3">
							<a href="https://github.com/SocketSomeone"
							   className="flex items-center truncate  py-3 px-4 bg-white shadow-xl shadow-black/5 ring-1 ring-slate-600/10 hover:bg-slate-50 dark:bg-gray-800 dark:ring-gray-800 rounded-xl">

								<LinkIcon className="w-4 h-4 mr-2"/>

								<span className="truncate text-lg font-regular">
                                More projects on my GitHub
                                </span>

							</a>
						</div>

					</div>
				}


				<div
					className=" pt-6 md:pt-0 my-auto w-full flex flex-col justify-center items-center mx-auto py-20 space-y-4 px-1">
					<SectionHeader title="Experience"/>

					<Experience/>
				</div>


				<Technologies/>

				{projects.length > 0 && <Footer/>}

				<Toast/>

				<StarsGrid stars={stars}/>
			</main>


		</div>
	);
}
