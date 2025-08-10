import { useState, } from 'react';
import Image from 'next/image';
import { useLanyardContext } from '../providers/LanyardProvider';
import { cn } from '@/utils';

enum StatusColor {
	ONLINE = 'bg-green-500',
	IDLE = 'bg-yellow-500',
	DND = 'bg-red-500',
	OFFLINE = 'bg-gray-500',
}

function getStatusColor(status: string = 'offline'): string {
	switch (status) {
		case 'online':
			return StatusColor.ONLINE;
		case 'idle':
			return StatusColor.IDLE;
		case 'dnd':
			return StatusColor.DND;
		default:
			return StatusColor.OFFLINE;
	}
}

export default function Avatar() {
	const [avatar /*, setAvatar */] = useState<string>('https://github.com/SocketSomeone.png');
	const { status } = useLanyardContext();

	const statusColor = getStatusColor(status?.discord_status);
	const activityText = status?.activities?.find(activity => activity.id === 'custom')?.state || status?.discord_status || 'offline';

	return (
		<div className="flex flex-col items-center justify-center select-none relative">
			<Image className="h-40 w-40 rounded-full object-contain" width={4096} height={4096} src={avatar}
				   quality={100}
				   alt="avatar"/>

			<span className="print:hidden group" aria-label="User status">
                    <span
						className={cn('animate-ping bottom-0 right-5 absolute inline-flex h-7 w-7 rounded-full opacity-75', statusColor)}>
					</span>
					<span
						className={cn('bottom-0 left-28 absolute w-fit h-7 border-1 px-2.5 py-1 pl-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none',
							'bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800',
							'flex items-center',
							'text-xs text-left text-gray-800 dark:text-gray-200 tracking-tight antialiased whitespace-nowrap')}>
						{activityText}
					</span>
                    <span
						className={cn('bottom-0 right-5 absolute w-7 h-7 border-2 border-white dark:border-gray-800 rounded-full', statusColor)}>
					</span>

				</span>
		</div>
	);
}
