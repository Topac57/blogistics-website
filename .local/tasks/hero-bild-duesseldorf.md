# Hero-Hintergrundbild auf Düsseldorf-Skyline aktualisieren

## What & Why
Das aktuelle Startseiten-Hero verwendet ein neutrales Unsplash-Platzhalterbild. Der Nutzer hat ein hochwertiges Düsseldorf-Panoramafoto (Rheinturm, Altstadt, Rhein bei Sonnenuntergang) bereitgestellt, das perfekt zur neuen geografischen Ausrichtung der Website passt.

## Done looks like
- Das Düsseldorf-Skyline-Bild ist als Hero-Hintergrund auf der Startseite sichtbar
- Das Bild ist angenehm abgedunkelt, sodass der weiße und gelbe Text klar lesbar ist
- Die warme Abendstimmung des Bildes ist noch erkennbar (kein mix-blend-luminosity, das die Farben neutralisiert)
- Auf allen Bildschirmgrößen sieht der Hero professionell aus

## Out of scope
- Änderungen an anderen Seiten oder Abschnitten
- Änderungen am Text oder den Buttons im Hero

## Tasks
1. **Bild in public-Ordner kopieren** — Das bereitgestellte Düsseldorf-Foto aus attached_assets in das public-Verzeichnis der Website kopieren (z.B. als `hero-duesseldorf.png`).

2. **Hero-Bild und Overlay anpassen** — In Home.tsx das bisherige Unsplash-img-Tag durch das neue Bild ersetzen (Importpfad: `/hero-duesseldorf.png` aus public-Ordner). Opacity auf ca. 35–40 % setzen (kein mix-blend-luminosity). Das bestehende dunkle Gradient-Overlay etwas verstärken (via-zinc-950/70 und zusätzliches bg-zinc-950/40 direkt über dem Bild), damit Text gut lesbar bleibt.

## Relevant files
- `artifacts/umzuege-website/src/pages/Home.tsx:19-30`
- `artifacts/umzuege-website/public/`
