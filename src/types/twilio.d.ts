declare module "twilio" {
	import { Twilio } from "twilio";
	export default function twilio(accountSid: string, authToken: string, options?: any): Twilio;
}
