self.addEventListener("install", e => {

    e.waitUntil(
        caches.open("static")
            .then(cache => {
                return cache.addAll(["./index.html", "./assets/css", "./assets/js", "./assets/img/logo64.png", "./assets/img/logo512.png"]);
            })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request)
            .then(response => {
                return response || fetch(e.request)
            })
    )
})