module.exports = {
  cacheId: 'vakaravaditajs',
  globDirectory: "static/",
  globPatterns: [
    "buildClient/*.{css,js}",
    "dist/**.svg",
    "favicons/*.{png,ico,svg}",
    "fonts/*.woff2",
    "images/*.{png,jpg,webp}",
    "manifest/*.json",
    "shell/*.html",
  ],
  swDest: "static/service-worker.js",
  navigateFallback: '/shell/index.html',
};
