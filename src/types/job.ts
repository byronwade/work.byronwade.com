export interface JobPost {
	id: string;
	title: string;
	description: string;
	budget?: number;
	location: string;
	requirements?: string[];
}

export interface ContractorMatch {
	contractorId: string;
	matchScore: number;
	matchReason: string;
}
