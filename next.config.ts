import type { NextConfig } from 'next'

import config from '@/lib/config'

const nextConfig: NextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},

	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: config.env.directusEndpoint.replace('https://', ''),
			},
		],
	},
}

export default nextConfig
