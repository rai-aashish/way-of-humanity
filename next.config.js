/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    loader: 'custom',
    disableStaticImages: true,
    domains: ['images.prismic.io', 'images.unsplash.com', 'wayofhumanity.cdn.prismic.io'],
    nextImageExportOptimizer: {
      imageFolderPath: 'public/images',
      exportFolderPath: 'out',
      quality: 75,
    },
    env: {
      storePicturesInWEBP: true,
      generateAndUseBlurImages: true,
    },
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
