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
    domains: ['www.fatemeh.ca'],
  },
}

module.exports = nextConfig
