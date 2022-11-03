/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://socketsomeone.me',
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/'
            }
        ]
    }
    // ...other options
}
