/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "assets.website-files.com",
      "https://firebasestorage.googleapis.com/",
    ],
  },
};

module.exports = nextConfig;
