module.exports = {
  globDirectory: "public/",
  globPatterns: [
    "**/*.{css,html,js,svg,woff2,json,png,jpg,webp}",
  ],
  swDest: "public/service-worker.js",
  navigateFallback: '/offline/offline.html',
};
