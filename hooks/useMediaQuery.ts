'use client';
import { useEffect, useState } from 'react';

export function useMediaQuery(breakpoint = 768) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);
		const handleChange = () => setMatches(mediaQuery.matches);
		handleChange();
		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, [breakpoint]);

	return {
		matches,
		isDesktop: matches,
		isMobile: !matches,
	}
}
