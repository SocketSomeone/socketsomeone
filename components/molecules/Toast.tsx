import {useEffect, useState} from "react";
import {lanyard, LanyardActivity} from "../../utils";
import Image from "next/image";

export default function Toast() {
    const [closed, setClosed] = useState<boolean>(false);
    const [activity, setActivity] = useState<LanyardActivity>();
    const [elapsed, setElapsed] = useState<string>("");
    const [left, setLeft] = useState<string>("");

    useEffect(() => {
        const interval = setInterval(() => {
            const timestamps = activity?.timestamps;
            const start = timestamps?.start
            const end = timestamps?.end

            setElapsed(start ? formatTime(activity?.timestamps?.start) : "")
            setLeft(end ? formatTime(activity?.timestamps?.end) : "")
        }, 1000);

        return () => clearInterval(interval);
    }, [activity?.timestamps]);

    useEffect(() => {
        lanyard?.on('presence', (data) => {
            setActivity(data.activities.find((activity) => activity.type === 0))
        })
    }, []);

    function assetURL(field: 'small_image' | 'large_image' = 'large_image') {
        if (activity?.assets?.[field]?.startsWith('mp:')) {
            return `https://media.discordapp.net/${activity.assets?.[field]?.slice(3)}?size=4096`
        }

        if (!activity?.assets?.[field] && field === 'large_image') {
            return `https://dcdn.dstn.to/app-icons/${activity?.application_id}.png?size=4096`
        }

        return `https://cdn.discordapp.com/app-assets/${activity?.application_id}/${activity?.assets?.[field]}.png?size=4096`
    }


    function formatTime(time?: number) {
        const diff = Math.abs(Date.now() - (time ?? 0));

        const seconds = Math.floor((diff / 1000) % 60);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));


        return [days, hours, minutes, seconds]
            .map((v) => v.toString().padStart(2, '0'))
            .filter((v, index) => v !== '00' || index > 1)
            .join(':');
    }


    if (closed || !activity) {
        return (<> </>)
    }

    return (
        <div className="fixed bottom-2 right-2">
            <div id="toast-message-cta"
                 className="w-full max-w-md p-4 text-gray-500 bg-white rounded-lg  shadow-2xl shadow-black/5 ring-1 ring-slate-700/10 dark:bg-gray-800 dark:text-gray-400"
                 role="alert">
                <div className="flex">
                    <div className="flex flex-col">
                        <div className="mb-2 text-sm font-semibold text-gray-900 dark:text-blue-500">My current activity
                        </div>

                        <div className="flex">
                            <div className="relative">

                                <Image className="w-20 rounded-md object-contain"
                                       onError={(e) => e.target.style.display = 'none'}
                                       width={4096} height={4096}
                                       quality={100}
                                       src={assetURL('large_image')}
                                       alt="Large Image"/>


                                <span className="flex">
                                        <Image
                                            className={"top-14 left-14 absolute w-8 border-2 border-white bg-white dark:border-gray-800 dark:bg-gray-800 rounded-full "}
                                            onError={(e) => e.target.style.display = 'none'}
                                            width={4096} height={4096}
                                            quality={100}
                                            src={assetURL('small_image')}
                                            alt="Small Image"/>
                            </span>
                            </div>


                            <div className="ml-3 text-sm font-normal whitespace-nowrap max-w-[200px]">
                                <span
                                    className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">{activity.name}</span>
                                <div className="text-sm font-normal truncate">{activity.details}
                                </div>
                                <div className="text-sm font-normal truncate">{activity.state}
                                </div>


                                {
                                    (elapsed?.length > 0 || left?.length > 0) && (
                                        <div
                                            className="text-sm font-normal truncate">{left.length > 0 ? `${left} left` : `${elapsed} elapsed`}

                                        </div>)
                                }
                            </div>
                        </div>
                    </div>


                    <button onClick={() => setClosed(true)} type="button"
                            className="ml-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                            data-dismiss-target="#toast-message-cta" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    )
}
