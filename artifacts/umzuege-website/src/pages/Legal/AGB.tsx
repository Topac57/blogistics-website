import { SEOHead } from '@/components/SEOHead';
import { ContractPapers } from '@/components/decor/Silhouettes';
import { company } from '@/data/company';
import { seoData } from '@/data/seo';

export function AGB() {
  return (
    <>
      <SEOHead title={seoData.pages.agb.title} description={seoData.pages.agb.description} path={seoData.pages.agb.path} />
      
      <section className="relative overflow-hidden py-20 md:py-24 bg-background bg-mesh-soft min-h-[70vh]">
        <ContractPapers className="pointer-events-none absolute inset-x-0 bottom-0 h-[110px] md:h-[150px] text-tint-sky/20 mask-fade-top" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 break-words prose prose-stone prose-headings:font-display prose-headings:text-ink prose-a:text-amber-ink prose-a:no-underline hover:prose-a:underline prose-strong:text-ink">
          <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
          <p>Stand: März 2026</p>

          <h2>1. Geltungsbereich</h2>
          <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über Umzugs-, Entrümpelungs- und Transportleistungen sowie damit verbundene Nebenleistungen, die zwischen {company.name}, {company.address.street}, {company.address.city} (nachfolgend "Auftragnehmer") und dem Kunden (nachfolgend "Auftraggeber") geschlossen werden.</p>

          <h2>2. Vertragsschluss</h2>
          <p>Angebote des Auftragnehmers sind freibleibend. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung (auch per E-Mail) oder durch Beginn der Leistungserbringung durch den Auftragnehmer zustande.</p>

          <h2>3. Pflichten des Auftragnehmers</h2>
          <p>Der Auftragnehmer verpflichtet sich, die vereinbarten Leistungen fachgerecht und mit der üblichen Sorgfalt auszuführen. Er stellt das notwendige Personal sowie geeignete Transportmittel und Werkzeuge zur Verfügung.</p>

          <h2>4. Pflichten des Auftraggebers</h2>
          <p>Der Auftraggeber hat den Auftragnehmer rechtzeitig über alle Umstände zu informieren, die für die Durchführung des Auftrags von Bedeutung sind (z.B. enge Treppenhäuser, fehlende Parkmöglichkeiten, besonders schwere oder wertvolle Gegenstände). Der Auftraggeber ist für das Einholen eventuell notwendiger behördlicher Genehmigungen (z.B. Halteverbotszonen) verantwortlich, sofern dies nicht ausdrücklich als Leistung des Auftragnehmers vereinbart wurde.</p>

          <h2>5. Preise und Zahlungsbedingungen</h2>
          <p>Alle vereinbarten Preise verstehen sich – sofern nicht anders angegeben – inklusive der gesetzlichen Mehrwertsteuer. Rechnungen sind nach erbrachter Leistung sofort und ohne Abzug fällig. Bei umfangreichen Aufträgen kann der Auftragnehmer eine angemessene Anzahlung fordern.</p>

          <h2>6. Haftung und Haftungsbeschränkungen</h2>
          <p>Der Auftragnehmer haftet im Rahmen der gesetzlichen Bestimmungen (HGB). Die Haftung für Verlust oder Beschädigung des Umzugsgutes ist gemäß § 451e HGB begrenzt auf 620 Euro je Kubikmeter Rauminhalt. Für besonders wertvolle Gegenstände (z.B. Antiquitäten, Bargeld, Schmuck) haftet der Auftragnehmer nur, wenn diese explizit deklariert und gesondert versichert wurden.</p>

          <h2>7. Stornierung und Kündigung</h2>
          <p>Bei Kündigung oder Stornierung des Auftrags durch den Auftraggeber werden Stornogebühren fällig. Diese betragen bei Absage bis 14 Tage vor Termin 20%, bis 7 Tage vor Termin 50% und bei weniger als 3 Tagen 80% der vereinbarten Auftragssumme.</p>

          <h2>8. Schlussbestimmungen</h2>
          <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Gerichtsstand für alle Streitigkeiten ist, soweit gesetzlich zulässig, der Sitz des Auftragnehmers.</p>

          {/* Hinweis für Entwickler: Eine anwaltliche Prüfung der AGB wird für den Live-Betrieb dringend empfohlen. */}
        </div>
      </section>
    </>
  );
}
