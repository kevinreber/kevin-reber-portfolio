// "Kill switch" service worker.
//
// This file is intentionally NOT registered by the app anymore (see
// index.html, which only calls getRegistrations()/unregister() on load).
// It exists solely so that browsers which still have the OLD cache-first
// service worker (removed in b5056a6) active from before that fix shipped
// can recover.
//
// Why this is necessary: the old service worker cached "/" and "/index.html"
// with a cache-first strategy and a cache name that never changed between
// deploys. Any browser that installed it is stuck forever replaying that
// cached HTML/JS (including this repo's old, now-deleted layout.js/navbar.js
// scripts) because the service worker intercepts navigation before a fresh
// index.html - and its unregister script - can ever be fetched. Simply
// deleting service-worker.js (making it 404) does NOT fix this: browsers
// do not auto-unregister a registration just because its script starts
// 404ing, they just keep the existing (stale) worker active indefinitely.
//
// The one thing that DOES reach a stuck client is the service worker's own
// update check: browsers periodically re-fetch the registered worker script
// directly from the network, bypassing the worker's own fetch handler (this
// was verified with a real headless-browser test). So as long as a new,
// valid script is served at this exact URL, it will eventually be installed
// in place of the old one. This script then takes control immediately,
// deletes all caches, unregisters itself, and reloads any open clients -
// after which they load the current site normally with no service worker
// at all.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => Promise.all(cacheNames.map((name) => caches.delete(name))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => clients.forEach((client) => client.navigate(client.url)))
  );
});
