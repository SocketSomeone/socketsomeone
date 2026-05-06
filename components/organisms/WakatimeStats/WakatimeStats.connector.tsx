'use client';

import { fetchWakatimeData } from '@/utils/wakatime';
import { WakatimeStats } from './WakatimeStats';
import Placeholder from '../../molecules/Placeholder';

export async function WakatimeStatsConnector() {
	const wakatimeData = await fetchWakatimeData();


	return (
		<>
			{wakatimeData ? (
				<WakatimeStats data={wakatimeData}/>
			) : (
				<div
					className="flex w-full items-center justify-center rounded-3xl border border-border/40 bg-muted/40 px-6 py-10 text-center text-sm text-foreground/70">
					<Placeholder header="Wakatime stats are unavailable"
					             description="Unfortunately, Wakatime statistics are currently unavailable. Please try again later."
					/>
				</div>
			)}
		</>
	)
}
