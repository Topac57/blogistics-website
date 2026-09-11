import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Users, Handshake, Building2, ArrowRight, Phone } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { PageHero } from '@/components/PageHero';
import { CitySkyline, DepotScene } from '@/components/decor/Silhouettes';
import { company } from '@/data/company';
import { seoData } from '@/data/seo';
import logo from '@/assets/logo.png';

const values = [
  {
    icon: Handshake,
    title: 'Wir sagen zu, was wir halten können',
    desc: 'Lieber ein ehrliches „an dem Tag schaffen wir das nicht“ als ein Termin, der am Ende platzt. Das kostet uns manchmal einen Auftrag und erspart Ihnen einen schlechten Tag.'
  },
  {
    icon: Users,
    title: 'Immer dieselben Gesichter',
    desc: 'Wir arbeiten mit einem festen Stamm statt mit wechselnden Tagesaushilfen. Wer weiß, wie der Kollege trägt, arbeitet schneller und vorsichtiger.'
  },
  {
    icon: MapPin,
    title: 'Wir kennen die Gegend',
    desc: 'Altbautreppenhäuser in Bilk, Innenhöfe in der Altstadt, Parksituationen in Oberkassel: Ortskenntnis spart am Umzugstag mehr Zeit als jedes zusätzliche Paar Hände.'
  },
  {
    icon: Building2,
    title: 'Vom Studentenzimmer bis zum Amt',
    desc: 'Privat, gewerblich und öffentlich – diese Mischung zwingt uns zu sauberer Dokumentation und flexibler Planung. Davon profitieren am Ende alle Auftraggeber.'
  }
];

export function About() {
  return (
    <>
      <SEOHead
        title={seoData.pages.ueberUns.title}
        description={seoData.pages.ueberUns.description}
        path={seoData.pages.ueberUns.path}
      />

      <PageHero
        eyebrow="Über uns"
        title={<>Ein Betrieb, kein <span className="marker">Callcenter</span></>}
        lead={`${company.name} ist ein kleines Unternehmen aus Monheim am Rhein. Wer bei uns anruft, spricht mit jemandem, der am Umzugstag selbst mit anpackt.`}
        decor={DepotScene}
      />

      <section className="section relative overflow-hidden bg-background bg-mesh-soft">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="eyebrow mb-5">Wer wir sind</span>
              <div className="space-y-5 text-[17px] text-muted-foreground leading-relaxed">
                <p>
                  Hinter <strong className="text-ink font-semibold">{company.name}</strong> steht
                  {' '}{company.owner} mit einem festen Team. Unsere Geschäftsadresse ist Monheim
                  am Rhein, gearbeitet wird überwiegend in Düsseldorf und dem direkten Umland –
                  nah genug, um auch mal kurzfristig einzuspringen.
                </p>
                <p>
                  Ein Umzug, eine Entrümpelung oder eine Haushaltsauflösung sind keine anonymen
                  Dienstleistungen. Fremde Menschen tragen Ihre Sachen durch Ihre Wohnung, oft in
                  einer Lebenssituation, die ohnehin gerade anstrengend ist. Deshalb legen wir
                  Wert auf zwei Dinge, die sich nicht in eine Preisliste schreiben lassen:
                  Verlässlichkeit und ein anständiger Umgangston.
                </p>
                <p>
                  Praktisch heißt das: Wir schauen uns jeden Auftrag vorher an, wir sagen klar,
                  was geht und was nicht, und wir liefern schriftlich ab, was wir besprochen
                  haben. Wenn doch mal etwas schiefgeht, erfahren Sie es von uns – und nicht
                  erst, wenn der Wagen nicht vor der Tür steht.
                </p>
                <p>
                  Unser Kundenstamm ist bewusst breit: viele Privathaushalte, dazu Unternehmen
                  und regelmäßig auch Einrichtungen der öffentlichen Hand im Raum Düsseldorf.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-9">
                <Link to="/kontakt" className="btn-primary">
                  Kennenlernen & Besichtigung
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="btn-outline">
                  <Phone className="w-4 h-4 text-amber-ink" />
                  {company.phoneDisplay}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="relative">
                <div className="absolute -inset-2.5 bg-primary/15 rounded-[1.9rem] rotate-[1.5deg]" />
                <div className="relative rounded-3xl border border-card-border bg-card aspect-square flex items-center justify-center overflow-hidden">
                  <img
                    src={logo}
                    alt={company.name}
                    className="w-3/5 object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              <dl className="card-soft divide-y divide-card-border">
                {[
                  { t: 'Inhaber', v: company.owner },
                  { t: 'Sitz', v: `${company.address.street}, ${company.address.city}` },
                  { t: 'Kerngebiet', v: 'Düsseldorf & direktes Umland' },
                  { t: 'Erreichbar', v: company.workingHours }
                ].map((row) => (
                  <div key={row.t} className="flex justify-between gap-4 px-6 py-3.5">
                    <dt className="text-sm text-muted-foreground shrink-0">{row.t}</dt>
                    <dd className="text-sm font-medium text-ink text-right">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>

          {/* Haltung */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mb-12"
            >
              <span className="eyebrow mb-5">Wie wir arbeiten</span>
              <h2 className="text-3xl md:text-[2.7rem] leading-tight font-bold">
                Vier Dinge, auf die wir uns festlegen
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                  className="card-soft p-8"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-soft border border-primary-line flex items-center justify-center mb-5 text-amber-ink">
                    <value.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 leading-snug">{value.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Einsatzgebiet */}
      <section className="section relative overflow-hidden bg-surface border-t border-card-border">
        <CitySkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-[130px] md:h-[180px] text-tint-sky/20 mask-fade-top" />
        <div className="shell relative">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
            <div>
              <span className="eyebrow mb-5">Wo wir arbeiten</span>
              <h2 className="text-3xl md:text-4xl leading-tight font-bold mb-5">
                Düsseldorf und das Umland
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {company.serviceArea.note}
              </p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {company.serviceArea.cities.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2 rounded-xl border border-card-border bg-card px-3.5 py-2.5 text-sm font-medium text-ink-soft"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-ink shrink-0" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
