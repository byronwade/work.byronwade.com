"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CategorySelect } from "@/components/category-select";
import { onboardingSchema, type OnboardingFormData } from "@/lib/schemas/onboarding";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function OnboardingForm() {
	const form = useForm<OnboardingFormData>({
		resolver: zodResolver(onboardingSchema),
		defaultValues: {
			categories: [],
			emailPreferences: {
				dailyDigest: true,
				instantNotifications: true,
				weeklyNewsletter: false,
			},
		},
	});

	const onSubmit = async (data: OnboardingFormData) => {
		try {
			// Store preferences in Clerk user metadata
			const response = await fetch("/api/user/preferences", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!response.ok) throw new Error("Failed to save preferences");

			// Redirect to payment after saving preferences
			window.location.href = "/payment";
		} catch (error) {
			console.error("Error saving preferences:", error);
		}
	};

	return (
		<div className="container mx-auto p-6 max-w-2xl">
			<Card>
				<CardHeader>
					<CardTitle>Complete Your Profile</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<div className="space-y-2">
							<Label htmlFor="companyName">Company Name</Label>
							<Input id="companyName" {...form.register("companyName")} placeholder="Enter your company name" />
						</div>

						<div className="space-y-2">
							<Label>Categories of Interest</Label>
							<CategorySelect value={form.watch("categories")} onChange={(value) => form.setValue("categories", value)} />
						</div>

						<div className="space-y-4">
							<Label>Email Preferences</Label>
							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<Label htmlFor="dailyDigest">Daily Digest</Label>
									<Switch id="dailyDigest" checked={form.watch("emailPreferences.dailyDigest")} onCheckedChange={(checked) => form.setValue("emailPreferences.dailyDigest", checked)} />
								</div>
								<div className="flex items-center justify-between">
									<Label htmlFor="instantNotifications">Instant Notifications</Label>
									<Switch id="instantNotifications" checked={form.watch("emailPreferences.instantNotifications")} onCheckedChange={(checked) => form.setValue("emailPreferences.instantNotifications", checked)} />
								</div>
							</div>
						</div>

						<Button type="submit" className="w-full">
							Continue to Payment
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
