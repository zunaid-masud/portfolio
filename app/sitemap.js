export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL;

  return [
		{
			url: `${siteUrl}`,
			lastModified: new Date().toISOString(),
			changefreq: "monthly",
			priority: 1.0,
		},
  ];
}