/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["localhost"],
	},
	experimental: {
		serverActions: true,
	},
};

export default nextConfig;
