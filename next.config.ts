import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
    ppr: 'incremental',
		nodeMiddleware: true,
  },
	
	typescript: {
		ignoreBuildErrors: true,
	}
};

export default nextConfig;
