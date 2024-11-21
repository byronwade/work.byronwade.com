import { Html, Head, Body, Container, Section, Text, Link, Preview } from "@react-email/components";

interface BaseEmailProps {
	previewText: string;
	heading: string;
	children: React.ReactNode;
	footerText?: string;
}

export default function BaseTemplate({ previewText, heading, children, footerText = "You're receiving this email because you're subscribed to job notifications." }: BaseEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>
			<Body style={{ ...styles.main }}>
				<Container style={{ ...styles.container }}>
					<Section style={{ ...styles.logo }}>
						<Text style={{ ...styles.heading }}>Work Platform</Text>
					</Section>

					<Section style={{ ...styles.content }}>
						<Text style={{ ...styles.paragraph }}>{heading}</Text>
						{children}
					</Section>

					<Section style={{ ...styles.footer }}>
						<Text style={{ ...styles.footerText }}>{footerText}</Text>
						<Link href="{{unsubscribe}}" style={{ ...styles.footerLink }}>
							Unsubscribe from emails
						</Link>
					</Section>
				</Container>
			</Body>
		</Html>
	);
}

const styles = {
	main: {
		backgroundColor: "#ffffff",
		fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
	},
	container: {
		margin: "0 auto",
		padding: "20px 0 48px",
		width: "580px",
	},
	logo: {
		padding: "20px 0",
	},
	content: {
		padding: "20px 0",
	},
	heading: {
		fontSize: "32px",
		lineHeight: "1.3",
		fontWeight: "700",
		color: "#484848",
	},
	paragraph: {
		fontSize: "18px",
		lineHeight: "1.4",
		color: "#484848",
	},
	footer: {
		padding: "20px 0",
		borderTop: "1px solid #e5e5e5",
	},
	footerText: {
		fontSize: "14px",
		lineHeight: "1.5",
		color: "#9ca299",
		marginBottom: "10px",
	},
	footerLink: {
		color: "#9ca299",
		textDecoration: "underline",
	},
} as const;
