/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Required for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/pearl-sale' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/pearl-sale' : '',
  images: {
    unoptimized: true,
  },
  // Add trailing slash to help with path resolution
  trailingSlash: true,
}

module.exports = nextConfig
