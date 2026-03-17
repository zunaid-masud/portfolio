export default function robots() {
    const siteUrl = process.env.NEXT_PUBLIC_APP_URL;

	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/private/",
		},
		sitemap: `${siteUrl}/sitemap.xml`,
	};
}
