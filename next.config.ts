import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
    ppr: 'incremental'
  },
	
	typescript: {
		ignoreBuildErrors: true,
	}
};

export default nextConfig;
