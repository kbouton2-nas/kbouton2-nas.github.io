/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/kbouton2-nas.github.io',
  assetPrefix: '/kbouton2-nas.github.io/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;