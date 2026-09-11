import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle2, ShieldCheck, Clock, Receipt, MapPin,
  Users, Sparkles, Phone, FileText, CalendarCheck, Truck, Quote
} from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { ContactForm } from '@/components/ContactForm';
import { CitySkyline, MoversCarrying, MoverHandTruck, MovingVan } from '@/components/decor/Silhouettes';
import { services } from '@/data/services';
import { company } from '@/data/company';
import { faqs } from '@/data/faq';
import { seoData } from '@/data/seo';
import logo from '@/assets/logo.png';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' as const }
};

const steps = [
  {
    icon: Phone,
    num: '01',
    title: 'Sie melden sich',
    desc: 'Kurz anrufen oder das Formular ausfüllen. Wir rufen in der Regel am selben Werktag zurück.'
  },
  {
    icon: CalendarCheck,
    num: '02',
    title: 'Wir schauen es uns an',
    desc: 'Kostenlose Besichtigung vor Ort – oder per Videoanruf, wenn es schneller gehen soll.'
  },
  {
    icon: FileText,
    num: '03',
    title: 'Festpreis schriftlich',
    desc: 'Sie bekommen ein Angebot, in dem alles steht. Was drinsteht, gilt – auch am Umzugstag.'
  },
  {
    icon: Truck,
    num: '04',
    title: 'Wir führen aus',
    desc: 'Pünktlich, mit festem Team und ohne Diskussionen. Übergabe erst, wenn Sie zufrieden sind.'
  }
];

