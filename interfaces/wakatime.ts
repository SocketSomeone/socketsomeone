export type WakatimePiePoint = {
	name: string;
	y: number;
};

export type WakatimeChartData = {
	dailyActivity: {
		categories: string[];
		series: number[];
		totalHuman?: string | null;
		rangeText?: string | null;
	};
	languages: WakatimePiePoint[];
	projects: WakatimePiePoint[];
	lastUpdated?: string | null;
	languagesLabel?: string | null;
	projectsLabel?: string | null;
	startedAt?: string | null;
	startedAtLabel?: string | null;
	dailyAverageHours?: number | null;
	dailyAverageLabel?: string | null;
};

export type WakatimeStatsResponse = {
	data?: {
		human_readable_total?: string;
		human_readable_range?: string;
		human_readable_daily_average?: string;
		daily_average?: number;
		start?: string;
		start_date?: string;
		languages?: Array<{
			name?: string;
			total_seconds?: number;
		}>;
		editors?: Array<{
			name?: string;
			total_seconds?: number;
		}>;
		status?: string;
	};
};

export type WakatimeInsightsResponse = {
	data?: {
		days?: Array<{
			date?: string;
			total?: number;
		}>;
		human_readable_range?: string;
		status?: string;
	};
};
