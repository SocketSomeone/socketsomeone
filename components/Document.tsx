import React from 'react';
import { cn } from '@/utils';

type Props = {
	children?: React.ReactNode;
}

export default function Document({ children }: Props) {
	return (
		<html lang="en" className={cn('scroll-smooth')}>
		<head>
			<link rel={'stylesheet'}
				  href={'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'}/>
		</head>
		<body className="bg-white text-foreground dark:bg-gray-900 antialiased ">
		{children}
		</body>
		</html>
	);
}
