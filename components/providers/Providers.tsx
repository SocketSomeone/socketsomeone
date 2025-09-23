'use client';
import { NextIntlClientProvider } from 'next-intl';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './ThemeProvider';
import { LanyardProvider } from './LanyardProvider';
import { QueryClient } from '@tanstack/query-core';
import React from 'react';

const queryClient = new QueryClient();

type Props = {
	children: React.ReactNode
}

export default function Providers({ children }: Props) {
	return (
		<NextIntlClientProvider locale={'en'}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<LanyardProvider>
						{children}
					</LanyardProvider>
				</ThemeProvider>
			</QueryClientProvider>
		</NextIntlClientProvider>
	);
}
