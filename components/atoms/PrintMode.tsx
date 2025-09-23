'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function PrintMode() {
	const searchParams = useSearchParams();
	const isPrintMode = searchParams?.has('view', 'cv') ?? false;

	useEffect(() => {
		if (isPrintMode) {
			window.print();
		}
	}, [isPrintMode]);

	return null;
}
