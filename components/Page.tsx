import { PropsWithChildren } from 'react';

export default function Page({children}: PropsWithChildren) {
	return (
		<main className="flex flex-col align-center justify-center font-Poppins z-1000">
			{children}
		</main>
	);
}
