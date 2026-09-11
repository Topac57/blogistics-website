import { SEOHead } from '@/components/SEOHead';
import { LockedFiles } from '@/components/decor/Silhouettes';
import { company } from '@/data/company';
import { seoData } from '@/data/seo';

export function Datenschutz() {
  return (
    <>
      <SEOHead title={seoData.pages.datenschutz.title} description={seoData.pages.datenschutz.description} path={seoData.pages.datenschutz.path} />
      
      <section className="relative overflow-hidden py-20 md:py-24 bg-background bg-mesh-soft min-h-[70vh]">
        <LockedFiles className="pointer-events-none absolute inset-x-0 bottom-0 h-[110px] md:h-[150px] text-tint-sky/20 mask-fade-top" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 break-words prose prose-stone prose-headings:font-display prose-headings:text-ink prose-a:text-amber-ink prose-a:no-underline hover:prose-a:underline prose-strong:text-ink">
          <h1>Datenschutzerklärung</h1>
          
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

          <h3>Datenerfassung auf dieser Website</h3>
          <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>

          <h2>2. Hosting</h2>
          <p>Wir hosten die Inhalte unserer Website bei einem externen Anbieter. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>

          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
            {company.name}<br />
            {company.owner}<br />
            {company.address.street}<br />
            {company.address.city}<br />
            Telefon: {company.phone}<br />
            E-Mail: {company.email}
          </p>

          <h2>4. Datenerfassung auf dieser Website</h2>
          <h3>Kontaktformular</h3>
          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</p>

          {/* Hinweis für Entwickler: Eine anwaltliche Prüfung der Datenschutzerklärung wird für den Live-Betrieb empfohlen. */}
        </div>
      </section>
    </>
  );
}
