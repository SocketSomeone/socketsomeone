import { cn } from '@/utils';

type Props = {
	className?: string;
}

export default function Divider({ className }: Props) {
	return (
		<div className={cn('w-full h-[1px] bg-gray-200 dark:bg-gray-700 my-4', className)}/>
	);
}
