import { Metadata } from 'next';
import NotFoundPlaceholder from '@/components/molecules/Placeholder/NotFoundPlaceholder';
import Document from '@/components/Document';
import React from 'react';

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

export default async function NotFound() {
	return (
		<Document>
			<NotFoundPlaceholder className="min-h-screen"/>
		</Document>
	);
}
