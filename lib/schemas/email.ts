import { z } from "zod";

export const jobNotificationSchema = z.object({
	jobTitle: z.string(),
	companyName: z.string(),
	description: z.string(),
	budget: z.string().optional(),
	applyUrl: z.string().url(),
});

export type JobNotificationData = z.infer<typeof jobNotificationSchema>;
