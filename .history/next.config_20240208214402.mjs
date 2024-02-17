import withMDX from "@next/mdx";

const nextConfig = withMDX({
  images: {
    domains: ["images.unsplash.com"],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
});

export default nextConfig;