export function Home() {
  // Vier Fragen für die Startseite – direkt aus der FAQ-Datenquelle, damit nichts auseinanderläuft
  const faqTeaser = [
    faqs.find((f) => f.question.startsWith('Was bestimmt den Preis')),
    faqs.find((f) => f.question.startsWith('Wie viel Vorlauf')),
    faqs.find((f) => f.question.startsWith('Sind meine Möbel')),
    faqs.find((f) => f.question.startsWith('Bieten Sie Festpreise'))
  ].filter(Boolean) as typeof faqs;

  return (
    <>
      <SEOHead
        title={seoData.pages.home.title}
        description={seoData.pages.home.description}
        path={seoData.pages.home.path}
      />

      {/* ── HERO – mittig, mit Skyline-Horizont ──────────────── */}
      <section className="relative overflow-hidden bg-background bg-mesh grain pt-14 md:pt-20">
        <div className="shell relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="eyebrow mb-7 justify-center">Düsseldorf & Rheinland</span>

            <h1 className="mx-auto max-w-4xl text-[2.6rem] leading-[1.06] sm:text-[3.4rem] lg:text-[4.4rem] font-bold text-ink mb-7">
              Umziehen, ohne sich{' '}
              <span className="marker">selbst zu tragen.</span>
            </h1>

            <p className="lead mx-auto max-w-2xl mb-9">
              Umzüge, Entrümpelungen und Transporte im Raum Düsseldorf – mit kostenloser
              Besichtigung, schriftlichem Festpreis und einem Team, das schon zusammen
              gearbeitet hat, bevor es bei Ihnen klingelt.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-9">
              <a href="#anfrage" className="btn-primary text-base px-8 py-4">
                Kostenloses Angebot anfordern
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="btn-outline text-base px-8 py-4"
              >
                <Phone className="w-5 h-5 text-amber-ink" />
                {company.phoneDisplay}
              </a>
            </div>

            <div className="flex flex-wrap gap-2.5 justify-center">
              {['Besichtigung kostenlos', 'Festpreis schriftlich', 'Rückmeldung am selben Werktag'].map((t) => (
                <span key={t} className="chip">
                  <CheckCircle2 className="w-4 h-4 text-amber-ink" />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skyline als Horizontlinie zwischen Text und Foto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="relative z-0 mt-14 md:mt-16"
          aria-hidden="true"
        >
          <CitySkyline className="w-full h-[120px] md:h-[190px] text-tint-sky/25" />
          <div className="h-px bg-gradient-to-r from-transparent via-card-border to-transparent" />
        </motion.div>

        {/* Foto überlappt den Horizont – gibt Tiefe */}
        <div className="shell relative z-10 -mt-10 md:-mt-20 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative mx-auto max-w-5xl"
          >
            <div className="absolute -inset-2.5 md:-inset-3 bg-primary/20 rounded-[2rem] rotate-[0.8deg]" />
            <img
              src="/hero-duesseldorf.png"
              alt="Umzugswagen von B Logistics am Rheinufer in Düsseldorf, beladen mit Umzugskartons"
              className="relative rounded-[1.5rem] md:rounded-[1.75rem] w-full aspect-[16/10] md:aspect-[21/9] object-cover shadow-[0_45px_90px_-45px_rgba(60,45,10,0.55)]"
            />
            <div className="relative sm:absolute sm:-bottom-6 sm:left-6 md:left-8 mt-4 sm:mt-0 glass-panel rounded-2xl px-5 py-4 flex items-center gap-4 max-w-xs">
              <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-ink leading-tight">Regional unterwegs</p>
                <p className="text-sm text-muted-foreground leading-snug">
                  Düsseldorf, Neuss, Ratingen & Umland
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VERSPRECHEN ──────────────────────────────────────── */}
      <section className="relative overflow-hidden border-y border-card-border bg-surface">
        <div className="absolute inset-0 bg-cartons opacity-[0.07]" aria-hidden="true" />
        <div className="shell relative py-9 md:py-11">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
            {company.promises.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-ink shrink-0 mt-0.5" />
                <span className="text-[15px] font-medium text-ink-soft leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── LEISTUNGEN ───────────────────────────────────────── */}
      <section className="section relative overflow-hidden bg-background bg-mesh-soft">
        <div className="shell relative">
          <motion.div {...fadeUp} className="max-w-2xl mb-14">
            <span className="eyebrow mb-5">Leistungen</span>
            <h2 className="text-3xl md:text-[2.7rem] leading-tight font-bold mb-5">
              Sechs Dinge, die wir wirklich können
            </h2>
            <p className="lead">
              Wir sind kein Konzern mit Filialliste, sondern ein kleiner Betrieb mit einem klar
              umrissenen Leistungsspektrum. Genau das, was rund um Wohnung, Haus und Büro
              tatsächlich anfällt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              const to = service.hasDetailPage ? `/leistungen/${service.slug}` : '/kontakt';
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
                >
                  <Link to={to} className="card-lift group flex flex-col h-full p-7">
                    <div className="w-12 h-12 rounded-xl bg-primary-soft border border-primary-line flex items-center justify-center mb-6 text-amber-ink transition-colors group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2.5">{service.title}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed mb-5 flex-grow">
                      {service.shortDescription}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground/80 mb-4 pb-4 border-b border-card-border">
                      {service.audience}
                    </p>
                    <span className="link-arrow text-[15px]">
                      {service.hasDetailPage ? 'Details ansehen' : 'Direkt anfragen'}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ABLAUF ───────────────────────────────────────────── */}
      <section className="section relative overflow-hidden bg-surface bg-mesh-warm border-y border-card-border">
        {/* Zwei Helfer mit Karton – in der freien Fläche rechts neben der Überschrift,
            nicht hinter den Karten, sonst schauen nur die Beine heraus */}
        <MoversCarrying
          className="pointer-events-none absolute top-16 right-2 xl:right-8 w-[320px] xl:w-[400px] text-ink/[0.07] hidden lg:block"
        />

        <div className="shell relative">
          <motion.div {...fadeUp} className="max-w-2xl mb-14">
            <span className="eyebrow mb-5">So läuft es ab</span>
            <h2 className="text-3xl md:text-[2.7rem] leading-tight font-bold mb-5">
              Vier Schritte, keine Überraschungen
            </h2>
            <p className="lead">
              Vom ersten Anruf bis zur Schlüsselübergabe wissen Sie jederzeit, was als Nächstes
              passiert – und was es kostet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="card-soft p-7 relative overflow-hidden backdrop-blur-sm"
              >
                <span className="absolute -top-3 -right-1 text-[5rem] font-display font-extrabold text-primary/15 leading-none select-none">
                  {step.num}
                </span>
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-ink text-primary flex items-center justify-center mb-5">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2.5">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREIS-TRANSPARENZ ────────────────────────────────── */}
      <section className="section relative overflow-hidden bg-background">
        <div className="shell relative">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start">
            <motion.div {...fadeUp}>
              <span className="eyebrow mb-5">Preise</span>
              <h2 className="text-3xl md:text-[2.7rem] leading-tight font-bold mb-5">
                Warum wir keinen Preis ins Netz schreiben
              </h2>
              <div className="space-y-4 text-[17px] text-muted-foreground leading-relaxed">
                <p>
                  Jede Pauschale, die Sie online sehen, ist entweder großzügig nach oben
                  gerundet oder sie hält der Realität nicht stand. Zwei gleich große Wohnungen
                  können sich im Aufwand leicht verdoppeln – vierter Stock ohne Aufzug,
                  Altbautreppe, keine Parkmöglichkeit vor der Tür.
                </p>
                <p>
                  Deshalb schauen wir vorher hin. Die Besichtigung kostet nichts, dauert meist
                  keine halbe Stunde und ist die Grundlage für einen Festpreis, den wir auch
                  halten.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-primary-line bg-primary-soft p-6">
                <div className="flex items-start gap-3">
                  <Receipt className="w-5 h-5 text-amber-ink shrink-0 mt-0.5" />
                  <p className="text-[15px] text-ink leading-relaxed">
                    <strong className="font-semibold">Tipp:</strong> Ein beruflich bedingter Umzug
                    ist häufig steuerlich absetzbar. Bitten Sie um eine Rechnung und zahlen Sie
                    per Überweisung – das Finanzamt verlangt einen Zahlungsnachweis.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="card-soft p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-mesh-warm opacity-70 pointer-events-none" aria-hidden="true" />
              <div className="relative">
                <h3 className="text-xl font-bold mb-1">Das bestimmt Ihren Preis</h3>
                <p className="text-sm text-muted-foreground mb-7">
                  Die vier Faktoren, nach denen wir kalkulieren – in dieser Reihenfolge.
                </p>
                <ol className="space-y-5">
                  {[
                    { t: 'Volumen', d: 'Wie viel muss bewegt werden – gemessen in Kubikmetern, nicht in Quadratmetern.' },
                    { t: 'Zugang', d: 'Etage, Aufzug, Treppenhausbreite und Parkmöglichkeit vor der Tür.' },
                    { t: 'Strecke', d: 'Entfernung zwischen beiden Adressen und daraus folgende Fahrzeiten.' },
                    { t: 'Zusatzleistungen', d: 'Packen, Möbelmontage, Halteverbotszone, Entsorgung, Endreinigung.' }
                  ].map((f, i) => (
                    <li key={f.t} className="flex gap-4">
                      <span className="w-7 h-7 rounded-full bg-ink text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-ink mb-0.5">{f.t}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <Link to="/kontakt" className="btn-ink w-full mt-8">
                  Besichtigung vereinbaren
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WARUM WIR ────────────────────────────────────────── */}
      <section className="section relative overflow-hidden bg-surface border-y border-card-border">
        <div className="shell relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="eyebrow mb-5">Warum wir</span>
              <h2 className="text-3xl md:text-[2.7rem] leading-tight font-bold mb-5">
                Klein genug, dass Sie mit dem Chef sprechen
              </h2>
              <p className="lead mb-9">
                Bei uns nimmt dieselbe Person den Anruf entgegen, die auch am Umzugstag vor Ort
                ist. Kein Callcenter, keine wechselnden Subunternehmer, keine Nummer, unter der
                niemand mehr rangeht, wenn etwas zu klären ist.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { icon: Users, title: 'Festes Team', desc: 'Eingespielte Leute statt Tagesaushilfen – das merkt man an Tempo und Umgang.' },
                  { icon: Clock, title: 'Termintreue', desc: 'Wir planen bewusst Puffer ein, damit Ihr Termin nicht am Vorauftrag hängt.' },
                  { icon: ShieldCheck, title: 'Abgesichert', desc: 'Transport- und Betriebshaftpflichtversicherung. Schäden regeln wir, statt zu diskutieren.' },
                  { icon: Sparkles, title: 'Besenrein', desc: 'Übergabefertig zurücklassen ist bei uns Standard, keine Zusatzposition.' }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-card border border-card-border flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-amber-ink" />
                    </div>
                    <div>
                      <h3 className="font-bold text-ink mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Inhaber-Panel statt Stockfoto – ein echtes Bild vom Team wäre hier
                die beste Ergänzung, ein beliebiges Symbolbild hilft niemandem */}
            <motion.div {...fadeUp} className="relative">
              <div className="absolute -inset-3 bg-tint-sky/10 rounded-[2rem] -rotate-[1deg]" aria-hidden="true" />
              <div className="relative card-soft p-8 md:p-11 shadow-[0_34px_80px_-50px_rgba(60,45,10,0.55)] overflow-hidden">
                <div className="absolute inset-0 bg-mesh-warm opacity-80 pointer-events-none" aria-hidden="true" />
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-background border border-card-border flex items-center justify-center mb-8">
                    <img src={logo} alt="B Logistics" className="w-full h-full object-contain p-2" />
                  </div>

                  <Quote className="w-9 h-9 text-primary mb-5" />
                  <blockquote className="text-xl md:text-2xl font-display font-semibold text-ink leading-snug mb-6">
                    Eine Ansprechperson vom ersten Anruf bis zur Schlüsselübergabe – das ist
                    kein Versprechen, sondern schlicht die Größe unseres Betriebs.
                  </blockquote>
                  <p className="text-[15px] text-muted-foreground">
                    <span className="font-semibold text-ink">{company.owner}</span> · Inhaber
                  </p>

                  <div className="mt-8 pt-7 border-t border-card-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      Fragen vorab? Rufen Sie einfach an – Sie landen direkt richtig.
                    </p>
                    <a
                      href={`tel:${company.phone.replace(/\s/g, '')}`}
                      className="btn-outline w-full sm:w-auto"
                    >
                      <Phone className="w-4 h-4 text-amber-ink" />
                      {company.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EINSATZGEBIET ────────────────────────────────────── */}
      <section className="section relative overflow-hidden bg-background">
        <div className="shell relative">
          <motion.div
            {...fadeUp}
            className="relative rounded-3xl border border-card-border bg-card overflow-hidden"
          >
            <div className="absolute inset-0 grid-paper opacity-60" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-br from-tint-sky/8 via-transparent to-primary/10" aria-hidden="true" />
            {/* Skyline füllt den unteren Rand der Karte */}
            <CitySkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-[150px] md:h-[210px] text-tint-sky/20 mask-fade-top" />

            <div className="relative p-8 md:p-12 lg:p-14">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-start">
                <div>
                  <span className="eyebrow mb-5">Einsatzgebiet</span>
                  <h2 className="text-3xl md:text-4xl leading-tight font-bold mb-4">
                    Vor Ort im Rheinland
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Kurze Wege heißen kurze Reaktionszeiten. Unser Kerngebiet ist Düsseldorf und
                    das direkte Umland – dort kennen wir die Straßen, die Treppenhäuser und die
                    Stellen, an denen kein LKW hinkommt.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {company.serviceArea.note}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {company.serviceArea.cities.map((city) => (
                    <li
                      key={city}
                      className="flex items-center gap-2 rounded-xl border border-card-border bg-background/85 backdrop-blur-sm px-3.5 py-2.5 text-sm font-medium text-ink-soft"
                    >
                      <MapPin className="w-3.5 h-3.5 text-amber-ink shrink-0" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── AUFTRAGGEBER ─────────────────────────────────────── */}
      <section className="section relative overflow-hidden bg-surface bg-mesh-soft border-y border-card-border">
        {/* Transporter fährt auf der unteren Sektionskante */}
        <MovingVan
          className="pointer-events-none absolute bottom-0 right-6 xl:right-12 w-[230px] xl:w-[300px] text-ink/[0.07] hidden md:block"
        />

        <div className="shell relative">
          <motion.div {...fadeUp} className="max-w-2xl mb-12">
            <span className="eyebrow mb-5">Auftraggeber</span>
            <h2 className="text-3xl md:text-[2.7rem] leading-tight font-bold">
              Für wen wir arbeiten
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                accent: 'bg-primary',
                title: 'Privathaushalte',
                desc: 'Vom Studenten-Umzug bis zur Haushaltsauflösung nach einem Trauerfall. Die meisten unserer Aufträge und der Grund, warum wir mit sensiblen Situationen umgehen können.'
              },
              {
                accent: 'bg-tint-sky',
                title: 'Unternehmen',
                desc: 'Büroumzüge, Standortverlagerungen und regelmäßige Transporte. Auf Wunsch außerhalb der Geschäftszeiten, damit der Betrieb weiterläuft.'
              },
              {
                accent: 'bg-tint-peach',
                title: 'Öffentliche Stellen',
                desc: 'Aufträge für kommunale und öffentliche Einrichtungen im Raum Düsseldorf – mit der Dokumentation und Termintreue, die dort erwartet wird.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="card-soft p-8 backdrop-blur-sm"
              >
                <div className={`w-10 h-1 rounded-full mb-6 ${item.accent}`} />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ TEASER ───────────────────────────────────────── */}
      <section className="section relative overflow-hidden bg-background">
        {/* Helfer mit Sackkarre in der freien Fläche rechts oben */}
        <MoverHandTruck
          className="pointer-events-none absolute top-20 right-4 xl:right-10 w-[190px] xl:w-[240px] text-ink/[0.07] hidden lg:block"
        />

        <div className="shell relative">
          <motion.div {...fadeUp} className="max-w-2xl mb-12">
            <span className="eyebrow mb-5">Häufige Fragen</span>
            <h2 className="text-3xl md:text-[2.7rem] leading-tight font-bold">
              Das wird uns am häufigsten gefragt
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {faqTeaser.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                className="card-soft p-7"
              >
                <h3 className="font-bold text-ink mb-3 text-lg leading-snug">{faq.question}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <Link to="/faq" className="link-arrow text-[17px]">
            Alle {faqs.length} Fragen ansehen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ── ANFRAGE ──────────────────────────────────────────── */}
      <section
        id="anfrage"
        className="section relative overflow-hidden bg-surface bg-mesh grain border-t border-card-border scroll-mt-24"
      >
        <div className="shell relative">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
            <motion.div {...fadeUp} className="lg:sticky lg:top-28">
              <span className="eyebrow mb-5">Anfrage</span>
              <h2 className="text-3xl md:text-[2.7rem] leading-tight font-bold mb-5">
                Zwei Minuten jetzt – Festpreis in wenigen Tagen
              </h2>
              <p className="lead mb-8">
                Je mehr Sie uns über Etage, Aufzug und Umfang verraten, desto genauer können wir
                schon vor der Besichtigung einschätzen, was auf Sie zukommt.
              </p>

              <div className="space-y-4">
                <a
                  href={`tel:${company.phone.replace(/\s/g, '')}`}
                  className="card-soft flex items-center gap-4 p-5 hover:border-primary-line transition-colors"
                >
                  <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Lieber direkt sprechen?</p>
                    <p className="font-display font-bold text-lg text-ink">{company.phoneDisplay}</p>
                  </div>
                </a>
                <p className="text-sm text-muted-foreground pl-1">
                  Telefonisch erreichbar {company.workingHours.replace('Mo-Fr: ', 'montags bis freitags, ')}.
                  Außerhalb dieser Zeiten nutzen Sie am besten das Formular.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
