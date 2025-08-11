const CACHE_NAME = "multi-game-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/whack-a-mole/moleindex.html",
  "/whack-a-mole/molegame.html",
  "/whack-a-mole/app.png",
  "/puzzle/puzzleindex.html",
  "/puzzle/puzzlegame.html",
  "/puzzle/app.png"
  "/Chicken-Road/chickenindex.html",
  "/Chicken-Road/chickengame.html",
  "/Chicken-Road/app.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
