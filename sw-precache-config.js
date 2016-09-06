module.exports = {
  staticFileGlobs: [
    '/images/**/*',
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js'
  ],
  //handleFetch :false,
  // navigateFallback: '/index.html',
  // navigateFallbackWhitelist: [ /^\/[^\_]+\/?/ ],
  runtimeCaching:[{
    urlPattern:/^https:\/\/fonts.(?:googleapis|gstatic).com\/.*/,
    handler:'cacheFirst'
  }]
};
