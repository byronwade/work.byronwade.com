import OpenAI from "openai";
import type { JobPost, ContractorMatch } from "@/types/job";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

export async function matchJobWithContractors(jobPost: JobPost): Promise<ContractorMatch[]> {
	const completion = await openai.chat.completions.create({
		model: "gpt-4-turbo-preview",
		messages: [
			{
				role: "system",
				content: "You are a job matching assistant...",
			},
			{
				role: "user",
				content: `Match this job: ${JSON.stringify(jobPost)}`,
			},
		],
	});

	return JSON.parse(completion.choices[0].message.content) as ContractorMatch[];
}
