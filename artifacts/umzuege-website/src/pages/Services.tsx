import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import { PageHero } from '@/components/PageHero';
import { PackingScene } from '@/components/decor/Silhouettes';
import { services } from '@/data/services';
import { company } from '@/data/company';
import { seoData } from '@/data/seo';

export function Services() {
  return (
    <>
      <SEOHead
        title={seoData.pages.leistungen.title}
        description={seoData.pages.leistungen.description}
        path={seoData.pages.leistungen.path}
      />

      <PageHero
        eyebrow="Leistungen"
        title={<>Alles rund um <span className="marker">Wohnung, Haus und Büro</span></>}
        lead="Sechs Leistungen, die wir regelmäßig ausführen – nicht zwanzig, die im Katalog gut aussehen. Vieles davon lässt sich kombinieren: Umzug plus Entrümpelung des Kellers zum Beispiel, in einem Termin und zu einem Preis."
        decor={PackingScene}
      />

      <section className="section relative overflow-hidden bg-background bg-mesh-soft">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              const to = service.hasDetailPage ? `/leistungen/${service.slug}` : '/kontakt';
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
                >
                  <Link to={to} className="card-lift group flex flex-col sm:flex-row gap-6 h-full p-7 md:p-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary-soft border border-primary-line flex items-center justify-center shrink-0 text-amber-ink transition-colors group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <h2 className="text-2xl font-bold mb-2.5">{service.title}</h2>
                      <p className="text-[15px] text-muted-foreground leading-relaxed mb-4 flex-grow">
                        {service.shortDescription}
                      </p>
                      {service.priceFactors && (
                        <p className="text-[13px] text-muted-foreground/85 leading-relaxed mb-5">
                          <span className="font-semibold text-ink-soft">Preis richtet sich nach:</span>{' '}
                          {service.priceFactors.slice(0, 3).join(' · ')}
                        </p>
                      )}
                      <div className="flex items-center justify-between gap-4 pt-4 border-t border-card-border mt-auto">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground/80">
                          {service.audience}
                        </span>
                        <span className="link-arrow text-[15px] shrink-0">
                          {service.hasDetailPage ? 'Details' : 'Anfragen'}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kombinations-Hinweis */}
      <section className="section relative overflow-hidden bg-surface bg-mesh-warm border-y border-card-border">
        <div className="shell relative">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="max-w-2xl">
              <span className="eyebrow mb-5">Kombinieren spart</span>
              <h2 className="text-3xl md:text-4xl leading-tight font-bold mb-5">
                Nicht das Passende dabei? Dann fragen Sie einfach.
              </h2>
              <p className="lead">
                Die meisten Anfragen passen nicht exakt in eine Kategorie – es ist der Umzug
                mit Kellerentrümpelung, der Transport mit Montage, die Auflösung mit
                Endreinigung. Beschreiben Sie uns Ihren Fall, wir machen daraus ein Angebot
                mit einem Termin und einem Preis.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link to="/kontakt" className="btn-primary">
                Individuelle Anfrage
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="btn-outline">
                <Phone className="w-4 h-4 text-amber-ink" />
                {company.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
