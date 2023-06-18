/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
