'use client';
import { Snowfall } from 'react-snowfall';
import React from 'react';
import { useSnowfallEnabled } from '@/hooks/useSnowfallEnabled';
import { useTheme } from 'next-themes';
import { useMounted } from '@/hooks/useMounted';

export default function SnowfallBackground() {
	const enabled = useSnowfallEnabled();
	const { resolvedTheme } = useTheme();
	const mounted = useMounted();

	if (!enabled || !mounted) {
		return null;
	}

	const color =
		resolvedTheme === 'dark' ? 'rgba(148, 167, 200, 0.35)' : 'rgba(200, 220, 245, 0.75)';

	return (
		<Snowfall color={color}/>
	);
}
