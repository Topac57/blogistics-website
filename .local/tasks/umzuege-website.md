# Vollständige Unternehmenswebseite Umzüge & Transporte

  ## What & Why
  Erstelle eine vollständige, produktionsnahe React+Vite Webseite für "Tolga-Baris Coskun Umzüge & Transporte" aus Monheim am Rhein. Ziel: Neukundengewinnung, Vertrauen aufbauen, professioneller lokaler Marktauftritt.

  Unternehmensdaten (zentral in src/data/company.ts):
  - Name: Tolga-Baris Coskun Umzüge & Transporte
  - Adresse: Mittelstraße 11, 40789 Monheim am Rhein
  - Telefon: +49 155 60781263 (klickbarer tel:-Link)
  - E-Mail: tolga-baris.coskun@hotmail.de

  ## Done looks like
  - React+Vite Artifact unter previewPath "/" läuft und ist vollständig bedienbar
  - Alle Seiten vollständig ausgebaut — kein Platzhalterinhalt, kein Lorem Ipsum, keine halbfertigen Bereiche, keine leeren Bildflächen ohne Struktur:
    /, /leistungen, /leistungen/umzuege, /leistungen/entruempelung, /leistungen/transporte, /leistungen/montage, /leistungen/haushaltsaufloesung, /ueber-uns, /kontakt, /faq, /impressum, /datenschutz, /agb, + 404-Seite
  - Genau 6 Leistungskarten auf Startseite: Umzüge, Entrümpelung, Transporte, Möbelmontage, Haushaltsauflösung, Tragearbeiten/Sonstiges — konsistent mit den 5 Detailseiten (Tragearbeiten verlinkt zu /kontakt statt eigener Unterseite, das ist bewusst und sichtbar kommuniziert)
  - Header (sticky): Logo, Telefonnummer als tel:-Link, Navigation: Startseite | Leistungen | Über uns | FAQ | Kontakt, mobiles Hamburger-Menü
  - Footer: Firmenname, Adresse, Tel, E-Mail + Links: Startseite, Leistungen, Über uns, FAQ, Kontakt, Impressum, Datenschutz, AGB
  - Kontaktformular exakt mit diesen Feldern: Name*, Telefonnummer*, E-Mail*, Leistungsart (Dropdown)*, gewünschter Termin (Date)*, Nachricht*, DSGVO-Checkbox* — Frontend-Validierung, Pflichtfeldkennzeichnung, Fehlermeldungen, seriöse Erfolgsmeldung
  - 404-Seite: freundliche Fehlermeldung, CTA zurück zur Startseite, Telefonnummer sichtbar
  - Alle Texte: professionell, konkret, lokal (Monheim am Rhein und Umgebung), vertrauenswürdig, keine Marketingfloskeln
  - Zentralisierte Datendateien: src/data/company.ts, src/data/services.ts, src/data/faq.ts, src/data/seo.ts
  - SEO via react-helmet-async: individueller title + meta description + Open Graph pro Seite
  - Logo (attached_assets/logo_1774606655574.png via @assets-Import) in Header und Footer
  - Farbschema: Schwarz/Gelb/Weiß — gelb nur für Buttons, Akzente, Icons
  - Accessibility: semantisches HTML, Labels, Tastaturbedienbarkeit, gute Kontraste

  ## Out of scope
  - Backend / Datenbank (keine echte Formularübermittlung)
  - CMS-Integration
  - Online-Bezahlung

  ## Tasks
  1. **Artifact erstellen & Dependencies** — React+Vite Artifact mit Slug "umzuege-website" und previewPath "/" anlegen. react-router-dom und react-helmet-async installieren.

  2. **Zentrale Datendateien** — src/data/company.ts (alle Firmendaten), src/data/services.ts (6 Leistungen mit Icon, Titel, Beschreibung, Slug, ob Unterseite vorhanden), src/data/faq.ts (12+ FAQs zu Ablauf, Terminen, Einsatzgebiet, Entrümpelung, Montage, Transport, Kontakt), src/data/seo.ts (SEO-Metadaten pro Route).

  3. **Layout-Komponenten** — Header (sticky, Logo, tel:-Link, Desktop-Nav mit den 5 Hauptpunkten, Hamburger-Menü mobil), Footer (Firmendaten, alle Links aufgeteilt in Hauptnavigation + Rechtliches), SEOHead (react-helmet-async), PageHero, SectionContainer, CTAButton, ServiceCard, FAQAccordion (keyboard-navigierbar), ContactForm (alle 7 Felder, Validierung, Erfolgsmeldung).

  4. **Routing** — React Router mit allen 14 Routen + 404-Catch-All.

  5. **404-Seite** — Freundliche Fehlermeldung auf Deutsch, CTA "Zurück zur Startseite", Telefonnummer sichtbar, konsistentes Design.

  6. **Startseite** — Hero (Headline, Subheadline, 2 CTAs "Jetzt anfragen" + "Direkt anrufen"), 6 Leistungskarten (konsistent mit Detailseiten), Warum-wir (6 Vorteile), Ablauf (4 Schritte), Über-uns-Kurzbereich, Kontaktformular, Vertrauensbereich, FAQ-Teaser.

  7. **Leistungsseiten** — Übersichtsseite /leistungen plus 5 Detailseiten (Umzüge, Entrümpelung, Transporte, Möbelmontage, Haushaltsauflösung) — jeweils mit PageHero, Einführung, Leistungsdetails, Vorteile, CTA-Bereich. Tragearbeiten auf Startseite verweist explizit auf /kontakt.

  8. **Weitere Seiten** — Über uns (glaubwürdig, lokal formuliert), Kontakt (Formular + Adressblock mit allen Kontaktdaten), FAQ (Akkordeon, alle relevanten Themen), Impressum, Datenschutz, AGB (rechtliche Hinweise nur als Code-Kommentar, nicht im sichtbaren Frontend).

  9. **Design & SEO** — Tailwind Custom-Farben, dezente Animationen, Mobile-First, react-helmet-async für alle Seiten, sinnvolle Alt-Texte, semantisches HTML.

  ## Relevant files
  - `attached_assets/logo_1774606655574.png` (Logo, importierbar als @assets/logo_1774606655574.png)
  - `attached_assets/Pasted-Erstelle-eine-vollst-ndige-moderne-responsive-und-conve_1774606287347.txt`
  - `attached_assets/Pasted-Setze-das-Projekt-jetzt-vollst-ndig-und-sauber-um-Arbei_1774606514750.txt`
  - `attached_assets/Pasted-Erg-nze-und-verbessere-den-aktuellen-Plan-mit-folgenden_1774606646930.txt`
  