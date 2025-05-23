import { lanyard, LanyardPresence } from "../../utils";
import { useEffect, useState, } from "react";
import Image from "next/image";

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
	const [avatar /*, setAvatar */] = useState<string>("https://github.com/SocketSomeone.png");
	const [presence, setPresence] = useState<LanyardPresence>();
	const [loading, setLoading] = useState<boolean>(true);

	const setAvatarAndPresence = (presence: LanyardPresence) => {
		// const user = presence?.discord_user;

		// TODO: Disabled due sanctions from Discord
		// setAvatar(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`);
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
		<div className="flex flex-col items-center justify-center select-none">
			<div className="relative h-fit">
				<Image className="h-40 w-40 rounded-full object-contain" width={4096} height={4096} src={avatar}
					   quality={100}
					   alt="avatar"/>

				<span className="flex print:hidden">
                    <span
						className={"animate-ping bottom-0 right-5 absolute inline-flex h-7 w-7 rounded-full opacity-75 " + getStatusColor(presence?.discord_status)}>

					</span>
                    <span
						className={"bottom-0 right-5 absolute w-7 h-7 border-2 border-white dark:border-gray-800 rounded-full " + getStatusColor(presence?.discord_status)}>

					</span>
				</span>
			</div>
		</div>
	)
}
