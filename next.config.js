/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        // domains: ['localhost'],    // deprecated
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '8080',
            // pathname: '/image/upload/**',
          },
        ],
      },
}

module.exports = nextConfig
