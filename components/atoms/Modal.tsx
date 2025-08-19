'use client';
import React, { useEffect } from 'react';
import { cn } from '@/utils';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'motion/react';
import { useMediaQuery } from '../../hooks';
import { Sheet, SheetProps } from 'react-modal-sheet';

export interface ModalProps extends SheetProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	title?: string;
	className?: string;
}

export default function Modal({ isOpen, onClose, children, title, className, ...sheetProps }: ModalProps) {
	const { isMobile } = useMediaQuery();

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		if (isOpen) {
			document.documentElement.style.overflow = 'hidden';
			document.body.style.overflow = 'hidden';
			window.addEventListener('keydown', handleKeyDown);
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.documentElement.style.overflow = '';
			document.body.style.overflow = '';
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (isMobile) {
		return (
			<Sheet isOpen={isOpen} onClose={onClose} detent={'content-height'} {...sheetProps}>
				<Sheet.Container className="bg-white! dark:bg-gray-900!">
					<Sheet.Header></Sheet.Header>

					<Sheet.Content>
						{title && <h1 className="text-xl text-center font-semibold mb-2">{title}</h1>}

						<Sheet.Scroller className='px-6 pb-6'>
							{children}
						</Sheet.Scroller>
					</Sheet.Content>
				</Sheet.Container>
				<Sheet.Backdrop className="bg-black/50!" onTap={onClose} />
			</Sheet>
		);
	}

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					className={cn(
						'fixed inset-0 z-999 flex bg-black/50',
						'items-center justify-center'
					)}
					onClick={onClose}
				>
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 50, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className={cn(
							'relative bg-white dark:bg-gray-900 rounded-t-2xl p-6 shadow-xl w-full max-w-md',
							'rounded-lg translate-y-0 max-w-lg bottom-auto',
							'static',
							className
						)}
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={onClose}
							className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white transition cursor-pointer hidden md:block"
							aria-label="Close modal"
						>
							<XMarkIcon className="w-6 h-6"/>
						</button>
						<hr className="bg-gray-200 dark:bg-gray-700 w-1/4 h-1 rounded md:hidden absolute top-3 left-1/2 transform -translate-x-1/2"/>

						{title && <h2 className="text-xl text-center font-semibold mb-2">{title}</h2>}
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
