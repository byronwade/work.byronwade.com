import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default async function DashboardPage() {
	const { userId } = auth();
	const user = await currentUser();

	if (!userId || !user) {
		redirect("/sign-in");
	}

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-3xl font-bold mb-6">Welcome, {user.firstName}</h1>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<Card>
					<CardHeader>
						<CardTitle>Subscription Status</CardTitle>
						<CardDescription>Your current subscription details</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Active</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Job Categories</CardTitle>
						<CardDescription>Categories you&apos;re interested in</CardDescription>
					</CardHeader>
					<CardContent>{/* Add categories management here */}</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Email Preferences</CardTitle>
						<CardDescription>Manage your notification settings</CardDescription>
					</CardHeader>
					<CardContent>{/* Add email preferences here */}</CardContent>
				</Card>
			</div>
		</div>
	);
}
