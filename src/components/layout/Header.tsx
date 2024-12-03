import { auth } from "@/lib/auth";

export default async function Header() {
	const session = await auth();

	return <header className="border-b">{session ? <nav>{/* Authenticated navigation */}</nav> : <nav>{/* Unauthenticated navigation */}</nav>}</header>;
}
