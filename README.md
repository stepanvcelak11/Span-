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
- **Tabulky jako v Excelu**: české vzorce (=SUMA, =PRŮMĚR, =KDYŽ… přes HyperFormula), více listů, formáty čísel, vyplňování táhlem, řazení, grafy, import/export .xlsx a .csv.
- **Kalkulačka rukopisu**: orámujte příklad (nebo laso) → „Spočítat“; rozpoznává Claude (v claude.ai) nebo vestavěný rozpoznávač, který se učí z oprav. Řeší rovnice s neznámou x, kreslí grafy funkcí (y = …) a počítá integrály, derivace, sumy a limity.
- **Psaní rukou v tabulce** (převod na text/vzorec, offline rozpoznávání, které se učí vaše písmo, guma) a řada speciálních znaků α β Δ ² ₁ √ ≤ °.
- **Listování po stránkách** (jako kniha, dvoustrana na šířku), **čmáranice maže**, **nahrávky propojené s poznámkami**, **tužka**, nové tvary (hvězda, mnohoúhelníky, osy).
- **Páska na učení** (klepnutím odkrýt/zakrýt) a **opakování jako kartičky** (Umím / Neumím), **odkazy** mezi stránkami i na web, **pojmenované záložky a osnova**, **hledání v ručně psaném textu** (offline, toleruje chyby).
- **Přehled stránek** (mřížka, přetahování, hromadné akce), **historie verzí** (automatické snímky, obnovení i jako kopie), **nálepky**, výběr lasem jako obrázek a změna tloušťky, šablony izometrická, šestiúhelníky, měsíční plán.
- **Offline převod rukopisu na text** v sešitě (lasem → T), s učením z oprav.
- **Moderní funkce Excelu**: XLOOKUP, TEXTJOIN, SORT, SEQUENCE, ČETNOSTI, LINREGRESE, FORECAST, INTERCEPT, MÍRA.VÝNOSNOSTI.
- **Matice**: SOUČIN.MATIC, INVERZE, DETERMINANT, TRANSPOZICE, MATICE.JEDNOTKOVÁ (výsledek se rozlije do buněk).
- Offline rozpoznávání písma používá vzorky znaků z balíčku millirec (MIT, © 2026 Robert Wilcox) – převzata jsou jen data.
- **Obrázky a grafy přímo v listu tabulky** (přesun, změna velikosti, vrácení zpět).
- **Tabulka do stránky**, šablony **Rozvrh hodin** a **Týdenní plán**, **záloha celé knihovny** do jednoho souboru.
- **Lepicí poznámky** v šesti barvách a **nahrávání zvuku** (nahrávky uložené v sešitě, přehrávání s posuvníkem).
- **Lupa psaní** (zoom box) – psaní velkým písmem do spodního panelu, rámeček se sám posouvá.
- Hledání v sešitě, převod rukopisu na text.
- Pravítko, vzhled podle Noteshelf (plovoucí lišty, svislá paleta), koš, rychlá poznámka.
- Import PDF k anotaci, export do PDF / PNG, záloha a obnova (.json).
- Gesta: posun a zoom prsty, klepnutí 2 prsty = zpět, 3 prsty = znovu, ignorování dlaně.
- Optimalizace pro tablet: rychlý posun/zoom z mezipaměti stránek, obrazovka nezhasíná při psaní, celá obrazovka, větší dotykové plochy, světlý/tmavý vzhled.
- **Plynulejší práce s učebnicemi (PDF):** stránky se dekódují mimo hlavní vlákno ve velikosti podle zoomu, sousední stránky se načítají dopředu, paměť je omezená; obrázky stránek se ukládají zvlášť a jen jednou, takže uložení po každém tahu je okamžité.
- **Tmavý režim sešitu** (černé okolí stránek, tmavé lišty), přepínač v ⋯ menu i v Nastavení; plynulé animace oken, nabídek a zoomu (dorovnání na šířku po sevření prsty).
- **Úspora baterie:** obrazovka se drží rozsvícená jen při práci (2,5 min od dotyku), živá vrstva se kreslí max. 1× za snímek a prázdná se nepřekresluje, laser bez drahého rozmazání; **úsporný režim** (sám pod 20 % baterie) – nižší rozlišení plátna, bez animací, méně přednačítání.
- Nový vzhled: jemnější plochy, jednotné zaoblení, kompaktní rychlé akce, nastavení ve skupinách.
- **Offline:** knihovny (PDF, Excel, grafy, export) jsou přibalené ve složce `docs/lib`, service worker po prvním otevření uloží aplikaci, knihovny i písma – nainstalovaná aplikace (Přidat na plochu) funguje celá bez internetu. Knihovna → ⋯ → Offline režim ukáže stav.
- **Jen perem:** Nastavení → Pero a gesta → Psaní rukou: Jen perem / Perem i prstem / Automaticky (+ přepínač s rukou v liště); odmítnutí dlaně – velký dotyk a dotyk při psaní nebo držení pera nad displejem se ignoruje.
- Přehled stránek: nativní plynulé posouvání, malé náhledy stránek učebnic ukládané zvlášť; guma překresluje jen okolí; ukládání až v klidu po psaní; sešit se otevře tam, kde jste skončili; ukázky čar u pera a zvýrazňovače; klávesnice v kalkulačce; vlastní kolečko (nástroje, barvy, tloušťky, velikost, rychlost); laso se po přesunu vrátí k předchozímu nástroji; snadné přidání sešitů do složky/kategorie; aplikace až k horní liště systému.
- Stránky na šířku (i jednotlivé stránky, ⋯ → Otočit stránku), tlačítko „Přidat stránku / Na šířku“ pod poslední stránkou, hladší písmo (psaní se už nepřevádí na čáry).
- Čistá obrazovka (dvojklep prstem / F): žádné lišty, jen přesunutelné plovoucí tlačítko s panelem ovládání (nástroje, barvy, tloušťky, stránky, knihovna, nastavení); akce v kolečku (Ovládání, Nová stránka, Přehled stránek, Knihovna, Pravítko…); nastavitelné boční tlačítko pera, zadní konec pera a dvojklep.
- Písmeno + podržení pera = dočasný nástroj (G guma, F fix nebo zkratka Γ, L laso, P pero, Z zvýrazňovač, T text nebo zkratka ┐), po použití se vrátí předchozí; učení vlastního písma, přiřazení a přísnost v Nastavení.
- Funguje offline, data v IndexedDB na zařízení.

## Struktura
- `src/app.html` – celý zdroj aplikace
- `build.sh` – sestaví `docs/index.html` pro GitHub Pages
- `docs/` – nasaditelná PWA (manifest, service worker, ikona)

## Spuštění na tabletu
Zapněte GitHub Pages (Settings → Pages → Branch, složka `/docs`), otevřete adresu v Chrome a dejte **Přidat na plochu / Instalovat aplikaci**.
