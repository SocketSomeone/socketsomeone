import { useEffect } from 'react';
import { cn } from '@/utils';
import { XMarkIcon } from '@heroicons/react/24/solid';

export interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	title?: string;
	className?: string;
}

export default function Modal({ isOpen, onClose, children, title, className }: ModalProps) {
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

	if (!isOpen) return null;

	return (
		<div
			className={cn(
				'fixed inset-0 z-999 flex bg-black/50',
				'items-end md:items-center justify-center'
			)}
			onClick={onClose}
		>
			<div
				className={cn(
					"relative bg-white dark:bg-gray-900 rounded-t-2xl p-6 shadow-xl w-full max-w-md animate-slideUp transition-all",
					"md:rounded-lg md:translate-y-0 md:max-w-lg md:bottom-auto",
					"fixed bottom-0 md:static",
					className
				)}
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white transition cursor-pointer"
					aria-label="Close modal"
				>
					<XMarkIcon className="w-6 h-6" />
				</button>
				{title && <h2 className="text-xl text-center font-semibold mb-2">{title}</h2>}
				{children}
			</div>
		</div>
	);
}
