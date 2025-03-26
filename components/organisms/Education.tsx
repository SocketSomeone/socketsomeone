import React from 'react';
import {TimelineEvent} from '../molecules/Timeline';
import {BookOpenIcon} from '@heroicons/react/24/solid';


interface EducationEntry {
    name: string;
    startDate: string;
    endDate: string;
    description?: string;
    icon?: React.ReactNode;
}

const education: EducationEntry[] = [
    {
        name: 'Bonch-burevich',
        startDate: '2022',
        endDate: '2026',
        description: 'Study at the university in the direction of "Technology".',
        icon: <BookOpenIcon width={36} />,
    },
    {
        name: 'Lyceum No. 5',
        startDate: '2012',
        endDate: '2022',
        description: 'Secondary education with an emphasis in technical sciences.',
        icon: <BookOpenIcon width={36} />,
    }
];

export default function Education() {
    return (
        <div className="md:container text-muted-foreground self-center pt-10 w-full relative">
            {education.map((school, index) => (
                <TimelineEvent key={`timeline-education-${index}`} active={school.name === 'Bonch-burevich'} last={index === education.length - 1}>
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center text-blue-500">
                            {school.icon}
                            <div className="flex flex-row items-start justify-between w-full">
                                <small className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                                    {school.startDate} - {school.endDate}
                                </small>
                            </div>
                        </div>
                        {school.description && (
                            <p className="text-sm text-gray-800 dark:text-white mt-2">
                                {school.description}
                            </p>
                        )}
                    </div>
                </TimelineEvent>
            ))}
        </div>
    );
}

