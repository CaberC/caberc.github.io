//import * as core from 'workbox-core';
const VER = "v0.06"
const VER_NAME = "NEWSREPORT"+VER
const CACHE_NAME = VER_NAME+"CHE"
const APP_STATIC = [
    "/",
    "/icons/manifest-icon-512.maskable.png",
    "/style/global.css",
    "/style/newsPage.css",
    "/style/sportsPage.css",
    "/style/weatherPage.css",
    "app.js",
    "index.html",
    "loadHolidayPage.js",
    "loadHomePage.js",
    "loadNewsPage.js",
    "loadWeatherPage.js",
    "Logo.png",
    "minifest.json"
]

self.addEventListener("install", install)

self.addEventListener("activate", (event) => {
    event.waitUntil(
        (async () => {
        const names = await caches.keys()
        await Promise.all(
            names.map((name) => {
            if (name !== CACHE_NAME) {
                return caches.delete(name)
            }
            }),
        )
        await clients.claim()
        })(),
    )
})
  
//Service Worker registration
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").then(
      (registration) => {
        console.log("Service worker registration successful:", registration);
      },
      (error) => {
        console.error(`Service worker registration failed: ${error}`);
      },
    );
} else {
  console.error("Service workers are not supported.");
}

async function install(event){
    event.waitUntil(
        (async () => {
          const cache = await caches.open(CACHE_NAME)
          cache.addAll(APP_STATIC)
        })(),
    )
}
