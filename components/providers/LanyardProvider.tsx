import { createContext, ReactNode, useContext } from 'react';
import { LanyardWebsocket, useLanyard } from 'react-use-lanyard';

const LanyardContext = createContext<LanyardWebsocket | null>(null);

export function LanyardProvider({ children }: { children: ReactNode }) {
	const lanyard = useLanyard({
		userId: '235413185639874561',
		socket: true,
	});

	return (
		<LanyardContext.Provider value={lanyard}>
			{children}
		</LanyardContext.Provider>
	);
}

export function useLanyardContext() {
	const context = useContext(LanyardContext);
	if (!context) {
		throw new Error('useLanyardContext must be used within a LanyardProvider');
	}
	return context;
}
