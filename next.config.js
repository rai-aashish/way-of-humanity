/** @type {import('next').NextConfig} */
const redirects = require('./redirects');
const nextConfig = {
  images: {
    domains: ['images.prismic.io', 'images.unsplash.com', 'scrupulosity-com.cdn.prismic.io'],
  },
  reactStrictMode: true,
  async redirects() {
    return redirects;
  },

  build: {
    transpile: ['gsap'],
  },
};

module.exports = nextConfig;
