/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Required for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/pearl-sale' : '',
  images: {
    unoptimized: true,
  },
  // Ensure JavaScript is properly included
  assetPrefix: process.env.NODE_ENV === 'production' ? '/pearl-sale' : '',
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig 