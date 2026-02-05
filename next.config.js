/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'output: export' to allow dynamic routes like /studio
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

module.exports = nextConfig
