import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn, dateToDuration } from '@/utils';
import Image from 'next/image';
import { ClockIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Activity } from 'react-use-lanyard';
import { useLanyardContext } from '@/components/providers/LanyardProvider';

export default function Toast() {
	const [closed, setClosed] = useState<boolean>(false);
	const { status } = useLanyardContext();

	const [activity, setActivity] = useState<Activity>();
	const [elapsed, setElapsed] = useState<string>('');
	const [left, setLeft] = useState<string>('');
	const [largeImage, setLargeImage] = useState<string>('');
	const [smallImage, setSmallImage] = useState<string>('');
	const [imageNotLoaded, setImageNotLoaded] = useState<boolean>(false);

	const assetURL = useCallback((field: 'small_image' | 'large_image' = 'large_image') => {
		const asset = activity?.assets?.[field];
		const appId = activity?.application_id;

		if (!asset) {
			if (!appId) {
				return '';
			}

			if (field === 'large_image') {
				return `https://dcdn.dstn.to/app-icons/${appId}.png?size=4096`;
			}

			return '';
		}

		if (asset.startsWith('mp:')) {
			return `https://media.discordapp.net/${asset.slice(3)}?size=4096`;
		}

		return `https://cdn.discordapp.com/app-assets/${appId}/${asset}.png?size=4096`;
	}, [activity]);

	useEffect(() => {
		const interval = setInterval(() => {
			const timestamps = activity?.timestamps;
			const start = timestamps?.start;
			const end = timestamps?.end;

			setElapsed(start ? dateToDuration(activity?.timestamps?.start) : '');
			setLeft(end ? dateToDuration(activity?.timestamps?.end) : '');
		}, 1000);

		return () => clearInterval(interval);
	}, [activity?.timestamps]);

	useEffect(() => {
		const largeURL = assetURL('large_image');
		const smallURL = assetURL('small_image');

		if (largeURL !== largeImage) {
			// setLargeImage(largeURL);
		}

		if (smallURL !== smallImage) {
			setSmallImage(smallURL);
		}
	}, [assetURL, largeImage, smallImage]);

	useEffect(() => {
		setActivity(status?.activities.find((activity) => activity.type === 0));
	}, [status]);


	return (
		<AnimatePresence>
			{!closed && activity && (
				<motion.div
					key="toast"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 50 }}
					transition={{ duration: 0.5 }}
					className="fixed bottom-2 right-2 z-99 print:hidden"
				>
					<div
						className="w-full max-w-md p-4 text-gray-500 bg-white rounded-xl shadow-2xl shadow-black/5 ring-1 ring-slate-700/10 dark:bg-gray-800 dark:text-gray-400"
						role="alert"
					>
						<div className="flex">
							<div className="flex flex-col">
								<div className="flex items-center justify-between space-x-2 mb-2">
									<div className="text-sm font-semibold text-gray-900 dark:text-blue-500">
										My current activity
									</div>

									<CloseButton
										onClick={() => setClosed(true)}
									/>
								</div>

								<div className="flex items-center gap-3">
									<div className={cn('relative flex h-max items-center')}>
										<div className="relative inline-block group">
											{!largeImage || imageNotLoaded ? (
												<div className="h-[80px] w-[80px] rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
											) : (
												<>
													<Image
														className="h-full w-auto max-h-[80px] rounded-md object-contain"
														onError={() => setImageNotLoaded(true)}
														width={4096}
														height={4096}
														quality={100}
														src={largeImage}
														alt="Large Image"
													/>
													<div
														role="tooltip"
														className={cn(
															'absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 px-3 py-2 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 pointer-events-none whitespace-nowrap',
															'bg-gray-900 text-white dark:bg-gray-200 dark:text-gray-900',
															{ 'hidden': !activity.assets?.large_text }
														)}
													>
														{activity.assets?.large_text || 'Unknown Application'}
													</div>
												</>
											)}
										</div>

										{smallImage && (
											<div className="absolute group -bottom-1 -right-1">
												<Image
													className="max-w-[28px] w-auto h-auto border-2 border-white bg-white dark:border-gray-800 dark:bg-gray-800 rounded-full"
													onError={({ currentTarget }) => currentTarget.style.display = 'none'}
													width={4096}
													height={4096}
													quality={100}
													src={smallImage}
													alt="Small Icon"
												/>

												<div
													role="tooltip"
													className={cn(
														'absolute bottom-full left-1/2 -translate-x-1/2 mb-0.5 z-50 px-3 py-2 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 pointer-events-none whitespace-nowrap',
														'bg-gray-900 text-white dark:bg-gray-200 dark:text-gray-900',
														{ 'hidden': !activity.assets?.small_text }
													)}
												>
													{activity.assets?.small_text}
												</div>
											</div>
										)}
									</div>

									<div className="text-sm font-normal whitespace-pre-line min-w-[120px] max-w-[220px]">
										<div className="text-sm font-semibold text-gray-900 dark:text-white space-y-0.5">
											{activity.name}
										</div>
										{activity.details && (
											<div className="text-sm font-normal break-words">{activity.details}</div>
										)}
										{activity.state && (
											<div className="text-sm font-normal truncate">{activity.state}</div>
										)}
										{(elapsed || left) && (
											<div className="flex items-center text-blue-600 dark:text-blue-500">
												<ClockIcon width={16} height={16} className="inline-block mr-1"/>
												<div className="text-sm font-normal ">
													{left ? `${left} left` : `${elapsed} elapsed`}
												</div>
											</div>
										)}
									</div>
								</div>

								<ActivityButton activity={activity}/>
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

function ActivityButton({ activity }: { activity: Activity }) {
	let url = '';
	let buttonText = 'Open Activity';

	if (activity?.name === 'Spotify' && activity?.sync_id) {
		url = `https://open.spotify.com/track/${activity.sync_id}`;
		buttonText = 'Listen on Spotify';
	}

	if (!url) {
		return null;
	}

	return (
		<div className="mt-2">
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				className="flex w-full justify-center items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center"
			>
				{buttonText}
			</a>
		</div>
	);
}


function CloseButton({ onClick, ariaLabel = 'Close' }: { onClick: () => void; ariaLabel?: string }) {
	return (
		<button
			onClick={onClick}
			type="button"
			className="flex right-5 bg-white justify-center items-center shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer"
			aria-label={ariaLabel}
		>
			<span className="sr-only">{ariaLabel}</span>
			<XMarkIcon/>
		</button>
	);
}
