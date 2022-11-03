import {lanyard} from "../../utils";
import {useEffect, useState,} from "react";
import {LanyardPresence} from "../../utils/lanyard/interfaces";
import Image from "next/image";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;

enum StatusColor {
    ONLINE = "bg-green-500",
    IDLE = "bg-yellow-500",
    DND = "bg-red-500",
    OFFLINE = "bg-gray-500",
}

function getStatusColor(status: string = 'offline'): string {
    switch (status) {
        case "online":
            return StatusColor.ONLINE;
        case "idle":
            return StatusColor.IDLE;
        case "dnd":
            return StatusColor.DND;
        default:
            return StatusColor.OFFLINE;
    }
}

export default function Avatar() {
    const [avatar, setAvatar] = useState<string>("https://cdn.discordapp.com/embed/avatars/0.png");
    const [presence, setPresence] = useState<LanyardPresence>();
    const [loading, setLoading] = useState<boolean>(true);

    const setAvatarAndPresence = (presence: LanyardPresence) => {
        const user = presence?.discord_user;

        setAvatar(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`);
        setPresence(presence);
    }

    useEffect(() => {
        if (loading) {
            lanyard?.fetch().then((data) => {
                setAvatarAndPresence(data);
                setLoading(false)
            })

            lanyard?.on('presence', (data) => setAvatarAndPresence(data));
        }
    });

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative">
                {loading
                    ?
                    <div className="w-40 h-40 rounded-full bg-gray-300 animate-pulse"/> :
                    <Image className="h-40 w-40 rounded-full" width={4096} height={4096} src={avatar} quality={100}
                           alt=""/>
                }
                <span className="flex">
                    <span
                        className={"animate-ping bottom-0 right-5 absolute inline-flex h-7 w-7 rounded-full opacity-75 " + getStatusColor(presence?.discord_status)}></span>
                    <span
                        className={"bottom-0 right-5 absolute w-7 h-7 border-2 border-white dark:border-gray-800 rounded-full " + getStatusColor(presence?.discord_status)}></span>
                    </span>


            </div>
        </div>
    )
}
