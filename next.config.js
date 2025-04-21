/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Required for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/pearl-sale' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/pearl-sale/' : '',
  images: {
    unoptimized: true,
  },
  // Add trailing slash to help with path resolution
  trailingSlash: true,
  // Ensure proper handling of static assets
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
}

module.exports = nextConfig
