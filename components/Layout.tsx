import { PropsWithChildren } from 'react';
import Footer from './organisms/Footer';
import ThemeSwitcher from './molecules/ThemeSwitcher';

export default function Layout({children}: PropsWithChildren) {
	return (
		<div className="p-0 relative overflow-hidden">
			<ThemeSwitcher/>

			{children}

			<Footer/>
		</div>
	)
}
