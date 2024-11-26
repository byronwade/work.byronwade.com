import { Providers } from "@/app/providers";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
	title: "Work Platform",
	description: "A platform for freelancers to find work",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased min-h-screen bg-background">
				<Providers>
					<main className="min-h-screen">{children}</main>
				</Providers>
			</body>
		</html>
	);
}
