/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://assets.website-files.com/",
      },
    ],
  },
};

module.exports = nextConfig;
