import withMDX from "@next/mdx";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/",
      },
    ],
  },
  // pageExtensions: ["js", "jsx", "md", "mdoc", "ts", "tsx"],
};

export default nextConfig;
