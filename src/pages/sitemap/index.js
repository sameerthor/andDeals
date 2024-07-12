import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


const Sitemap = () => { };
const toUrl = (data) =>
    data.slug == 1 ? `<url><loc>${data.url}</loc> <image:image><image:loc>${data.image}</image:loc></image:image><lastmod>${data.last_mod}</lastmod><changefreq>daily</changefreq><priority>1</priority></url>` : `<url><loc>${data.url}</loc><changefreq>daily</changefreq><priority>0.7</priority></url>`;

const createSitemap = (urlList) =>
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${urlList.map((data) => toUrl(data)).join("")}
    </urlset>`;

export async function getServerSideProps({ res, req }) {


    var urlList = [{ url: "https://www.anddeals.com" }, { url: "https://www.anddeals.com/about" }, { url: "https://www.anddeals.com/category" }, { url: "https://www.anddeals.com/contact-us" }, { url: "https://www.anddeals.com/cookie-policy" }, { url: "https://www.anddeals.com/faqs" }, { url: "https://www.anddeals.com/privacy-policy" }, { url: "https://www.anddeals.com/stores" }, { url: "https://www.anddeals.com/terms-of-use" }]
    const result = await fetch('https://backend.anddeals.com/stores/')
    const stores = await result.json()
    stores.forEach(element => {
        urlList.push({ url: "https://www.anddeals.com/" + element.slug, last_mod: element.last_mod, slug: 1,image:element.image })
    });

    const resultCat = await fetch('https://backend.anddeals.com/categories/')
    const categories = await resultCat.json()
    categories.forEach(element => {
        urlList.push({ url: "https://www.anddeals.com/category/" + element.slug, slug: 0 })
    });

    const sitemap = createSitemap(urlList);
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return { props: { results: { urlList } }, revalidate: 10 }
};


// Default export to prevent Next.js errors
export default function MemorialSitemapIndexPage() { }