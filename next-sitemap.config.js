/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl:'https://www.anddeals.com',
    generateRobotsTxt: true, // (optional)
    sitemapBaseFileName:"anddeals-sitemap",
    generateIndexSitemap: false,
    sitemapSize: 7000,
    transform: async (config, path) => {
        return {
          loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
          changefreq: config.changefreq,
          priority: config.priority,
          lastmod: config.autoLastmod ? new Date().toISOString().split('T')[0] : undefined,
          alternateRefs: config.alternateRefs ?? [],
        }
      }
  }