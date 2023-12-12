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
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '80',
            // pathname: '/image/upload/**',
          },
          {
            protocol: 'https',
            hostname: 'rentvehicles-server.switzcool.cloud',
            // pathname: '/image/upload/**',
          },
        ],
      },
}

module.exports = nextConfig
