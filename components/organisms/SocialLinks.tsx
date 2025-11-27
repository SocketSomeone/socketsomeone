'use client';
import PlainSocialLink from '../atoms/PlainSocialLink';
import { SocialLink } from '@/interfaces';
import SocialCard from '../molecules/Card/SocialCard';
import { cn } from '@/utils';
import { EMAILS } from '@/utils/config';

export const LINKS: SocialLink[] = [
	{
		href: 'https://github.com/SocketSomeone',
		icon: '/icons/github.svg',
		alt: 'GitHub',
		name: 'GitHub',
		description: 'Check out my projects on GitHub',
		isPrintable: true
	},
	{
		href: 'https://t.me/socketsomeone',
		icon: '/icons/telegram.svg',
		alt: 'Telegram',
		name: 'Telegram',
		description: 'Reach me on Telegram',
		isPrintable: true
	},
	{
		href: 'https://discord.com/users/235413185639874561',
		icon: '/icons/discord.svg',
		alt: 'Discord',
		name: 'Discord',
		description: 'Contact me on Discord',
		isPrintable: false
	},
	{
		href: 'https://instagram.com/socketsomeone',
		icon: '/icons/instagram.svg',
		alt: 'Instagram',
		name: 'Instagram',
		description: 'Follow me on Instagram',
		isPrintable: false
	},
	{
		href: 'https://twitter.com/SocketSomeone',
		icon: '/icons/twitter.svg',
		alt: 'Twitter',
		name: 'Twitter',
		description: 'Follow me on Twitter',
		isPrintable: false
	},
	{
		href: 'https://www.linkedin.com/in/socketsomeone/',
		icon: '/icons/linkedin.svg',
		alt: 'LinkedIn',
		name: 'LinkedIn',
		description: 'Connect with me on LinkedIn',
		isPrintable: true
	},
	{
		href: `mailto:${EMAILS.CONTACT}`,
		icon: '/icons/email.svg',
		alt: 'Email',
		name: 'Email',
		description: 'Send me email',
		isPrintable: true
	},
];

interface SocialLinksProps {
	type: 'card' | 'plain';
	className?: string;
}

export default function SocialLinks({ type, className }: SocialLinksProps) {
	const variants = {
		card: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full',
		plain: 'flex flex-row justify-center flex-wrap gap-x-0 gap-y-2 print:flex-col print:space-y-2 print:space-x-0 print:items-start'
	};

	return (
		<div
			className={cn(variants[type], className)}>
			{LINKS.map((link, index) => (
				type === 'plain' ? (

					<PlainSocialLink key={index} href={link.href} icon={link.icon} name={link.name} description={link.description}
									 isPrintable={link.isPrintable}/>
				) : (
					<SocialCard key={index} href={link.href} icon={link.icon} name={link.name} description={link.description}
								isPrintable={link.isPrintable}/>
				)))
			}
		</div>
	);
}
