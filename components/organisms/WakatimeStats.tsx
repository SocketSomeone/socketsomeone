'use client';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useMemo } from 'react';
import Link from 'next/link';
import GradientBlob from '@/components/atoms/GradientBlob';
import type { WakatimeChartData, WakatimePiePoint } from '@/interfaces/wakatime';

type Props = {
	data: WakatimeChartData;
};

const COLORS = ['#6366F1', '#22D3EE', '#F97316', '#F43F5E', '#22C55E', '#A855F7'];

const formatHoursLabel = (value: number): string => {
	const hours = Math.floor(value);
	const minutes = Math.round((value - hours) * 60);

	if (hours === 0) {
		return `${minutes}m`;
	}

	if (minutes === 0) {
		return `${hours}h`;
	}

	return `${hours}h ${minutes}m`;
};

const mapPieData = (data: WakatimePiePoint[]) =>
	data.map((point, index) => ({
		name: point.name,
		y: Number(point.y.toFixed(2)),
		color: COLORS[index % COLORS.length]
	}));

export default function WakatimeStats({ data }: Props) {
	const dailyTotals = data.dailyActivity.series.reduce((sum, value) => sum + value, 0);
	const totalLabel = data.dailyActivity.totalHuman ?? formatHoursLabel(dailyTotals);
	const languagesTitle = data.languagesLabel ?? 'Top languages';
	const projectsTitle = data.projectsLabel ?? 'Top projects';
	const topLanguage = data.languages.length > 0 ? data.languages[0]?.name ?? null : null;
	const topProject = data.projects.length > 0 ? data.projects[0]?.name ?? null : null;
	const secondaryChipLabel = projectsTitle.toLowerCase().includes('editor') ? 'Editor' : 'Project';
	const startedAtLabel = useMemo(() => {
		if (data.startedAtLabel) {
			return data.startedAtLabel;
		}

		if (!data.startedAt) {
			return null;
		}

		const date = new Date(data.startedAt);
		if (Number.isNaN(date.valueOf())) {
			return null;
		}

		return new Intl.DateTimeFormat(undefined, {
			year: 'numeric',
			month: 'short'
		}).format(date);
	}, [data.startedAt, data.startedAtLabel]);

	const dailyAverageLabel = useMemo(() => {
		if (data.dailyAverageLabel) {
			return data.dailyAverageLabel;
		}

		if (typeof data.dailyAverageHours === 'number') {
			return formatHoursLabel(data.dailyAverageHours);
		}

		return null;
	}, [data.dailyAverageHours, data.dailyAverageLabel]);

	const dailyOptions = useMemo<Highcharts.Options>(
		() => ({
			chart: {
				type: 'column',
				backgroundColor: 'transparent',
				style: { fontFamily: 'inherit' }
			},
			title: { text: undefined },
			xAxis: {
				categories: data.dailyActivity.categories,
				labels: { style: { color: 'rgba(148, 163, 184, 0.9)' } },
				lineColor: 'rgba(148, 163, 184, 0.15)',
				tickColor: 'rgba(148, 163, 184, 0.15)'
			},
			yAxis: {
				title: { text: 'Hours', style: { color: 'rgba(148, 163, 184, 0.9)' } },
				gridLineColor: 'rgba(148, 163, 184, 0.15)',
				labels: { style: { color: 'rgba(148, 163, 184, 0.9)' } },
				min: 0
			},
			tooltip: {
				shared: true,
				pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:.2f}h</b><br/>',
				backgroundColor: 'rgba(15, 23, 42, 0.85)',
				borderColor: 'rgba(99, 102, 241, 0.6)',
				style: { color: '#F8FAFC', }
			},
			legend: { enabled: false },
			credits: { enabled: false },
			series: [
				{
					type: 'column',
					name: 'Hours',
					data: data.dailyActivity.series,
					color: COLORS[0],
					borderRadius: 4,
					borderColor: 'rgba(148, 163, 184, 0.15)',
					maxPointWidth: 48
				}
			]
		}),
		[data.dailyActivity]
	);

	const languagesOptions = useMemo<Highcharts.Options>(
		() => ({
			chart: {
				type: 'pie',
				backgroundColor: 'transparent',
				style: { fontFamily: 'inherit' }
			},
			title: { text: undefined },
			tooltip: {
				pointFormatter: function () {
					return `<span style="color:${this.color}">\u25CF</span> <b>${this.name}</b>: ${this.y?.toFixed(2)}h`;
				}
			},
			plotOptions: {
				pie: {
					innerSize: '55%',
					dataLabels: {
						enabled: true,
						useHTML: true,
						formatter: function () {
							return `
								<span class="block font-bold text-foreground">${this.name}</span>
								<span class='block text-muted-foreground'>${this.y?.toFixed(1)}h</span>
							`;
						},
						distance: 20
					},
					borderWidth: 0
				}
			},
			legend: { enabled: false },
			credits: { enabled: false },
			series: [
				{
					type: 'pie',
					name: 'Languages',
					data: mapPieData(data.languages)
				}
			]
		}),
		[data.languages]
	);

	const projectsOptions = useMemo<Highcharts.Options>(
		() => ({
			chart: {
				type: 'pie',
				backgroundColor: 'transparent',
				style: { fontFamily: 'inherit' }
			},
			title: { text: undefined },
			tooltip: {
				pointFormatter: function () {
					return `<span style="color:${this.color}">\u25CF</span> <b>${this.name}</b>: ${this.y?.toFixed(2)}h`;
				}
			},
			plotOptions: {
				pie: {
					innerSize: '55%',
					dataLabels: {
						enabled: true,
						useHTML: true,
						formatter: function () {
							return `
								<span class=" block font-bold text-foreground">${this.name}</span>
								<span class='block text-muted-foreground'>${this.y?.toFixed(1)}h</span>
							`;
						},
						distance: 20
					},
					borderWidth: 0
				}
			},
			legend: { enabled: false },
			credits: { enabled: false },
			series: [
				{
					type: 'pie',
					name: 'Projects',
					data: mapPieData(data.projects)
				}
			]
		}),
		[data.projects]
	);

	const lastUpdatedLabel = useMemo(() => {
		if (!data.lastUpdated) {
			return null;
		}

		const updatedDate = new Date(data.lastUpdated);

		if (Number.isNaN(updatedDate.valueOf())) {
			return null;
		}

		return new Intl.DateTimeFormat(undefined, {
			dateStyle: 'medium',
			timeStyle: 'short'
		}).format(updatedDate);
	}, [data.lastUpdated]);

	return (
		<section className="relative w-full overflow-visible py-12 sm:py-16">
			<GradientBlob
				className="inset-x-0 top-8 flex justify-center"
				innerClassName="h-64 w-[min(1100px,90%)]"
				gradientClassName="bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.32),transparent_70%)] dark:bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.4),transparent_70%)]"
				blurClassName="blur-3xl"
			/>

			<GradientBlob
				className="bottom-6 left-[12%]"
				innerClassName="h-40 w-40"
				gradientClassName="bg-[radial-gradient(circle,rgba(56,189,248,0.35),transparent_100%)] dark:bg-[radial-gradient(circle,rgba(34,211,238,0.32),transparent_60%)]"
				blurClassName="blur-2xl"
			/>

			<GradientBlob
				className="bottom-12 right-[10%]"
				innerClassName="h-52 w-52"
				gradientClassName="bg-[radial-gradient(circle,rgba(249,115,22,1),transparent_65%)] dark:bg-[radial-gradient(circle,rgba(244,63,94,0.32),transparent_65%)]"
				blurClassName="blur-3xl"
			/>

			<div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-2 sm:px-4 md:px-6 lg:px-8">
				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<div className="flex flex-col gap-4 md:max-w-2xl">
						<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
							<span className="rounded-full bg-primary/10 px-3 py-1 text-primary">WakaTime</span>
							<span className="hidden text-muted-foreground/70 md:inline">live feed</span>
						</div>
						<h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Recent coding activity</h2>
						<p className="text-sm text-muted-foreground md:text-base">
							Tracking with{' '}
							<span className="font-medium text-foreground">WakaTime</span>. All-time total:{' '}
							<span className="font-medium text-foreground">{totalLabel}</span>.
						</p>
						<div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground md:text-sm">
							{startedAtLabel && (
								<span
									className="inline-flex items-center gap-2 rounded-full border border-border/40 px-3 py-1 text-muted-foreground/80">
									Tracking since {startedAtLabel}
								</span>
							)}
						</div>
					</div>

					<div className="flex flex-col items-start gap-3 text-left md:items-end md:text-right">
						<Link
							href="https://wakatime.com/SocketSomeone"
							className="group inline-flex items-center gap-2 rounded-full bg-primary/15 px-5 py-2 text-sm font-medium text-primary transition-colors duration-300 hover:bg-primary/25"
							target="_blank"
							rel="noreferrer"
						>
							View full WakaTime profile
							<span
								aria-hidden="true"
								className="translate-x-0 text-base transition-transform group-hover:translate-x-1"
							>
								→
							</span>
						</Link>

						<div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
							<span
								className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 font-medium text-foreground/80">
								{totalLabel} logged
							</span>

							{dailyAverageLabel && (
								<span className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 text-foreground/80">
									Daily avg: {dailyAverageLabel}
								</span>
							)}

						</div>
					</div>
				</div>

				<div className="grid gap-10">
					<div className="grid gap-6 lg:grid-cols-2">
						<article
							className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/40 bg-background/60 dark:bg-gray-900/60 p-6 backdrop-blur-xs">
							<div className="flex items-center justify-between gap-2">
								<span
									className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">{languagesTitle}</span>
								<span className="text-xs font-medium text-primary/80">{totalLabel}</span>
							</div>
							{data.languages.length > 0 ? (
								<HighchartsReact
									highcharts={Highcharts}
									options={languagesOptions}
									containerProps={{ className: 'mt-6 h-[240px] w-full sm:h-[280px]' }}
								/>
							) : (
								<p className="mt-4 text-sm text-muted-foreground">Languages breakdown is unavailable.</p>
							)}
						</article>

						<article
							className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/40 bg-background/60 dark:bg-gray-900/60 p-6 backdrop-blur-xs">
							<div className="flex items-center justify-between gap-2">
								<span
									className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">{projectsTitle}</span>
								{dailyAverageLabel && (
									<span className="text-xs font-medium text-primary/80">Daily avg {dailyAverageLabel}</span>
								)}
							</div>
							{data.projects.length > 0 ? (
								<HighchartsReact
									highcharts={Highcharts}
									options={projectsOptions}
									containerProps={{ className: 'mt-6 h-[240px] w-full sm:h-[280px]' }}
								/>
							) : (
								<p className="mt-4 text-sm text-muted-foreground">No additional breakdown to show yet.</p>
							)}
						</article>
					</div>

					<article
						className="group relative overflow-hidden rounded-3xl border border-border/40 bg-background/60 dark:bg-gray-900/60  p-6 backdrop-blur-xs">
						<div className="flex flex-wrap items-center justify-between gap-4">
							<span className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">Daily rhythm</span>

							<div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
								{topLanguage && (
									<span
										className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 text-foreground/80">
										Focus: {topLanguage}
									</span>
								)}

								{topProject && (
									<span
										className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 text-foreground/80">
										{secondaryChipLabel}: {topProject}
									</span>
								)}
							</div>
						</div>

						{data.dailyActivity.categories.length > 0 ? (
							<HighchartsReact
								highcharts={Highcharts}
								options={dailyOptions}
								containerProps={{ className: 'mt-6 h-[320px] w-full sm:h-[340px] bg-transparent' }}
							/>
						) : (
							<p className="text-center text-sm text-muted-foreground">
								Daily insights are not available yet. Check back soon.
							</p>
						)}
					</article>
				</div>

				{lastUpdatedLabel && (
					<p className="text-right text-xs text-muted-foreground/80">
						Last synced: {lastUpdatedLabel}
					</p>
				)}
			</div>
		</section>
	);
}
