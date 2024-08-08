/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.anddeals.com',
    generateRobotsTxt: false, // (optional)
    generateIndexSitemap: false,
    transform: async (config, path) => {
        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: "daily",
            priority:0.9,
            lastmod: config.autoLastmod ? (new Date().toISOString().split('T'))[0] : undefined,
        }
    }
}