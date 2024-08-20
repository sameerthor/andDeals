/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.anddeals.com',
    generateRobotsTxt: false, // (optional)
    generateIndexSitemap: false,
    transform: async (config, path) => {
        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: "daily",
            priority: 0.9
        }
    }
}