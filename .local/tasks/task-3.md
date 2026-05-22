---
title: Vertrauensbereich: Erfahrung mit öffentlichen Auftraggebern ergänzen
---
# Vertrauensbereich: Erfahrung mit öffentlichen Auftraggebern

  ## What & Why
  Das Unternehmen hat langjährige Erfahrung mit privaten, gewerblichen und öffentlichen Auftraggebern (u.a. Schulen, kommunale Einrichtungen) im Raum Düsseldorf. Diese Glaubwürdigkeit soll auf drei Ebenen der Website sichtbar werden – sachlich, hochwertig formuliert, ohne missverständliche Werbe- oder Partnerschaftssprache.

  Vorgaben für alle Texte und das Design:
  - Sprachlich hochwertig und natürlich – keine stichwortartigen oder holprigen Formulierungen
  - Keine redundanten Wiederholungen derselben Sätze auf verschiedenen Seiten (jede Seite hat einen eigenen Ton)
  - Keine Formulierung, die wie eine offizielle Empfehlung, Zertifizierung oder Partnerschaft klingt
  - Kein Namedropping einzelner Institutionen oder Behörden
  - Keine Logos, Wappen oder offizielle Stadtzeichen
  - Keine animierten Zahlen, Counter, Prozentwerte oder künstlichen Kennzahlen
  - Öffentliche Auftraggeber erscheinen als Teil der breiten Erfahrung, nicht als alleiniger Schwerpunkt
  - Darstellung kompakt, seriös und visuell zurückhaltend – kein plakatives Referenz- oder Siegel-Design
  - Der Abschnitt soll seriös wirken, nicht wie ein künstlicher Werbeblock

  ## Tonalität je Seite

  **Startseite:** Eher allgemein-vertrauensbildend. Der Bereich soll das Vertrauen stärken, ohne konkret zu werden. Beispielrichtung: „Erfahren mit Privat- und Unternehmenskunden – und seit Jahren auch im Auftrag öffentlicher und kommunaler Einrichtungen im Einsatz."

  **Über-uns-Seite:** Etwas konkreter, aber weiterhin sachlich. Einen zusätzlichen Absatz in „Wer wir sind" einbauen, der die Bandbreite der Auftraggeber natürlich beschreibt. Kein eigenständiger Promo-Block – es soll sich wie ein natürlicher Teil des Unternehmenstextes anfühlen.

  **Leistungsseiten:** Nur ein kurzer, dezenter Vertrauenshinweis – ein bis zwei Sätze, die im Sidebar eingebaut werden. Keine Doppelung des Startseitentexts.

  ## Done looks like

  **Startseite:**
  - Neues „Vertrauensband" als eigener, knapper Abschnitt direkt nach der „Warum uns"-Section
  - Dunkler Hintergrund (bg-zinc-950), 4 ruhige Textkacheln nebeneinander – keine Zahlen, keine Counter, keine Prozentwerte
  - Indikatoren thematisch: Privatkunden / Gewerbliche Auftraggeber / Öffentliche Einrichtungen / Langjährige Erfahrung
  - Jede Kachel hat einen Titel und 1–2 Sätze natürlichen, fließenden Text
  - Kein Namedropping, keine Logos, kein Siegel-Optik

  **Über-uns-Seite:**
  - Bestehenden Fließtext in „Wer wir sind" um einen natürlich integrierten Absatz erweitern, der die Breite der Auftraggeberstruktur beschreibt
  - Die bestehende 3-Spalten-Kachel-Reihe auf 4 Spalten erweitern, neue Kachel: „Vielfältige Auftraggeber" mit natürlich formuliertem Text
  - Keine Redundanz zur Startseiten-Formulierung

  **Leistungs-Detailseiten (alle 5):**
  - Kleiner Hinweisblock am unteren Ende der Sidebar in ServiceDetail.tsx
  - 1–2 Sätze, die dezent die breite Erfahrung andeuten – andere Formulierung als auf Startseite und About

  ## Out of scope
  - Keine Kundenzitate oder Bewertungen
  - Keine Bewertungsplattform-Integration
  - Keine Logos, Wappen oder Siegel
  - Keine namentlichen Referenzen zu Institutionen
  - Keine animierten Kennzahlen oder Counter

  ## Tasks
  1. **Startseite – Vertrauensband einfügen** — Nach der „Warum uns"-Sektion in Home.tsx einen neuen Abschnitt (bg-zinc-950) mit 4 ruhigen Textkacheln einfügen. Keine Zahlen oder Counter – nur Titel und kurzer natürlicher Fließtext. Allgemein-vertrauensbildend, kein Namedropping.

  2. **Über-uns-Seite – Erfahrungsabsatz und vierte Kachel** — In About.tsx den „Wer wir sind"-Fließtext um einen natürlichen Absatz über die Auftraggeberbreite erweitern. Die 3er-Kachel-Reihe auf 4 Spalten (lg:grid-cols-4) erweitern, neue Kachel konkret aber sachlich formuliert.

  3. **Leistungs-Detailseiten – Dezenter Sidebar-Hinweis** — In ServiceDetail.tsx am Ende des Sidebar-Blocks einen kleinen Vertrauenshinweis (2 Sätze max.) einfügen – andere Formulierung als auf den anderen Seiten, subtil und seriös.

  ## Relevant files
  - `artifacts/umzuege-website/src/pages/Home.tsx:119-180`
  - `artifacts/umzuege-website/src/pages/About.tsx:61-92`
  - `artifacts/umzuege-website/src/pages/ServiceDetail.tsx:89-122`