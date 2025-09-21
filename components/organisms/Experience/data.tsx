import React, { useState } from 'react';
import { BriefcaseIcon, HeartIcon } from '@heroicons/react/24/solid';
import { BoltIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import {useTranslations} from "next-intl";

export interface ExperienceEntry {
	name: string;
	description?: string;
	location: string;
	url?: string;
	role: string;
	skills: string[];
	responsibilities: string[];
	achievements: string[];
	// icon?: React.ReactNode;
	icon?: {
		url?: string;
		fallback: React.ReactNode;
	}
	startDate: string;
	endDate?: string;
}

const styleOfIcon = 'rounded-md bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 dark:text-blue-500/80 w-full h-full p-1';


export const icons = {
	work: <BriefcaseIcon width={36} className={styleOfIcon} />,
	openSource: <HeartIcon width={36} className={styleOfIcon} />,
	order: <BoltIcon width={36} className={styleOfIcon}/>
};


export function useExperienceEntries():ExperienceEntry[] {
	const t = useTranslations();
	const experienceData = t.raw('home.sections.professions.experience');
	const entries = Object.keys(experienceData).map(key => {
		const exp = experienceData[key] as any;
		return {
			...exp,
			icon: exp.icon
				? {
					url: exp.icon.url,
					fallback: icons[exp.icon.type as keyof typeof icons]
				}
				: undefined,
			skills: exp.skills || [],
			responsibilities: exp.responsibilities || [],
			achievements: exp.achievements || [],
		};
	});
	return entries;
}


export function ImageOrIcon(url: string, icon: React.ReactNode) {
	const [hasError, setHasError] = useState(false);

	if (url && !hasError) {
		return (
			<Image
				src={url}
				alt={`${url} Logo`}
				width={36}
				height={36}
				className="w-full h-full rounded-md object-contain"
				onError={() => setHasError(true)}
			/>
		);
	}

	return <>{icon}</>;
}
