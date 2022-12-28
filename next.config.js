/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'http://localhost:3002/api/:slug*',
      },
    ];
  },
};
