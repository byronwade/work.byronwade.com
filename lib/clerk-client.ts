import { Clerk } from "@clerk/nextjs/server";

if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

if (!process.env.CLERK_SECRET_KEY) {
	throw new Error("Missing Secret Key");
}

const clerk = new Clerk({
	publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
	secretKey: process.env.CLERK_SECRET_KEY,
}) as InstanceType<typeof Clerk>;

export default clerk;
