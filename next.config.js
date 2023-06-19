/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
        protocol: 'https',
        port: '',
        pathname: '/images/**/*'
      }
    ]
  }
}

module.exports = nextConfig
