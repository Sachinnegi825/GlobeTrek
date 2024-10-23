/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
};

module.exports = nextConfig;
