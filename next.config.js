const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.discordapp.com"
            },
            {
                protocol: "https",
                hostname: "cdn.discord.com"
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com"
            }
        ]
    }
})

module.exports = nextConfig
