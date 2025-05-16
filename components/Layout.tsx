import { PropsWithChildren } from 'react';
import Footer from './organisms/Footer';
import ThemeSwitcher from './molecules/ThemeSwitcher';
import CVDownloader from './molecules/CVDownloader';

export default function Layout({children}: PropsWithChildren) {
	return (
		<div className="p-0 relative overflow-hidden">
			<CVDownloader/>

			<ThemeSwitcher/>

			{children}

			<Footer/>
		</div>
	)
}
