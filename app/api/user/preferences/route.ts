import { auth, clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { onboardingSchema } from "@/lib/schemas/onboarding";

export async function POST(req: Request) {
	try {
		const { userId } = auth();
		if (!userId) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

		const body = await req.json();
		const validatedData = onboardingSchema.parse(body);

		// Store preferences in Clerk user metadata
		await clerkClient.users.updateUser(userId, {
			privateMetadata: {
				...validatedData,
				onboardingCompleted: true,
			},
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Error updating user preferences:", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
