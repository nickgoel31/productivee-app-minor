import withMDX from "@next/mdx";

const nextConfig = withMDX({
  images: {
    domains: ["images.unsplash.com"],
  },
  pageExtensions: ["js", "jsx", "md", "mdoc", "ts", "tsx"],
});

export default nextConfig;
