import SocialLinksGroup from "../components/molecules/SocialLinksGroup";
import Avatar from "../components/atoms/Avatar";
import Footer from "../components/organisms/Footer";
import Banner from "../components/organisms/Banner";
import Star from "../components/atoms/Star";
import Light from "../components/atoms/Light";
import { ChevronDownIcon, LinkIcon, StarIcon } from "@heroicons/react/24/solid";
import ProjectCard from "../components/molecules/ProjectCard";
import { useEffect, useMemo, useState } from "react";
import { useFetch } from "use-http";
import Loader from "../components/atoms/Loader";

function format(num: number) {
    return Math.abs(num) > 999
        ? (Math.sign(num) * (Math.abs(num) / 1000)).toFixed(1) + "k+"
        : Math.sign(num) * Math.abs(num)
}

export default function Home() {
    const [projects, setProjects] = useState<any>([]);
    const [starsCount, setStarsCount] = useState(0)
    const stars = useMemo(() => starsCount, [projects])
    const {
        get,
        response,
        loading,
        error
    } = useFetch("https://api.github.com");
    const approvedOwners = ['SocketSomeone', 'necordjs', 'miko-org', 'burger-club', 'Fotrum', 'VENOM-MULTICHEAT', 'noiro-org', 'External-Wallhack']

    useEffect(() => {
        initialProjects();
    }, [projects])


    async function initialProjects() {
        if (projects.length !== 0) {
            return;
        }

        const initialProjects = await get('users/SocketSomeone/starred?per_page=1000');

        if (response.ok) {
            setProjects(initialProjects.filter((project: any) => approvedOwners.includes(project.owner.login)));
        }

        setStarsCount(80)
    }

    return (
        <div className="p-0 px-8">
            <main
                className="min-h-[100vh] flex flex-col align-center justify-center font-Poppins z-1000">

                <Light/>

                <div
                    className="md:container px-5 pt-6 md:pt-0 mx-auto my-auto w-full">
                    <div
                        className="h-screen flex flex-col">

                        <div
                            className="h-full flex flex-col text-center justify-center w-full mx-auto lg:w-2/3 space-y-4">
                            <Avatar/>

                            <Banner/>

                            <h1 className="text-3xl subpixel-antialiased sm:text-2xl md:text-4xl xl:text-6xl xl:leading-[70px] font-extrabold text-gray-900 dark:text-white">Hello,
                                I’m <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300">SocketSomeone</span> your <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Software Engineer</span>
                            </h1>

                            <p className="text-base md:text-xl subpixel-antialiased font-medium text-gray-500 dark:text-gray-300 leading-relaxed md:pb-8">You
                                just
                                found my profile! I&apos;m a
                                kitten who loves coffee and bugs! <span
                                    className="whitespace-nowrap">( •̀ ω •́ )✧</span>
                            </p>

                            <SocialLinksGroup/>
                        </div>


                        <div className="justify-center  mb-5">
                            <ChevronDownIcon
                                className="animate-bounce cursor-pointer w-8 h-8 mx-auto text-gray-500 hidden md:flex dark:text-gray-300"
                                onClick={() => {
                                    window.scrollTo({
                                        top: document.getElementById("projects")?.offsetTop,
                                        behavior: "smooth"
                                    })
                                }}
                            />
                        </div>

                    </div>


                    <div
                        id={"projects"}
                        className="flex flex-col justify-center items-center w-full mx-auto py-20 space-y-4 px-1">

                        <h1 className="font-semibold text-3xl text-gray-900 dark:text-white">My Projects</h1>
                        {/* Stars around my projects text */}

                        <div className="relative">
                            <StarIcon
                                className="absolute bottom-6 right-28 rotate-12 w-5 h-5 text-red-500"/>
                            <StarIcon className="absolute bottom-0 right-24 rotate-12 w-5 h-5 text-yellow-500"/>
                            <StarIcon className="absolute bottom-12 left-24 rotate-12 w-5 h-5 text-purple-500"/>
                            <StarIcon className="absolute bottom-6 left-28 -rotate-12 w-5 h-5 text-blue-500"/>
                        </div>

                        <div className="flex flex-row flex-wrap flex-1 justify-center items-stretch py-16">
                            {
                                loading
                                    ? <Loader/>
                                    : projects.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count).map((project: any, i: number) => (
                                        <ProjectCard key={i} url={project.html_url} thumbnail={project.owner.avatar_url}
                                                     title={project.name} description={project.description} metrics={{
                                            forks: project.forks,
                                            stars: project.stargazers_count,
                                            issues: project.open_issues,
                                            language: project.language
                                        }}/>
                                    ))
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

                </div>


                <Footer/>


                <div className="z-[-1]">
                    {stars && new Array(stars).fill(stars).map((_, i) => <Star key={i}/>)}
                </div>


            </main>


        </div>
    )
}
