/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["localhost"],
	},
	experimental: {
		inlineCss: true,
		ppr: true,
	},
};

export default nextConfig;
