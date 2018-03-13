importScripts('/cache-polyfill.js');
self.addEventListener('install',function(e){
  e.waitUntil(caches.open('airhorner').then(function(cache){
    return cache.addAll([
      '/',
      '/css/critical.css',
      '/css/bootstrap4.css',
      '/scripts/site.js',
      '/media/1048/circle-health.png',
      '/media/1047/medical-website-design.png'
    ]);
  }));
});