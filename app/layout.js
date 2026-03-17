import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Md Zunaid Masud | Digital Marketer",
	description:
		"Portfolio of Md. Md Zunaid Masud, a Digital Marketer specializing in Full-Stack Engineering, Blockchain Solutions.",
};

export default function RootLayout({ children }) {
	const siteUrl = process.env.NEXT_PUBLIC_APP_URL;
	const ogImageUrl = `${siteUrl}/opengraph-image.png`;

	// JSON-LD for Website
	const websiteStructuredData = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		url: siteUrl,
		name: metadata.title,
		description: metadata.description,
		potentialAction: {
			"@type": "SearchAction",
			target: `${siteUrl}/?q={search_term_string}`,
			"query-input": "required name=search_term_string",
		},
	};

	// JSON-LD for Person
	const personStructuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "MD. Md Zunaid Masud",
		alternateName: "Md Zunaid Masud",
		jobTitle: "Digital Marketer",
		email: "mailto:masudzunaid5@gmail.com",
		url: siteUrl,
		sameAs: [
		"https://www.facebook.com/Zunaid2004"
		],
		image: ogImageUrl,
		description: metadata.description,
	};

	return (
		<html lang="en">
			<head>
				{/* Primary Meta Tags */}
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content={siteUrl} />
				<meta property="og:title" content={metadata.title} />
				<meta
					property="og:description"
					content={metadata.description}
				/>
				<meta property="og:image" content={ogImageUrl} />
				<meta
					property="og:image:alt"
					content="Portfolio of F. M. ASIF-UZ-ZAMAN, showcasing expertise in project management and Digital Marketering."
				/>

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content={siteUrl} />
				<meta name="twitter:title" content={metadata.title} />
				<meta
					name="twitter:description"
					content={metadata.description}
				/>
				<meta name="twitter:image" content={ogImageUrl} />
				<meta
					name="twitter:image:alt"
					content="Portfolio of F. M. ASIF-UZ-ZAMAN, showcasing expertise in project management and Digital Marketering."
				/>

				{/* JSON-LD Structured Data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(websiteStructuredData),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(personStructuredData),
					}}
				/>
			</head>
			<body className={inter.className}>
				<ToastContainer />
				<main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
					<Navbar />
					{children}
					<ScrollToTop />
				</main>
				<Footer />
			</body>
		</html>
	);
}
