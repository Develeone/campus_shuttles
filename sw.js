self.addEventListener('install', function(event) {
});

self.addEventListener('fetch', function(event) {
    event.respondWith(event);
});