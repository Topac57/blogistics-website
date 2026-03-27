import { SEOHead } from '@/components/SEOHead';
import { company } from '@/data/company';

export function Impressum() {
  return (
    <>
      <SEOHead title="Impressum" description="Impressum der Firma Tolga-Baris Coskun Umzüge & Transporte." />
      
      <section className="py-24 bg-white min-h-[70vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-zinc prose-headings:font-display">
          <h1>Impressum</h1>
          
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            {company.name}<br />
            {company.owner}<br />
            {company.address.street}<br />
            {company.address.city}
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: {company.phone}<br />
            E-Mail: {company.email}
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            [Steuernummer / USt-IdNr. - bei Bedarf einfügen]
          </p>

          <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            Berufsbezeichnung: Transport- und Umzugsunternehmen<br />
            Zuständige Kammer: [Ggf. IHK eintragen]<br />
            Verliehen in: {company.address.country}
          </p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          {/* Hinweis für Entwickler: Eine anwaltliche Prüfung des Impressums wird für den Live-Betrieb empfohlen. */}
        </div>
      </section>
    </>
  );
}
