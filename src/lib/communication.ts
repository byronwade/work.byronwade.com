import { Resend } from "resend";
import twilio from "twilio";

const resend = new Resend(process.env.RESEND_API_KEY);
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

interface ForwardingConfig {
	expireAfter?: number; // hours
	maxUses?: number;
}

export class CommunicationService {
	// Create temporary email
	async createTemporaryEmail(recipientEmail: string, config: ForwardingConfig = { expireAfter: 72, maxUses: 10 }) {
		// Generate random email address
		const tempEmail = `temp-${Math.random().toString(36).substring(7)}@yourdomain.com`;

		// Store mapping in database with expiration
		// ... store in database ...

		return tempEmail;
	}

	// Create temporary phone number
	async createTemporaryPhone(recipientPhone: string, config: ForwardingConfig = { expireAfter: 72, maxUses: 10 }) {
		// Purchase temporary Twilio number
		const number = await twilioClient.incomingPhoneNumbers.create({
			phoneNumber: "+1", // You'll need to specify area code
		});

		// Set up forwarding
		await twilioClient.incomingPhoneNumbers(number.sid).update({
			voiceUrl: `${process.env.BASE_URL}/api/twilio/forward-call`,
			smsUrl: `${process.env.BASE_URL}/api/twilio/forward-sms`,
		});

		// Store mapping in database with expiration
		// ... store in database ...

		return number.phoneNumber;
	}

	// Forward email
	async forwardEmail(from: string, to: string, subject: string, content: string) {
		await resend.emails.send({
			from,
			to,
			subject,
			html: content,
		});
	}
}
