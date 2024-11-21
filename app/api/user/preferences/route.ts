import { NextResponse } from "next/server";
import { onboardingSchema } from "@/lib/schemas/onboarding";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const validatedData = onboardingSchema.parse(body);

		// TODO: Store preferences in your database
		console.log("Storing preferences:", validatedData);

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Error updating user preferences:", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
