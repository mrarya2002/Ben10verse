/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static.tvtropes.org',
          },
          {
            protocol: 'https',
            hostname: 'assets.stickpng.com',
          },
          {
            protocol: 'https',
            hostname: 'w7.pngwing.com',
          },
          {
            protocol: 'https',
            hostname: 'w1.pngwing.com',
          },
          {
            protocol: 'https',
            hostname: 'e0.pxfuel.com',
          },
          {
            protocol: 'https',
            hostname: 'e1.pxfuel.com',
          },
          {
            protocol: 'https',
            hostname: 'preview.redd.it',
          },
          {
            protocol: 'https',
            hostname: 'static1.personality-database.com',
          },
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
          },
          {
            protocol: 'https',
            hostname: 'static.miraheze.org',
          },
        ],
      },
}

module.exports = nextConfig
