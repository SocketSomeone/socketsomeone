import SocialLink, { SocialLinkProps } from "../atoms/SocialLink";

const LINKS: SocialLinkProps[] = [
	{ href: "https://github.com/SocketSomeone", icon: "/icons/github.svg", alt: "GitHub", name: "My GitHub profile", isPrintable: true },
	{ href: "https://t.me/socketsomeone", icon: "/icons/telegram.svg", alt: "Telegram", name: "Contact via Telegram", isPrintable: true },
	{ href: "https://discord.com/users/235413185639874561", icon: "/icons/discord.svg", alt: "Discord", name: "Discord", isPrintable: false },
	{ href: "https://instagram.com/socketsomeone", icon: "/icons/instagram.svg", alt: "Instagram", name: "Instagram", isPrintable: false },
	{ href: "https://twitter.com/SocketSomeone", icon: "/icons/twitter.svg", alt: "Twitter", name: "Twitter", isPrintable: false },
	{ href: "mailto:socket.someone@gmail.com", icon: "/icons/email.svg", alt: "Email", name: "Send me email", isPrintable: true },
]

export default function SocialLinksGroup({ className }: { className?: string }) {
	return (
		<div className={`flex flex-row justify-center items-center space-x-4 ${className} print:flex-col print:ml-2`}>
			{LINKS.map((link, index) => (
				<SocialLink key={index} href={link.href} icon={link.icon} name={link.name} isPrintable={link.isPrintable}></SocialLink>
			))}
		</div>
	)
}
