import { QueryClient } from '@tanstack/query-core';
import type {
	WakatimeChartData,
	WakatimeInsightsResponse,
	WakatimeStatsResponse
} from '@/interfaces/wakatime';

const API_BASE_URL = 'https://wakatime.com/api/v1';
const WAKATIME_USER = 'SocketSomeone';
const DEFAULT_TIMEOUT = 15;
const WAKATIME_REVALIDATE = 60 * 60; // 1 hour

const wakatimeQueryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: WAKATIME_REVALIDATE * 1000,
			gcTime: WAKATIME_REVALIDATE * 1000,
			retry: 1
		}
	}
});

export const wakatimeQueryKey = ['wakatime'] as const;

const toHours = (seconds?: number) => Number(((seconds ?? 0) / 3600).toFixed(2));

const loadWakatimeData = async (timeout: number): Promise<WakatimeChartData | null> => {
	const statsUrl = `${API_BASE_URL}/users/${encodeURIComponent(WAKATIME_USER)}/stats/all_time?timeout=${timeout}`;
	const insightsUrl = `${API_BASE_URL}/users/${encodeURIComponent(WAKATIME_USER)}/insights/days?timeout=${timeout}`;
	const init: RequestInit = { headers: { Accept: 'application/json' }, next: { revalidate: WAKATIME_REVALIDATE } };

	const results = await Promise.allSettled([statsUrl, insightsUrl].map(url => fetch(url, init)));

	const [statsJson, insightsJson] = await Promise.all(
		results.map(res => {
			if (res.status === 'fulfilled' && res.value.ok) {
				return res.value.json();
			}

			return null;
		})
	) as [WakatimeStatsResponse, WakatimeInsightsResponse];

	if (!statsJson && !insightsJson) {
		return null;
	}

	const dateFormatter = Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric' });

	const insightsDays = (insightsJson?.data?.days ?? [])
		.map(entry => {
			if (!entry?.date) {
				return null;
			}

			const parsedDate = new Date(entry.date);
			const label = Number.isNaN(parsedDate.valueOf()) ? entry.date : dateFormatter.format(parsedDate);

			return {
				label,
				hours: toHours(entry.total),
				dateIso: Number.isNaN(parsedDate.valueOf()) ? null : parsedDate.toISOString()
			};
		})
		.filter((entry): entry is { label: string; hours: number; dateIso: string | null } => Boolean(entry && entry.label));

	const dailyActivity = (() => {
		const nonZeroDays = insightsDays.filter(entry => entry.hours > 0);

		if (nonZeroDays.length > 0) {
			return nonZeroDays.slice(-14);
		}

		return insightsDays.slice(-14);
	})();

	const trackedSinceIso = (() => {
		const candidates = insightsDays
			.map(entry => entry.dateIso)
			.filter((value): value is string => typeof value === 'string');

		if (candidates.length === 0) {
			return null;
		}

		return candidates.reduce<string | null>((earliest, current) => {
			if (!earliest) {
				return current;
			}

			return current < earliest ? current : earliest;
		}, null);
	})();

	const languages = (statsJson?.data?.languages ?? [])
		.filter(item => (item?.name ?? '').length > 0)
		.map(item => ({
			name: item?.name as string,
			y: toHours(item?.total_seconds)
		}))
		.filter(item => item.y > 0)
		.slice(0, 6);

	const projects = (statsJson?.data?.editors ?? [])
		.filter(item => (item?.name ?? '').length > 0)
		.map(item => ({
			name: item?.name as string,
			y: toHours(item?.total_seconds)
		}))
		.filter(item => item.y > 0)
		.slice(0, 6);

	const hasContent = dailyActivity.length > 0 || languages.length > 0 || projects.length > 0;

	if (!hasContent) {
		return null;
	}

	const rawStartedAt = statsJson?.data?.start ?? statsJson?.data?.start_date ?? trackedSinceIso ?? null;
	const startedAt = (() => {
		if (!rawStartedAt) return null;
		const date = new Date(rawStartedAt);
		return Number.isNaN(date.valueOf()) ? null : date.toISOString();
	})();

	const startedAtLabel = (() => {
		if (!rawStartedAt) return null;
		const date = new Date(rawStartedAt);
		if (Number.isNaN(date.valueOf())) {
			return null;
		}

		return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(date);
	})();

	const dailyAverageSeconds = typeof statsJson?.data?.daily_average === 'number' ? statsJson.data.daily_average : null;
	const dailyAverageHours = dailyAverageSeconds !== null ? Number((dailyAverageSeconds / 3600).toFixed(2)) : null;

	return {
		dailyActivity: {
			categories: dailyActivity.map(item => item.label),
			series: dailyActivity.map(item => item.hours),
			totalHuman: statsJson?.data?.human_readable_total ?? null,
			rangeText: insightsJson?.data?.human_readable_range ?? statsJson?.data?.human_readable_range ?? null
		},
		languages,
		projects,
		lastUpdated: null,
		languagesLabel: 'Top languages (all time)',
		projectsLabel: 'Top editors (all time)',
		startedAt,
		startedAtLabel,
		dailyAverageHours,
		dailyAverageLabel: statsJson?.data?.human_readable_daily_average ?? null
	};
};

export const wakatimeQueryOptions = (timeout: number = DEFAULT_TIMEOUT) => ({
	queryKey: [...wakatimeQueryKey, timeout] as const,
	queryFn: () => loadWakatimeData(timeout),
	staleTime: WAKATIME_REVALIDATE * 1000,
	gcTime: WAKATIME_REVALIDATE * 1000
});

export async function fetchWakatimeData(timeout: number = DEFAULT_TIMEOUT): Promise<WakatimeChartData | null> {
	return wakatimeQueryClient.ensureQueryData(wakatimeQueryOptions(timeout));
}
