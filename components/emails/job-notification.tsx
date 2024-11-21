import BaseTemplate from "./base-template";
import { Section, Text, Button } from "@react-email/components";

export interface JobNotificationProps {
	jobTitle: string;
	companyName: string;
	description: string;
	budget?: string;
	applyUrl: string;
}

export default function JobNotification({ jobTitle, companyName, description, budget, applyUrl }: JobNotificationProps) {
	return (
		<BaseTemplate previewText={`New Job Alert: ${jobTitle} at ${companyName}`} heading="New Job Opportunity">
			<Section>
				<Text style={{ ...styles.jobTitle }}>{jobTitle}</Text>
				<Text style={{ ...styles.company }}>{companyName}</Text>
				{budget && <Text style={{ ...styles.budgetStyle }}>Budget: {budget}</Text>}
				<Text style={{ ...styles.description }}>{description}</Text>
				<Button href={applyUrl} style={{ ...styles.button }}>
					View Job Details
				</Button>
			</Section>
		</BaseTemplate>
	);
}

const styles = {
	jobTitle: {
		fontSize: "24px",
		fontWeight: "600",
		color: "#1a1a1a",
		marginBottom: "8px",
	},
	company: {
		fontSize: "18px",
		color: "#666666",
		marginBottom: "16px",
	},
	budgetStyle: {
		fontSize: "16px",
		color: "#2e7d32",
		marginBottom: "16px",
	},
	description: {
		fontSize: "16px",
		lineHeight: "1.5",
		color: "#444444",
		marginBottom: "24px",
	},
	button: {
		backgroundColor: "#0070f3",
		borderRadius: "5px",
		color: "#fff",
		fontSize: "16px",
		fontWeight: "600",
		textDecoration: "none",
		textAlign: "center" as const,
		padding: "12px 20px",
	},
} as const;
