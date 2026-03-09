/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/noshtek-frontend',
  images: { unoptimized: true },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
