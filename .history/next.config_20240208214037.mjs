const withMDX = require("@next/mdx");

const nextConfig = withMDX({
  images: {
    domains: ["images.unsplash.com"],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
});

module.exports = nextConfig;
