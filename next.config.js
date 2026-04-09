/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect Vercel preview domain → primary
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'fatemeh-portfolio.vercel.app' }],
        destination: 'https://www.fatemeh.ca/:path*',
        permanent: true,
      },
      // Redirect secondary domain → primary
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'fatemehazadbakht.com' }],
        destination: 'https://www.fatemeh.ca/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.fatemehazadbakht.com' }],
        destination: 'https://www.fatemeh.ca/:path*',
        permanent: true,
      },
      // Redirect non-www → www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'fatemeh.ca' }],
        destination: 'https://www.fatemeh.ca/:path*',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
    ]
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.fatemeh.ca' },
      { protocol: 'https', hostname: 'fatemeh.ca' },
      { protocol: 'https', hostname: 'fatemeh-portfolio.vercel.app' },
      { protocol: 'https', hostname: 'www.fatemehazadbakht.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
