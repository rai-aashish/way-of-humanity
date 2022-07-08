/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['images.prismic.io', 'images.unsplash.com', 'wayofhumanity.cdn.prismic.io'],
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
