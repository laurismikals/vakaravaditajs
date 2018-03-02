module.exports = {
  globDirectory: "static/",
  globPatterns: [
    "**/*.{css,html,js,svg,woff2,json,png,jpg,webp}",
  ],
  swDest: "static/service-worker.js",
  navigateFallback: '/',
};
