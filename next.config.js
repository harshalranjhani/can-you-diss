/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.website-files.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
    // domains: [
    //   "images.unsplash.com",
    //   "assets.website-files.com",
    //   "https://firebasestorage.googleapis.com/",
    // ],
  },
};

module.exports = nextConfig;
