"use client";

import { useMemo, useState } from "react";
import Placeholder from "../../molecules/Placeholder";
import { cn } from "@/utils";
import ProjectCard from "../../molecules/Card/ProjectCard";

const INITIAL_VISIBLE_PROJECTS = 6;
const LOAD_MORE_STEP = 6;

type ProjectOwner = {
	login: string;
	avatar_url: string;
};

type ProjectLicense = {
	spdx_id?: string | null;
} | null;

type Project = {
	id: number;
	name: string;
	description: string | null;
	language: string | null;
	stargazers_count: number;
	updated_at: string;
	created_at: string;
	html_url: string | null;
	homepage: string | null;
	license: ProjectLicense;
	owner: ProjectOwner;
};

type SortOption = "updated" | "stars" | "name";

export interface GridProjectsProps {
	projects: Project[];
}

function getLanguageLabel(language: string | null): string {
	return language?.trim() || "Unknown";
}

function matchesSearch(project: Project, query: string): boolean {
	const normalizedQuery = query.trim().toLowerCase();

	if (!normalizedQuery) {
		return true;
	}

	return [`${project.owner.login}/${project.name}`, project.description ?? ""].some((value) =>
		value.toLowerCase().includes(normalizedQuery),
	);
}

function sortProjects(projects: Project[], sortBy: SortOption): Project[] {
	const sortedProjects = [...projects];

	sortedProjects.sort((left, right) => {
		if (sortBy === "stars") {
			return right.stargazers_count - left.stargazers_count;
		}

		if (sortBy === "name") {
			return left.name.localeCompare(right.name);
		}

		return new Date(right.updated_at).getTime() - new Date(left.updated_at).getTime();
	});

	return sortedProjects;
}

function getLanguageOptions(projects: Project[]): string[] {
	return Array.from(new Set(projects.map((project) => getLanguageLabel(project.language)))).sort((a, b) =>
		a.localeCompare(b),
	);
}

export default function GridProjects({ projects }: GridProjectsProps) {
	const [query, setQuery] = useState("");
	const [selectedLanguage, setSelectedLanguage] = useState("All");
	const [sortBy, setSortBy] = useState<SortOption>("stars");
	const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_PROJECTS);

	const handleQueryChange = (value: string) => {
		setQuery(value);
		setVisibleCount(INITIAL_VISIBLE_PROJECTS);
	};

	const handleLanguageChange = (value: string) => {
		setSelectedLanguage(value);
		setVisibleCount(INITIAL_VISIBLE_PROJECTS);
	};

	const handleSortChange = (value: SortOption) => {
		setSortBy(value);
		setVisibleCount(INITIAL_VISIBLE_PROJECTS);
	};

	const mostPopularProjects = useMemo(
		() =>
			projects
				.filter((project) => project.stargazers_count > 100)
				.sort((a, b) => b.stargazers_count - a.stargazers_count)
				.slice(0, 5)
				.map((project) => project.id),
		[projects],
	);

	const sixMonthsAgo = useMemo(() => {
		const date = new Date();
		date.setMonth(date.getMonth() - 6);
		return date;
	}, []);

	const languageOptions = useMemo(() => getLanguageOptions(projects), [projects]);

	const filteredProjects = useMemo(() => {
		return projects.filter((project) => {
			const matchesLanguage =
				selectedLanguage === "All" || getLanguageLabel(project.language) === selectedLanguage;

			return matchesLanguage && matchesSearch(project, query);
		});
	}, [projects, query, selectedLanguage]);

	const sortedProjects = useMemo(() => sortProjects(filteredProjects, sortBy), [filteredProjects, sortBy]);
	const visibleProjects = useMemo(() => sortedProjects.slice(0, visibleCount), [sortedProjects, visibleCount]);
	const hasMoreProjects = visibleProjects.length < sortedProjects.length;

	if (projects.length === 0) {
		return (
			<Placeholder
				className={"w-full h-[400px]"}
				image="gifs/duck-haha-classic.gif"
				header={"No projects found"}
				description={
					"It seems like there are no projects to display at the moment. Please check back later or explore my other work on GitHub."
				}
			/>
		);
	}

	return (
		<div className="w-full space-y-6">
			<div className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm shadow-black/5 dark:border-gray-800 dark:bg-gray-900/60">
				<div className="flex flex-col gap-3 lg:flex-row lg:items-center">
					<label className="flex min-w-0 flex-1 flex-col gap-2">
						<span className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
							Search
						</span>
						<input
							type="search"
							value={query}
							onChange={(event) => handleQueryChange(event.target.value)}
							placeholder="Find a project"
							className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm text-black outline-hidden transition-colors placeholder:text-black/35 focus:border-blue-500 dark:border-white/12 dark:bg-white/6 dark:text-white dark:placeholder:text-white/30"
						/>
					</label>

					<label className="flex flex-col gap-2 lg:w-52">
						<span className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
							Language
						</span>
						<select
							value={selectedLanguage}
							onChange={(event) => handleLanguageChange(event.target.value)}
							className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm text-black outline-hidden transition-colors focus:border-blue-500 dark:border-white/12 dark:bg-white/6 dark:text-white"
						>
							<option value="All">All</option>
							{languageOptions.map((language) => (
								<option key={language} value={language}>
									{language}
								</option>
							))}
						</select>
					</label>

					<label className="flex flex-col gap-2 lg:w-52">
						<span className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
							Sort
						</span>
						<select
							value={sortBy}
							onChange={(event) => handleSortChange(event.target.value as SortOption)}
							className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm text-black outline-hidden transition-colors focus:border-blue-500 dark:border-white/12 dark:bg-white/6 dark:text-white"
						>
							<option value="stars">Most stars</option>
							<option value="updated">Recently updated</option>
							<option value="name">Name A-Z</option>
						</select>
					</label>
				</div>

				<p className="text-sm text-black/55 dark:text-white/50">
					Showing {visibleProjects.length} of {sortedProjects.length} matching projects
				</p>
			</div>

			{sortedProjects.length === 0 ? (
				<Placeholder
					className={"w-full h-[280px]"}
					image="/gifs/duck-haha-classic.gif"
					header={"No matching projects"}
					description={"Try changing the search query, selected language, or sorting mode."}
				/>
			) : (
				<>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{visibleProjects.map((project) => (
							<ProjectCard
								key={project.id}
								className={cn("w-full")}
								url={project.html_url || project.homepage || undefined}
								owner={project.owner.login}
								thumbnail={
									project.owner.login !== "SocketSomeone"
										? project.owner.avatar_url
										: "icons/github_gradient.svg"
								}
								title={project.name}
								description={project.description ?? undefined}
								metrics={{
									stars: project.stargazers_count,
									language: project.language ?? undefined,
								}}
								license={project.license?.spdx_id ?? undefined}
								newest={new Date(project.created_at) > sixMonthsAgo}
								hotest={mostPopularProjects.includes(project.id)}
							/>
						))}
					</div>

					{hasMoreProjects ? (
						<div className="flex justify-center">
							<button
								type="button"
								onClick={() => setVisibleCount((currentCount) => currentCount + LOAD_MORE_STEP)}
								className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-medium text-black transition-colors hover:bg-slate-50 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
							>
								Load more
							</button>
						</div>
					) : null}
				</>
			)}
		</div>
	);
}
