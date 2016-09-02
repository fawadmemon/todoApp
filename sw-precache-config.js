module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js'
  ],
  handleFetch :false,
  navigateFallback: '/index.html',
  runtimeCaching:[{
    urlPattern:/^https:\/\/fonts.(?:googleapis|gstatic).com\/.*/,
    handler:'cacheFirst'
  }]
};
