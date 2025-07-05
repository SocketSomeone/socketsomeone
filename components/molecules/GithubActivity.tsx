import GitHubCalendar from 'react-github-calendar';
import { cn } from '@/utils';
import { useTheme } from 'next-themes';
import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

type GitHubCalendarProps = {
	username?: string;
	className?: string;
};

export default function GithubActivity({ username = 'SocketSomeone', className }: GitHubCalendarProps) {
	const { resolvedTheme } = useTheme();

	return (
		<div
			className={cn('w-full xl:w-2/3 px-2 lg:px-0  flex flex-col items-center space-y-2 justify-center py-8 print:hidden', className)}>

			<h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-0!">
				Recent Contributions
			</h2>

			<p className="text-sm text-gray-500 dark:text-gray-400 mb-2!">
				See my recent contributions on GitHub
			</p>

			<>
				<GitHubCalendar username={username}
								colorScheme={resolvedTheme as 'dark' | 'light'}
								theme={{
									light: [
										'#ebedf0',
										'#9be9a8',
										'#40c463',
										'#30a14e',
										'#216e39',
									],
									dark: [
										'#192434',
										'#0e4429',
										'#006d32',
										'#26a641',
										'#39d353',
									],
								}}
								renderBlock={(block, activity) =>
									React.cloneElement(block, {
										'data-tooltip-id': 'react-tooltip',
										'data-tooltip-html': `${activity.count} activities on ${activity.date}`,
									})
								}
								renderColorLegend={
									(block, level) => (
										React.cloneElement(block, {
											'data-tooltip-id': 'react-tooltip',
											'data-tooltip-html': `Level ${level}`,
											className: cn(block.props.className, 'cursor-pointer')
										})
									)
								}
				/>
				<ReactTooltip id="react-tooltip"
							  className="
							  bg-gray-900! text-white!
							  dark:bg-gray-200! dark:text-gray-900! p-2! text-xs!"
				/>
			</>


			<small className="text-xs text-gray-500 dark:text-gray-400">
				Contributions are updating automatically every 24 hours
			</small>
		</div>
	);
}
