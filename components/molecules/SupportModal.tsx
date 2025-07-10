'use client';
import Modal, { ModalProps } from '../atoms/Modal';
import { CopyIcon } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function SupportModal({ isOpen, onClose }: Omit<ModalProps, 'children'>) {
	const [copied, setCopied] = useState<string | null>(null);

	const wallets = [
		{
			currency: 'USDT',
			network: 'TRC20',
			address: 'TD1jeMXpdyv3Hk7swBPdrHgV4FYPH9SBaa',
		},
		{
			currency: 'USDT',
			network: 'TON',
			address: 'UQAgo5PKp7htvQebEbECsukmdrny-TfrkmQHvaUI2ewC4iae',
		},
	];

	return (
		<Modal title="Support me" isOpen={isOpen} onClose={onClose} className="space-y-4">
			<p className="text-muted-foreground text-left">
				If you find my projects useful, consider supporting my work. Your support helps me maintain and improve the projects.
			</p>

			<div className="grid grid-cols-1 gap-4">
				<div className="bg-gray-100 dark:bg-gray-500/10 p-3 rounded">
					<div className="font-medium text-md text-gray-700 dark:text-gray-200">
						Buy me a coffee via Tribute
					</div>
					<div className="flex flex-row gap-2 items-center">
						<span className="text-sm text-gray-600 dark:text-gray-300">
							Choose your currency:
						</span>

						<a
							href="https://t.me/tribute/app?startapp=dsH2"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:underline border-r border-gray-300 dark:border-gray-600 pr-2"
						>
							EUR
						</a>
						<a
							href="https://t.me/tribute/app?startapp=dsH7"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:underline"
						>
							RUB
						</a>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-2">
					<div className="font-medium text-md text-gray-700 dark:text-gray-200">Donate with crypto</div>
					{wallets.map((wallet) => (
						<div key={wallet.address} className="bg-gray-100 dark:bg-gray-500/10 p-3 rounded">
							<div className="font-medium text-sm text-gray-700 dark:text-gray-200 ">
								<span className="font-bold">{wallet.currency}</span>{' '}
								<span className="text-muted-foreground">({wallet.network})</span>
							</div>
							<div className="flex items-center gap-2 mt-1 justify-between">
								<code className="break-all text-xs">{wallet.address}</code>
								<div className="relative">
									<button
										onClick={() => {
											navigator.clipboard.writeText(wallet.address);
											setCopied(wallet.address);
											setTimeout(() => setCopied(null), 1500);
										}}
										className="text-xs text-blue-600 hover:underline bg-blue-600/10 dark:bg-blue-400/10 p-1 rounded cursor-pointer"
									>
										<CopyIcon className="inline-block w-4 h-4" />
									</button>

									<AnimatePresence>
										{copied === wallet.address && (
											<motion.span
												initial={{ opacity: 0, y: -5 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -5 }}
												transition={{ duration: 0.3 }}
												className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs text-white bg-green-600 dark:bg-green-500 px-2 py-0.5 rounded shadow-lg whitespace-nowrap"
											>
												Copied!
											</motion.span>
										)}
									</AnimatePresence>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Modal>
	);
}
