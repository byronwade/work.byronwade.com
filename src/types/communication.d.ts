declare module "@/lib/communication" {
	export interface ForwardingConfig {
		expireAfter?: number;
		maxUses?: number;
	}

	export class CommunicationService {
		createTemporaryEmail(recipientEmail: string, config?: ForwardingConfig): Promise<string>;
		createTemporaryPhone(recipientPhone: string, config?: ForwardingConfig): Promise<string>;
		forwardEmail(from: string, to: string, subject: string, content: string): Promise<void>;
	}
}
