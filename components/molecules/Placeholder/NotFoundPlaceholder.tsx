'use client';
import { useRouter } from 'next/navigation';
import Placeholder from './Placeholder';
import { cn } from '@/utils';

type Props = {
	className?: string;
};

export default function NotFoundPlaceholder({ className }: Props) {
	const router = useRouter();

	return (
		<div className={cn('flex px-8 justify-center align-center grow', className)}>
			<div className="flex flex-1 items-center justify-center">
				<Placeholder
					className="max-w-2xl"
					image="/gifs/duck-sad.gif"
					header="Page Not Found"
					description="The page you are looking for does not exist or has been moved. It seems this page is missing. Please check the
                        URL or go home."
					button={
						<button
							className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition-colors duration-300 cursor-pointer"
							onClick={() => router.back()}
						>
							Go Back
						</button>
					}
				/>
			</div>
		</div>
	);
}
