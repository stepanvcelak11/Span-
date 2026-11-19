# Span – poznámky pro tablet s perem

Webová aplikace (PWA) na ručně psané poznámky, inspirovaná Noteshelf 3.

## Hlavní funkce
- **Kolečko nástrojů u hrotu pera** – podržte pero na místě (~0,45 s) a kolem hrotu se objeví kolečko: nástroje, oblíbené barvy, tloušťky, zpět/znovu, vložit. Boční tlačítko pera ho otevře okamžitě.
- Pero s tlakem (plnicí / kuličkové / fix), zvýrazňovač (i rovná čára), guma (celé tahy / část / jen zvýrazňovač).
- **Laso** – výběr, přesun, zvětšení, otočení (přichytávání po 45°), přesun na jinou stránku, barva, duplikace, kopírovat/vyjmout/vložit, pořadí vrstev.
- Podržení prstu na objektu = okamžitý přesun.
- Tvary: automatické rozpoznání (podržením pera na konci tahu) i ruční čára, šipka, obdélník, elipsa, trojúhelník.
- Text (3 písma), obrázky (i vložení ze schránky), laserové ukazovátko.
- **Knihovna se složkami (i vnořenými) a barevnými kategoriemi**, oblíbené, nedávné, řazení, hledání v názvech i napsaném textu.
- Sešity s obálkami (na výšku i na šířku), stránky (linky, čtverečky, tečky, Cornell, úkoly, noty; 6 barev papíru), panel stránek s náhledy, záložky.
- Import PDF k anotaci, export do PDF / PNG, záloha a obnova (.json).
- Gesta: posun a zoom prsty, klepnutí 2 prsty = zpět, 3 prsty = znovu, ignorování dlaně.
- Optimalizace pro tablet: rychlý posun/zoom z mezipaměti stránek, obrazovka nezhasíná při psaní, celá obrazovka, větší dotykové plochy, světlý/tmavý vzhled.
- Funguje offline, data v IndexedDB na zařízení.

## Struktura
- `src/app.html` – celý zdroj aplikace
- `build.sh` – sestaví `docs/index.html` pro GitHub Pages
- `docs/` – nasaditelná PWA (manifest, service worker, ikona)

## Spuštění na tabletu
Zapněte GitHub Pages (Settings → Pages → Branch, složka `/docs`), otevřete adresu v Chrome a dejte **Přidat na plochu / Instalovat aplikaci**.
