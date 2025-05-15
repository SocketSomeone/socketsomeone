'use client'

import { useEffect, useState } from "react";
import { useFetch } from "use-http";
import SectionHeader from "../atoms/SectionHeader";
import LaurelIcon from "../icons/LaurelIcon";
import Loader from "../atoms/Loader";
import MarqueeProjectsHorizontal from "./MarqueeProjectsHorizontal";
import { LinkIcon } from "@heroicons/react/24/solid";

interface ProjectsProps {
	projects: any[];
	loading: boolean;
	error: any;
}

export default function Projects({
									 projects,
	loading,
	error,
}: ProjectsProps): JSX.Element {


	if (projects.length === 0) {
		return
	}

	return (
		<div
			id={'projects'}
			className="flex flex-col justify-center items-center w-full mx-auto py-20 space-y-4 px-1 print:hidden">


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

			<a href="https://github.com/SocketSomeone"
			   className="flex items-center justify-center truncate mb-3 py-3 px-4 bg-white shadow-xl shadow-black/5 ring-1 ring-slate-600/10 hover:bg-slate-50 dark:bg-gray-800 dark:ring-gray-800 rounded-xl">

				<LinkIcon className="w-4 h-4 mr-2"/>

				<span className="truncate text-lg font-regular">
                                More projects on my GitHub
                                </span>

			</a>

		</div>
	)
}
