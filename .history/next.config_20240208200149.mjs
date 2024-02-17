/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  rewrites: async () => {
    return [
      {
        source: "/showcase",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
