import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Work Platform - Find Freelance Jobs",
	description: "Connect with clients and find freelance opportunities",
};

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
				<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4">
					Get started by signing up&nbsp;
					<Link href="/sign-up" className="font-mono font-bold hover:underline">
						here
					</Link>
				</p>
			</div>

			<div className="relative flex place-items-center">
				<h1 className="text-4xl font-bold text-center">Find Your Next Freelance Opportunity</h1>
			</div>

			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
				<Link href="/sign-up" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
					<h2 className="mb-3 text-2xl font-semibold">
						Sign Up <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">Create your account to start receiving job leads.</p>
				</Link>

				<Link href="/post-job" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
					<h2 className="mb-3 text-2xl font-semibold">
						Post a Job <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">Looking to hire? Post your job opportunity here.</p>
				</Link>

				<Link href="/pricing" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
					<h2 className="mb-3 text-2xl font-semibold">
						Pricing <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">View our simple and transparent pricing.</p>
				</Link>
			</div>
		</main>
	);
}
