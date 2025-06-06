self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('sleep-tracker').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/src/styles.css',
                '/src/app.js'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
