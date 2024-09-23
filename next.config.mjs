/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NODE_ENV === 'production'
    ? 'https://dimneko.github.io/WEB'
    : 'http://localhost:3000',
  },
};

export default nextConfig;
