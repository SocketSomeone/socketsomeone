'use client';

import { useEffect, useState } from 'react';

export function useMounted() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
	}, []);

	return mounted;
}
