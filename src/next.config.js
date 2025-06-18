// next.config.js
module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  // Untuk deployment ke https://villa-gardenia.github.io/hut-ri
  basePath: "/hut-ri",

  // Output standalone agar kompatibel dengan Docker
  output: "standalone",
};
