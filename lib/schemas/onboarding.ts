import { z } from "zod";
import { jobCategories } from "@/config/categories";

const subcategories = jobCategories.flatMap((cat) => cat.subcategories);

export const onboardingSchema = z.object({
	companyName: z.string().min(2, "Company name must be at least 2 characters"),
	categories: z.array(z.string()).min(1, "Select at least one category"),
	subcategories: z.array(z.enum([...subcategories] as [string, ...string[]])).min(1, "Select at least one subcategory"),
	emailPreferences: z.object({
		dailyDigest: z.boolean().default(true),
		instantNotifications: z.boolean().default(true),
		weeklyNewsletter: z.boolean().default(false),
	}),
});

export type OnboardingFormData = z.infer<typeof onboardingSchema>;
