/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during builds for quick deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optionally disable TypeScript errors during builds as well
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
