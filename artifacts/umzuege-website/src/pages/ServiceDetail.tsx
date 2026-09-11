import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, Calculator, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import { PageHero } from '@/components/PageHero';
import { services } from '@/data/services';
import { company } from '@/data/company';

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();

  const service = services.find(s => s.slug === slug && s.hasDetailPage);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const Icon = service.icon;
  const otherServices = services.filter(s => s.id !== service.id && s.hasDetailPage).slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${service.title} in Düsseldorf und Umgebung`}
        description={service.shortDescription}
        path={`/leistungen/${service.slug}`}
      />

      <PageHero
        eyebrow="Leistung"
        title={service.title}
        lead={service.shortDescription}
        decor={service.decor}
        aside={
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-3xl bg-primary flex items-center justify-center shadow-[0_20px_45px_-22px_rgba(214,158,0,1)]">
            <Icon className="w-10 h-10 md:w-14 md:h-14 text-primary-foreground" />
          </div>
        }
      />

      {/* Breadcrumb */}
      <div className="bg-surface border-b border-card-border">
        <nav aria-label="Brotkrumen" className="shell py-3.5">
          <ol className="flex items-center gap-1.5 text-[13px] text-muted-foreground flex-wrap">
            <li><Link to="/" className="hover:text-amber-ink transition-colors">Startseite</Link></li>
            <li aria-hidden><ChevronRight className="w-3.5 h-3.5 opacity-50" /></li>
            <li><Link to="/leistungen" className="hover:text-amber-ink transition-colors">Leistungen</Link></li>
            <li aria-hidden><ChevronRight className="w-3.5 h-3.5 opacity-50" /></li>
            <li className="text-ink font-medium" aria-current="page">{service.title}</li>
          </ol>
        </nav>
      </div>

      {/* Content */}
      <section className="section relative overflow-hidden bg-background bg-mesh-soft">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Hauptspalte */}
            <div className="lg:col-span-2 space-y-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="eyebrow mb-5">Worum es geht</span>
                <p className="text-lg md:text-xl text-ink-soft leading-relaxed">
                  {service.introText}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Das übernehmen wir</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.details?.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-card-border"
                    >
                      <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                      </span>
                      <span className="text-[15px] text-ink-soft leading-snug">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Was Sie davon haben</h2>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {service.benefits?.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-ink shrink-0 mt-0.5" />
                      <span className="text-[15px] text-ink-soft leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {service.priceFactors && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-primary-line bg-primary-soft p-7 md:p-9"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <Calculator className="w-5 h-5 text-amber-ink" />
                    <h2 className="text-xl font-bold">Was den Preis bestimmt</h2>
                  </div>
                  <ul className="space-y-2.5">
                    {service.priceFactors.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] text-ink-soft">
                        <span className="text-amber-ink font-bold shrink-0">{String(i + 1).padStart(2, '0')}</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-ink-soft/80 mt-6 pt-5 border-t border-primary-line">
                    Deshalb nennen wir keinen Preis, bevor wir es gesehen haben – und danach
                    einen, der auch hält.
                  </p>
                </motion.div>
              )}

              {/* Weitere Leistungen */}
              <div className="pt-4">
                <h2 className="text-xl font-bold mb-5">Passt oft dazu</h2>
                <div className="grid sm:grid-cols-3 gap-3">
                  {otherServices.map((other) => {
                    const OtherIcon = other.icon;
                    return (
                      <Link
                        key={other.id}
                        to={`/leistungen/${other.slug}`}
                        className="card-lift p-5 group"
                      >
                        <OtherIcon className="w-5 h-5 text-amber-ink mb-3" />
                        <p className="font-semibold text-ink mb-1">{other.title}</p>
                        <span className="text-[13px] text-muted-foreground inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Ansehen <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 card-soft p-8 shadow-[0_24px_60px_-40px_rgba(60,45,10,0.5)]">
                <h2 className="text-xl font-bold mb-2">Angebot für {service.title}</h2>
                <p className="text-[15px] text-muted-foreground mb-7 leading-relaxed">
                  Besichtigung kostenlos, Angebot schriftlich, Entscheidung bei Ihnen.
                </p>

                <div className="space-y-3">
                  <Link to="/kontakt" className="btn-primary w-full">
                    Kostenlos anfragen
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="relative flex py-1 items-center">
                    <div className="flex-grow border-t border-card-border" />
                    <span className="flex-shrink-0 mx-3 text-muted-foreground text-xs uppercase tracking-wider">oder</span>
                    <div className="flex-grow border-t border-card-border" />
                  </div>

                  <a
                    href={`tel:${company.phone.replace(/\s/g, '')}`}
                    className="btn-outline w-full"
                  >
                    <Phone className="w-4 h-4 text-amber-ink" />
                    {company.phoneDisplay}
                  </a>
                </div>

                <ul className="mt-8 pt-6 border-t border-card-border space-y-2.5">
                  {company.promises.slice(0, 3).map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[13px] text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-amber-ink shrink-0 mt-px" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
