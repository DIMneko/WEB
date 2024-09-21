/** @type {import('next').NextConfig} */
const nextConfig = {
//   output: "export",
//   trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/WEB' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/WEB' : '',
};

export default nextConfig;
