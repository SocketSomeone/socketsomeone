import Image from "next/image";

export interface SocialLinkProps {
    href: string;
    alt?: string;
    icon: string;
}

export default function SocialLink(props: SocialLinkProps) {
    return <a className="w-12 h-12 flex items-center justify-center rounded bg-blue-100 dark:bg-blue-900 hover:scale-110 easy-in duration-200 text-blue-500 mb-4 mx-4"
              href={props.href} target="_blank" rel="noopener noreferrer">
            <Image className="easy-in easy-out duration-200" width={24} height={24} quality={100} src={props.icon} alt=""/>
    </a>
}
