import withMarkdoc from "@markdoc/next.js";

const nextConfig = withMarkdoc()({
  images: {
    domains: ["images.unsplash.com"],
  },
  pageExtensions: ["js", "jsx", "md", "mdoc", "ts", "tsx"],
});

module.exports = nextConfig;
