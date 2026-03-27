import { SEOHead } from '@/components/SEOHead';
import { company } from '@/data/company';
import { seoData } from '@/data/seo';

export function Impressum() {
  return (
    <>
      <SEOHead title={seoData.pages.impressum.title} description={seoData.pages.impressum.description} path={seoData.pages.impressum.path} />
      
      <section className="py-24 bg-white min-h-[70vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-zinc prose-headings:font-display">
          <h1>Impressum</h1>
          
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            {company.name}<br />
            Inhaber: {company.owner}<br />
            {company.address.street}<br />
            {company.address.city}
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: {company.phone}<br />
            E-Mail: {company.email}
          </p>

          {/* Hinweis: USt-IdNr. ggf. nach Registrierung eintragen */}

          <h2>Berufsbezeichnung</h2>
          <p>
            Berufsbezeichnung: Transport- und Umzugsunternehmen<br />
            Zuständiges Land: {company.address.country}
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
