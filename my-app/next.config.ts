/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove any static export settings that might cause issues
  // output: 'export', // Remove this line if present
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/panthkakadia',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/panthkakadia',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig