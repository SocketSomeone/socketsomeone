import { cn } from "@/utils";
import Image from 'next/image';

export interface SocialLinkProps {
	href: string;
	alt?: string;
	icon: string;
	name: string;
	isPrintable?: boolean;
}

export default function SocialLink(props: SocialLinkProps) {
	return <a
		className={cn("flex items-center justify-center rounded-sm border-blue-500 dark:border-blue-900 border-none bg-transparent hover:scale-110 easy-in duration-200 text-blue-500 p-3 md:p-4 print:p-0",
			"print:text-blue-700 print:border-none print:underline print:ml-0 print:bg-transparent print:dark:bg-transparent print:dark:text-blue-700 print:hover:scale-100 print:justify-start print:w-full print:h-fit print:text-left",
			!props.isPrintable && "print:hidden",
		)}
		href={props.href} target="_blank" rel="noopener noreferrer">
		<Image className="easy-in easy-out duration-200 w-6 print:w-5" quality={100} width={48} height={48} src={props.icon} alt={props.alt ?? ''}/>

		<span className="hidden ml-2 print:block text-sm text-blue-500 dark:text-blue-500 hover:underline">
			{props.name}
		</span>
	</a>
}
