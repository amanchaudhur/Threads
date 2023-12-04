const nextConfig = {
  typescript:{
    ignoreBuildErrors:true,
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: [
      "img.clerk.com",
      "images.clerk.dev",
      "uploadthing.com",
      "placehold.co",
      "utfs.io", // Add utfs.io here
    ],
    typescript: {
      ignoreBuildErrors: true,
    },
  },
};

module.exports = nextConfig;
