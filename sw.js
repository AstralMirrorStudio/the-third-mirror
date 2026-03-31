const CACHE = 'ttm-v1';
const ASSETS = ['/the-third-mirror/app.html', '/the-third-mirror/manifest.json'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
