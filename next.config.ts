/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.asu.edu.eg',
      },
      {
        protocol: 'https',
        hostname: '**.facebook.com',
      }
    ],
  },
};

export default nextConfig;
