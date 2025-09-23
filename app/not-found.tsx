import { Metadata } from 'next';
import NotFoundPlaceholder from '@/components/molecules/Placeholder/NotFoundPlaceholder';

export const metadata: Metadata = {
	title: 'Page Not Found - 404',
	description: 'The page you are looking for does not exist or has been moved.',
	robots: {
		index: false,
		follow: false,
		googleBot: {
			index: false,
			follow: false,
		}
	}
};

export default function NotFound() {
	return (
		<NotFoundPlaceholder/>
	);
}
