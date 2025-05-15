import { cn } from "@/utils";

export interface SocialLinkProps {
	href: string;
	alt?: string;
	icon: string;
	name: string;
	isPrintable?: boolean;
}

export default function SocialLink(props: SocialLinkProps) {
	return <a
		className={cn("w-12 h-12 flex items-center justify-center rounded-sm bg-blue-100 dark:bg-blue-900 hover:scale-110 easy-in duration-200 text-blue-500 mb-4 mx-4",
			"print:text-blue-700 print:underline print:ml-0 print:bg-transparent print:dark:bg-transparent print:dark:text-blue-700 print:hover:scale-100 print:justify-start print:w-full print:h-fit print:text-left",
			!props.isPrintable && "print:hidden",
		)}
		href={props.href} target="_blank" rel="noopener noreferrer">
		<img className="easy-in easy-out duration-200 w-5 h-5" src={props.icon} alt={props.alt ?? ''}/>

		<span className="hidden ml-2 print:block text-sm text-blue-500 dark:text-blue-500 hover:underline">
			{props.name}
		</span>
	</a>
}
