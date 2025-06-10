import { PropsWithChildren } from 'react';
import Footer from './organisms/Footer';
import Header from './organisms/Header';

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className="p-0 relative flex flex-col min-h-screen overflow-hidden print:overflow-visible!">
			<Header/>

			{children}

			<Footer/>
		</div>
	);
}
