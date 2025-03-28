/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c.statcounter.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
