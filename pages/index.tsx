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
import Experience from '@/components/organisms/Experience';
import Education from '@/components/organisms/Education';
import {Briefcase, LucideGraduationCap} from 'lucide-react';
import ThemeSwitcher from '@/components/molecules/ThemeSwitcher';
import LaurelIcon from '@/components/icons/LaurelIcon';


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

		const initialProjects = await get('SocketSomeone/socketsomeone/refs/heads/master/assets/projects.json');
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
				<ThemeSwitcher/>


				<div
					className="md:container px-5 pt-6 md:pt-0 mx-auto my-auto w-full">


					<div
						className="h-screen flex flex-col">
						<Intro/>

						{projects.length &&
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
						}
					</div>

				</div>

				{projects.length > 0 &&
					<div
						id={'projects'}
						className="flex flex-col justify-center items-center w-full mx-auto py-20 space-y-4 px-1">


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
							description={'I\'ve worked on a variety of projects, ranging from web development to machine learning. Here are a few of my favorites.'}/>

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
					className="my-auto w-full flex flex-col justify-center items-center mx-auto py-20 space-y-4 px-1">

					<Briefcase width={24} className="self-center text-gray-400 dark:text-gray-500"/>

					<SectionHeader head={'Experience'} title={'My professional journey'}
								   description={'A showcase of my career journey — the roles, responsibilities, and achievements that define my professional growth.'}/>

					<Experience/>
				</div>



				<div className="my-auto w-full flex flex-col justify-center items-center mx-auto py-20 space-y-4 px-1">
					<LucideGraduationCap width={24} className="self-center text-gray-400 dark:text-gray-500"/>
					<SectionHeader head={'Education'} title={'My Education Journey'}
								   description={'A showcase of my educational background — the institutions and achievements that have shaped my learning.'}/>
					<Education/>
				</div>

				<div className="mb-14 py-14 container mx-auto px-4 flex flex-col justify-center items-center">
					<SectionHeader
						className="space-y-3"
						head={'Contact'} title={'Get in Touch'}>

						<p className={'mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'}>Have
							a question or want to work together? Just shoot me a dm <a
								className="text-blue-500 hover:underline" href={'https://t.me/socketsomeone'}
								target="_blank">with a direct question on
								telegram </a> and I&#39;ll respond whenever I can. I&#39;m always open to new
							opportunities.</p>

					</SectionHeader>
				</div>


				<Technologies/>


				<Toast/>

				<StarsGrid stars={stars}/>
			</main>

			<Footer/>
		</div>
	);
}
