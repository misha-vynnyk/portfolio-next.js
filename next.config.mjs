/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/portfolio-next.js",
  // assetPrefix: '/portfolio-next.js',
  images: {
    loader: 'imgix',
    path: '/',
  },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
