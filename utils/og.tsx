import React, { CSSProperties } from 'react';

type OgTemplateProps = {
	title: string;
	description: string;
	locale: string;
	pathSegment?: string;
	tagline?: string;
};

const overlayStyle: CSSProperties = {
	backgroundImage: `
		radial-gradient(circle at 18% 24%, rgba(59,130,246,0.32), transparent 54%),
		radial-gradient(circle at 82% 76%, rgba(224,36,94,0.28), transparent 58%),
		radial-gradient(ellipse at 48% 30%, rgba(148,163,184,0.14), transparent 60%),
		radial-gradient(ellipse at 52% 70%, rgba(148,163,184,0.09), transparent 62%),
		linear-gradient(130deg, #020617 0%, #0b1120 45%, #111827 72%, #0f172a 100%)
	`,
	backgroundBlendMode: 'screen, screen, normal',
};

const topGlowStyle: CSSProperties = {
	background: 'radial-gradient(circle, rgba(37,99,235,0.55), transparent 68%)',
};

const bottomGlowStyle: CSSProperties = {
	background: 'radial-gradient(circle, rgba(236,72,153,0.45), transparent 70%)',
};

const contentBackdropStyle: CSSProperties = {
	background: 'linear-gradient(155deg, rgba(12,20,38,0.72) 0%, rgba(15,23,42,0.42) 100%)',
	border: '1px solid rgba(148,163,184,0.16)',
	backdropFilter: 'blur(12px)',
};

const fontFamily = 'Inter, "SF Pro Display", "Segoe UI", sans-serif';

function stripHtml(value: string) {
	return value.replace(/<[^>]+>/g, '');
}

function normalizeWhitespace(value: string) {
	return value.replace(/\s+/g, ' ').trim();
}

function truncate(value: string, maxLength: number) {
	if (value.length <= maxLength) {
		return value;
	}

	return `${value.slice(0, maxLength - 1)}…`;
}

export const OG_IMAGE_SIZE = {
	width: 1200,
	height: 630,
} as const;

export function createOgImageTemplate({
										  title,
										  description,
										  locale,
										  pathSegment,
										  tagline = 'Software Engineer • OSS Enthusiast',
									  }: OgTemplateProps) {
	const sanitizedTitle = truncate(
		normalizeWhitespace(stripHtml(title)),
		72
	);
	const sanitizedDescription = truncate(
		normalizeWhitespace(stripHtml(description)),
		200
	);
	const formattedLocale = locale.toUpperCase();
	const segmentLabel = pathSegment
		? pathSegment === '/' ? 'home' : pathSegment.replace(/^\//, '')
		: undefined;

	return (
		<div
			tw="relative flex h-full w-full flex-col bg-[#020617] px-[88px] py-[72px] text-[#f8fafc]"
			style={{ fontFamily }}
		>
			<div tw="absolute inset-0 opacity-95" style={overlayStyle}/>

			<div
				tw="absolute -top-[140px] -right-[160px] h-[340px] w-[340px] rounded-full"
				style={topGlowStyle}
			/>

			<div
				tw="absolute -bottom-[180px] -left-[200px] h-[420px] w-[420px] rounded-full"
				style={bottomGlowStyle}
			/>


			<div
				tw="pointer-events-none absolute inset-[48px] rounded-[28px]"
				style={{ ...contentBackdropStyle, zIndex: 5 }}
			/>

			<div tw="relative flex items-center justify-between" style={{ zIndex: 10 }}>
				<div tw="flex flex-col">
					<span tw="text-[28px] font-semibold uppercase tracking-[0.32em] text-[#38bdf8]">
						SocketSomeone
					</span>
					<span tw="mt-[12px] text-[24px] tracking-[-0.01em] text-[#94a3b8]">
						{tagline}
					</span>
				</div>

				<div tw="flex items-center">
					{segmentLabel && (
						<div tw="mr-[12px] rounded-full border border-[rgba(59,130,246,0.4)] bg-[rgba(30,64,175,0.35)] px-[26px] py-[12px] text-[20px] uppercase tracking-[0.08em] text-[#f8fafc]">
							{segmentLabel}
						</div>
					)}

					<div tw="ml-[12px] rounded-full border border-[rgba(34,197,244,0.4)] bg-[rgba(14,116,144,0.35)] px-[22px] py-[12px] text-[20px] uppercase tracking-[0.12em] text-[#f8fafc]">
						{formattedLocale}
					</div>
				</div>
			</div>

			<div tw="relative flex flex-1 flex-col justify-center" style={{ zIndex: 10 }}>
				<div tw="max-w-[900px] text-[84px] font-bold leading-[1.02] tracking-[-0.03em]">
					{sanitizedTitle}
				</div>
				<div tw="mt-[28px] max-w-[900px] text-[30px] leading-[1.4] text-[#cbd5f5]">
					{sanitizedDescription}
				</div>
			</div>

			<div
				tw="relative mt-auto flex items-center justify-between text-sm text-[#cbd5f5]"
				style={{ zIndex: 10 }}
			>
				<small tw="font-semibold text-[#f8fafc]">socketsomeone.me</small>

				<div tw="flex items-center">
					<div
						tw="mr-[16px] h-[12px] w-[12px] rounded-full bg-[#0ea5e9]"
						style={{ boxShadow: '0 0 18px rgba(14,165,233,0.7)' }}
					/>
					<span tw="tracking-[0.08em]">
						Alexey Filippov · @SocketSomeone
					</span>
				</div>
			</div>
		</div>
	);
}
