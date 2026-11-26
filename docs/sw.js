// Span – offline režim: po prvním otevření s internetem funguje aplikace celá i bez připojení
const VER = '55030d831f';
const CACHE = 'span-' + VER, LIBS = 'span-libs-2';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png'];
// knihovny pro PDF, tabulky (Excel), grafy jsou přibalené ve složce lib/ – uloží se hned při instalaci
const LIB_URLS = ['jspdf.umd.min.js','pdf.min.js','pdf.worker.min.js','xlsx.full.min.js','hyperformula.full.min.js','hf-csCZ.js','chart.umd.js'].map(f => new URL('./lib/' + f, self.registration.scope).href);
const FONTS_CSS = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&family=Caveat:wght@500;600&family=Lora:wght@400;500;600&display=swap';
const EXT = /\/lib\/[^/]+\.js$|^https:\/\/(cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|fonts\.googleapis\.com|fonts\.gstatic\.com)\//;

async function put(cache, url) {
  try { const r = await fetch(url, { mode: 'cors', credentials: 'omit' }); if (r.ok) { await cache.put(url, r.clone()); return r; } } catch (e) {}
  return null;
}
async function precacheLibs(fonts = true) {
  const c = await caches.open(LIBS);
  await Promise.all(LIB_URLS.map(async u => { if (!(await c.match(u))) await put(c, u); }));
  if (!fonts) return;
  // písma: z CSS vytáhnout adresy souborů a uložit i ty
  const css = (await c.match(FONTS_CSS)) || (await put(c, FONTS_CSS));
  if (css) {
    const txt = await css.text();
    const urls = [...new Set([...txt.matchAll(/url\((https:[^)]+)\)/g)].map(m => m[1]))];
    await Promise.all(urls.map(async u => { if (!(await c.match(u))) await put(c, u); }));
  }
}
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    // jádro aplikace se musí uložit celé – jinak instalace selže a zůstane funkční předchozí verze
    const c = await caches.open(CACHE);
    await c.addAll(CORE.map(u => new Request(u, { cache: 'reload' })));
    // knihovny (bez písem) ještě před aktivací, písma až potom na pozadí
    await precacheLibs(false).catch(() => {});
    self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const ks = await caches.keys();
    await Promise.all(ks.filter(k => k !== CACHE && k !== LIBS).map(k => caches.delete(k)));
    await self.clients.claim();
    precacheLibs(true).catch(() => {});
    (await self.clients.matchAll()).forEach(cl => cl.postMessage({ type: 'offline-ready' }));
  })());
});
self.addEventListener('message', e => { if (e.data === 'precache') e.waitUntil(precacheLibs().then(() => e.source && e.source.postMessage({ type: 'offline-ready' }))); });

// stránka aplikace: nejdřív síť (kvůli aktualizacím, max. 3 s), jinak uložená verze
async function page(req) {
  const c = await caches.open(CACHE);
  try {
    const r = await Promise.race([fetch(req), new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 3000))]);
    if (r.ok) c.put('./index.html', r.clone());
    return r;
  } catch (e) {
    return (await c.match('./index.html')) || (await c.match('./')) || Response.error();
  }
}
// knihovny a písma mají v adrese verzi → stačí je mít uložené (nejdřív mezipaměť)
async function lib(req) {
  const c = await caches.open(LIBS);
  const hit = await c.match(req.url);
  if (hit) return hit;
  try {
    const r = await fetch(req);
    if (r.ok || r.type === 'opaque') c.put(req.url, r.clone());
    return r;
  } catch (e) { return Response.error(); }
}
// ostatní soubory aplikace: mezipaměť, na pozadí obnovit
async function asset(req) {
  const c = await caches.open(CACHE);
  const hit = await c.match(req, { ignoreSearch: true });
  const net = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }).catch(() => null);
  return hit || (await net) || Response.error();
}
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (req.mode === 'navigate') { e.respondWith(page(req)); return; }
  if (EXT.test(url.origin + url.pathname)) { e.respondWith(lib(req)); return; }
  if (url.origin === location.origin) { e.respondWith(asset(req)); return; }
});
