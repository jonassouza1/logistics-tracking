/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // MUITO IMPORTANTE — use exatamente o nome do repositório
  basePath: "/logistics-tracking",
  assetPrefix: "/logistics-tracking/",
};

module.exports = nextConfig;
