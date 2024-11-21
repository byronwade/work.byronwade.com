import { Resend } from "resend";
import { renderAsync } from "@react-email/render";
import JobNotification, { type JobNotificationProps } from "@/components/emails/job-notification";

const resend = new Resend(process.env.RESEND_API_KEY);

export type NotificationType = "JOB_ALERT" | "DAILY_DIGEST" | "WEEKLY_NEWSLETTER";

export type EmailData = {
	JOB_ALERT: JobNotificationProps;
	DAILY_DIGEST: Record<string, never>;
	WEEKLY_NEWSLETTER: Record<string, never>;
};

interface SendEmailOptions<T extends NotificationType> {
	to: string;
	subject: string;
	type: T;
	data: EmailData[T];
}

export async function sendEmail<T extends NotificationType>({ to, subject, type, data }: SendEmailOptions<T>) {
	try {
		let html: string;

		switch (type) {
			case "JOB_ALERT":
				html = await renderAsync(JobNotification(data as JobNotificationProps));
				break;
			case "DAILY_DIGEST":
			case "WEEKLY_NEWSLETTER":
				throw new Error(`Email type ${type} not implemented yet`);
			default:
				throw new Error(`Unknown email type: ${type}`);
		}

		const result = await resend.emails.send({
			from: "Work Platform <jobs@work.byronwade.com>",
			to,
			subject,
			html,
		});

		return result;
	} catch (error) {
		console.error("Error sending email:", error);
		throw error;
	}
}
