/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['images.prismic.io', 'images.unsplash.com', 'wayofhumanity.cdn.prismic.io'],
  },
  reactStrictMode: true,
  build: {
    transpile: ['gsap'],
  },
};

module.exports = nextConfig;
