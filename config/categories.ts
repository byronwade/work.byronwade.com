export const jobCategories = [
	{
		id: "web-development",
		name: "Web Development",
		description: "Frontend, Backend, and Full Stack Development",
		subcategories: ["Frontend Development", "Backend Development", "Full Stack Development", "WordPress Development", "E-commerce Development"],
	},
	{
		id: "mobile-development",
		name: "Mobile Development",
		description: "iOS, Android, and Cross-platform Development",
		subcategories: ["iOS Development", "Android Development", "React Native", "Flutter", "Mobile Game Development"],
	},
	{
		id: "design",
		name: "Design",
		description: "UI/UX, Graphic Design, and Brand Identity",
		subcategories: ["UI Design", "UX Design", "Graphic Design", "Logo Design", "Brand Identity"],
	},
] as const;

export type JobCategory = (typeof jobCategories)[number];
export type JobSubcategory = JobCategory["subcategories"][number];
