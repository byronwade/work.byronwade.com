"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
			<ClerkProvider
				appearance={{
					elements: {
						formButtonPrimary: "bg-primary text-primary-foreground hover:bg-primary/90",
						card: "bg-card",
					},
					variables: {
						colorPrimary: "hsl(var(--primary))",
						colorTextOnPrimaryBackground: "hsl(var(--primary-foreground))",
					},
				}}
			>
				{children}
			</ClerkProvider>
		</ThemeProvider>
	);
}
