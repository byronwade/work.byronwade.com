import { Providers } from "./providers";
import { ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";
import ErrorBoundary from "@/components/error-boundary";
import Loading from "./loading";

export const metadata: Metadata = {
	title: "Freelance Platform",
	description: "A platform for freelancers to find work",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased">
				<ErrorBoundary>
					<Providers>
						<ClerkLoading>
							<Loading />
						</ClerkLoading>
						<ClerkLoaded>{children}</ClerkLoaded>
					</Providers>
				</ErrorBoundary>
			</body>
		</html>
	);
}
