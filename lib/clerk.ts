import { clerkClient } from "@clerk/nextjs";

if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
	throw new Error("Missing Clerk Publishable Key");
}

if (!process.env.CLERK_SECRET_KEY) {
	throw new Error("Missing Clerk Secret Key");
}

export { clerkClient };
