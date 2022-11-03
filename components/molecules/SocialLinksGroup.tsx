import SocialLink, {SocialLinkProps} from "../atoms/SocialLink";

const LINKS: SocialLinkProps[] = [
    {href: "https://github.com/SocketSomeone", icon: "/icons/github.svg"},
    {href: "https://t.me/socketsomeone", icon: "/icons/telegram.svg"},
    {href: "https://discord.com/users/235413185639874561", icon: "/icons/discord.svg"},
    {href: "https://instagram.com/socketsomeone", icon: "/icons/instagram.svg"},
    {href: "https://twitter.com/SocketSomeone", icon: "/icons/twitter.svg"},
    {href: "mailto:socket.someone@gmail.com", icon: "/icons/email.svg"},
]

export default function SocialLinksGroup() {
    return (
        <div className="flex flex-row flex-wrap justify-center">
            {LINKS.map((link, index) => (
                <SocialLink key={index} href={link.href} icon={link.icon}></SocialLink>
            ))}
        </div>
    )
}
