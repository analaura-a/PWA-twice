const staticTwice = "TWICE!";
const assets = [
  "./",
  "./index.html",
  "./styles/estilos.css",
  "./main.js",
  "./script.js"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticTwice).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});