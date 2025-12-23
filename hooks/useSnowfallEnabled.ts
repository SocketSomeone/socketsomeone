'use client';

import { useEffect, useState } from 'react';

function isSnowSeason(date: Date) {
	const month = date.getMonth();
	return month === 11 || month === 0 || month === 1;
}

export function useSnowfallEnabled() {
	const [enabled, setEnabled] = useState<boolean>(() => isSnowSeason(new Date()));

	useEffect(() => {
		const update = () => setEnabled(isSnowSeason(new Date()));
		update();

		const intervalId = window.setInterval(update, 60 * 60 * 1000);
		return () => window.clearInterval(intervalId);
	}, []);

	return enabled;
}
