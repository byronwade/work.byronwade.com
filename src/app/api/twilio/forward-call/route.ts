import { NextResponse } from "next/server";
import twilio from "twilio";
import prisma from "@/lib/prisma";

const VoiceResponse = twilio.twiml.VoiceResponse;

export async function POST(req: Request) {
	const { From, To } = await req.json();

	// Look up real number from database
	const mapping = await prisma.temporaryCommunication.findUnique({
		where: { tempAddress: To },
	});

	if (!mapping || mapping.expiresAt < new Date() || mapping.usesLeft <= 0) {
		const twiml = new VoiceResponse();
		twiml.say("This number is no longer in service");
		return new NextResponse(twiml.toString(), {
			headers: { "Content-Type": "text/xml" },
		});
	}

	// Update uses count
	await prisma.temporaryCommunication.update({
		where: { id: mapping.id },
		data: { usesLeft: mapping.usesLeft - 1 },
	});

	// Forward call
	const twiml = new VoiceResponse();
	twiml.dial(mapping.realAddress);

	return new NextResponse(twiml.toString(), {
		headers: { "Content-Type": "text/xml" },
	});
}
