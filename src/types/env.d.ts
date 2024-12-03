declare global {
	namespace NodeJS {
		interface ProcessEnv {
			RESEND_API_KEY: string;
			TWILIO_ACCOUNT_SID: string;
			TWILIO_AUTH_TOKEN: string;
			BASE_URL: string;
			DATABASE_URL: string;
		}
	}
}

export {};
