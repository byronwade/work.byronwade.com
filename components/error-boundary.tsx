"use client";

import React from "react";

interface ErrorBoundaryProps {
	children: React.ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	error?: Error;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("ErrorBoundary caught an error:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="flex h-screen items-center justify-center">
					<div className="text-center">
						<h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
						<button onClick={() => this.setState({ hasError: false })} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
							Try again
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}
