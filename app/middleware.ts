import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
	publicRoutes: ["/", "/sign-in", "/sign-up", "/post-job", "/api/webhooks(.*)", "/terms", "/privacy"],
	ignoredRoutes: ["/api/notifications/email"],
	afterAuth(auth, req) {
		// If there's no user and the route isn't public, redirect to sign-in
		if (!auth.userId && !auth.isPublicRoute) {
			const signInUrl = new URL("/sign-in", req.url);
			signInUrl.searchParams.set("redirect_url", req.url);
			return NextResponse.redirect(signInUrl);
		}
		return NextResponse.next();
	},
});

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|trpc)(.*)",
	],
};
