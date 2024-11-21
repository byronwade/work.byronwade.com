import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import OnboardingForm from "@/components/onboarding-form";

export default async function OnboardingPage() {
	const { userId } = auth();

	if (!userId) {
		redirect("/sign-in");
	}

	return <OnboardingForm />;
}
