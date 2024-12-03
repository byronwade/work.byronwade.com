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
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
