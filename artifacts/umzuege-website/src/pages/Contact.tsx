import { MapPin, Phone, Mail, Clock, CheckCircle2, HandHelping } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import { PageHero } from '@/components/PageHero';
import { ContactScene } from '@/components/decor/Silhouettes';
import { ContactForm } from '@/components/ContactForm';
import { company } from '@/data/company';
import { seoData } from '@/data/seo';

export function Contact() {
  const contactItems = [
    {
      icon: Phone,
      label: 'Telefon',
      value: company.phoneDisplay,
      href: `tel:${company.phone.replace(/\s/g, '')}`,
      hint: 'Der schnellste Weg – besonders bei kurzfristigen Terminen.'
    },
    {
      icon: Mail,
      label: 'E-Mail',
      value: company.email,
      href: `mailto:${company.email}`,
      hint: 'Gern mit Fotos der Räume, das beschleunigt die Einschätzung.'
    },
    {
      icon: MapPin,
      label: 'Geschäftsadresse',
      value: `${company.address.street}, ${company.address.city}`,
      hint: 'Kein Ladenlokal – wir kommen zu Ihnen.'
    },
    {
      icon: Clock,
      label: 'Telefonisch erreichbar',
      value: company.workingHours,
      hint: 'Außerhalb der Zeiten: Formular nutzen, wir melden uns zurück.'
    }
  ];

  return (
    <>
      <SEOHead
        title={seoData.pages.kontakt.title}
        description={seoData.pages.kontakt.description}
        path={seoData.pages.kontakt.path}
      />

      <PageHero
        eyebrow="Kontakt"
        title={<>Sagen Sie uns, was <span className="relative inline-block"><span className="relative z-10">ansteht</span><span className="absolute left-0 right-0 bottom-1 h-3 md:h-4 bg-primary/45 -rotate-[0.5deg] rounded-sm z-0" /></span></>}
        lead="Ein paar Angaben genügen für den ersten Schritt. Wir melden uns in der Regel am selben Werktag mit einem Terminvorschlag für die kostenlose Besichtigung."
        decor={ContactScene}
      />

      <section className="section relative overflow-hidden bg-background bg-mesh-soft">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Kontaktdaten */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="space-y-3">
                {contactItems.map((item) => {
                  const Wrapper = item.href ? 'a' : 'div';
                  return (
                    <Wrapper
                      key={item.label}
                      {...(item.href ? { href: item.href } : {})}
                      className={`card-soft flex items-start gap-4 p-5 ${
                        item.href ? 'hover:border-primary-line transition-colors' : ''
                      }`}
                    >
                      <div className="w-11 h-11 rounded-xl bg-primary-soft border border-primary-line flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-amber-ink" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        <p className="font-semibold text-ink break-words">{item.value}</p>
                        <p className="text-[13px] text-muted-foreground mt-1 leading-snug">
                          {item.hint}
                        </p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-primary-line bg-primary-soft p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <HandHelping className="w-5 h-5 text-amber-ink" />
                  <h2 className="font-bold text-ink">Nur Tragehilfe gesucht?</h2>
                </div>
                <p className="text-[15px] text-ink-soft leading-relaxed">
                  Wenn Sie lediglich kräftige Hände zum Umstellen, Tragen oder Umräumen
                  brauchen, wählen Sie im Formular „Tragearbeiten“. Das ist stundenweise
                  buchbar und braucht keine Besichtigung.
                </p>
              </div>

              <div>
                <h2 className="font-bold text-ink mb-4">Was danach passiert</h2>
                <ol className="space-y-3">
                  {[
                    'Wir melden uns in der Regel am selben Werktag zurück.',
                    'Gemeinsamer Besichtigungstermin – vor Ort oder per Video.',
                    'Schriftliches Festpreisangebot, unverbindlich.',
                    'Erst bei Ihrer Zusage reservieren wir Team und Fahrzeug.'
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                      <CheckCircle2 className="w-[18px] h-[18px] text-amber-ink shrink-0 mt-0.5" />
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>

            {/* Formular */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
