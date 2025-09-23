'use client';
import { cn } from '@/utils';
import Image from 'next/image';

type Props = {
	className?: string;
	image?: string;
	header?: string | React.ReactNode;
	description?: string;
	button?: React.ReactNode;
}

export default function Placeholder({ className, image, header, description, button }: Props) {
	return (
		<div className={cn('flex flex-col items-center justify-center text-center space-y-2', className)}>
			{image && <Image quality={100} src={image} width={512} height={512} alt="placeholder" className="w-40 h-40 object-cover mb-4"/>}
			<div className={cn('flex flex-col items-center justify-center text-center space-y-2 max-w-3xl')}>
				{header && <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{header}</h1>}
				{description &&
					<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{description}</p>}

				{
					button && <div className="mt-4">
						{button}
					</div>
				}
			</div>

		</div>
	);
}
