import { useEffect, useState } from 'react';


const IS_SSR = typeof window === 'undefined';

export function useDimensions() {
	const [dimensions, setDimensions] = useState(() => ({
		height: !IS_SSR ? window.innerHeight : 0,
		width: !IS_SSR ? window.innerWidth : 0,
	}));

	useEffect(() => {
		function handler() {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		}

		handler();

		window.addEventListener('resize', handler);

		return () => {
			window.removeEventListener('resize', handler);
		};
	}, []);

	return dimensions;
}
