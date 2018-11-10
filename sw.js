self.addEventListener('install', function(event) {
    alert("install");
});

self.addEventListener('fetch', function(event) {
    alert(event);
    event.respondWith(event);
});