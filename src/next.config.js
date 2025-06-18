// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  basePath: isProd ? "/hut-ri" : "",
  assetPrefix: isProd ? "/hut-ri/" : "",
  output: "export",
  images: { unoptimized: true },
};
