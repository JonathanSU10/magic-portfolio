import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Development optimizations
  devIndicators: {
    buildActivity: false, // Hide compiling indicator
  },
  
  // Performance optimizations
  reactStrictMode: false, // Disable strict mode for faster development
  
  // Experimental optimizations
  experimental: {
    optimizePackageImports: ['@once-ui-system/core'], // Optimize large UI library
  },
  
  // Keep existing config
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);
