import React from 'react';
import { cn } from '@/utils';

type Props = {
	children?: React.ReactNode;
}

export default function Document({ children }: Props) {
	return (
		<html lang="en" className={cn('scroll-smooth')}>
		<head/>
		<body className="bg-white text-foreground dark:bg-gray-900 antialiased ">
		{children}
		</body>
		</html>
	);
}
