import { Metadata } from "next";

export const metadata: Metadata = {
	title: "EmailMeWork.com - Connect with Contractors",
	description: "Find and connect with qualified contractors for your projects",
	openGraph: {
		title: "EmailMeWork.com",
		description: "Connect with qualified contractors",
		url: "https://emailmework.com",
		siteName: "EmailMeWork",
		images: [
			{
				url: "https://emailmework.com/og.png",
				width: 1200,
				height: 630,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
