import { NextResponse } from "next/server";
import { CommunicationService } from "@/lib/communication";

const communicationService = new CommunicationService();

export async function POST(req: Request) {
	const { type, recipientAddress, config } = await req.json();

	try {
		const tempAddress = type === "EMAIL" ? await communicationService.createTemporaryEmail(recipientAddress, config) : await communicationService.createTemporaryPhone(recipientAddress, config);

		return NextResponse.json({ tempAddress });
	} catch (error) {
		return NextResponse.json({ error: "Failed to create temporary address" }, { status: 500 });
	}
}
