import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { sendEmail, type NotificationType, type EmailData } from "@/lib/email";
import { z } from "zod";
import { jobNotificationSchema } from "@/lib/schemas/email";

const emailRequestSchema = z.discriminatedUnion("type", [
	z.object({
		type: z.literal("JOB_ALERT"),
		data: jobNotificationSchema,
		recipients: z.array(z.string().email()),
	}),
	z.object({
		type: z.literal("DAILY_DIGEST"),
		data: z.object({}),
		recipients: z.array(z.string().email()),
	}),
	z.object({
		type: z.literal("WEEKLY_NEWSLETTER"),
		data: z.object({}),
		recipients: z.array(z.string().email()),
	}),
]);

type EmailRequest = z.infer<typeof emailRequestSchema>;

export async function POST(req: Request) {
	try {
		const { userId } = auth();
		if (!userId) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

		const body = await req.json();
		const { type, data, recipients } = emailRequestSchema.parse(body) as EmailRequest;

		// Send emails to all recipients
		const results = await Promise.allSettled(
			recipients.map((recipient) =>
				sendEmail({
					to: recipient,
					subject: getSubjectForType(type, data as EmailData[typeof type]),
					type,
					data: data as EmailData[typeof type],
				})
			)
		);

		const summary = results.reduce(
			(acc, result) => {
				if (result.status === "fulfilled") acc.successful++;
				else acc.failed++;
				return acc;
			},
			{ successful: 0, failed: 0 }
		);

		return NextResponse.json(summary);
	} catch (error) {
		console.error("Error sending notifications:", error);
		return new NextResponse("Failed to send notifications", { status: 500 });
	}
}

function getSubjectForType(type: NotificationType, data: EmailData[NotificationType]): string {
	switch (type) {
		case "JOB_ALERT":
			return `New Job: ${data.jobTitle} at ${data.companyName}`;
		case "DAILY_DIGEST":
			return "Your Daily Job Digest";
		case "WEEKLY_NEWSLETTER":
			return "Weekly Job Market Update";
	}
}
