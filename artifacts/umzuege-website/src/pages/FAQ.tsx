import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Minus, ArrowRight, Phone } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { PageHero } from '@/components/PageHero';
import { ConsultationDesk } from '@/components/decor/Silhouettes';
import { faqs, faqCategories } from '@/data/faq';
import { company } from '@/data/company';
import { seoData } from '@/data/seo';

export function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqs[0].question);

  const toggle = (question: string) =>
    setOpenQuestion(openQuestion === question ? null : question);

  return (
    <>
      <SEOHead
        title={seoData.pages.faq.title}
        description={seoData.pages.faq.description}
        path={seoData.pages.faq.path}
      />

      <PageHero
        eyebrow="Häufige Fragen"
        title={<>Antworten, bevor Sie <span className="relative inline-block"><span className="relative z-10">fragen müssen</span><span className="absolute left-0 right-0 bottom-1 h-3 md:h-4 bg-primary/45 -rotate-[0.5deg] rounded-sm z-0" /></span></>}
        lead="Kosten, Vorlauf, Haftung, Ablauf – die Fragen, die uns am Telefon am häufigsten gestellt werden, hier ausführlich beantwortet."
        decor={ConsultationDesk}
      />

      <section className="section relative overflow-hidden bg-background bg-mesh-soft">
        <div className="shell">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-14 items-start">

            {/* Sprungnavigation */}
            <nav className="hidden lg:block sticky top-28" aria-label="FAQ-Kategorien">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-4">
                Themen
              </p>
              <ul className="space-y-1">
                {faqCategories.map((cat) => (
                  <li key={cat}>
                    <a
                      href={`#${encodeURIComponent(cat)}`}
                      className="block py-2 px-3 -mx-3 rounded-lg text-[15px] text-muted-foreground hover:text-ink hover:bg-surface transition-colors"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-12 max-w-3xl">
              {faqCategories.map((category) => {
                const items = faqs.filter((f) => f.category === category);
                if (items.length === 0) return null;

                return (
                  <div key={category} id={encodeURIComponent(category)} className="scroll-mt-28">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-ink mb-5 flex items-center gap-3">
                      {category}
                      <span className="h-px flex-grow bg-card-border" />
                    </h2>

                    <div className="space-y-2.5">
                      {items.map((faq, index) => {
                        const isOpen = openQuestion === faq.question;
                        return (
                          <motion.div
                            key={faq.question}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.04 }}
                            className={`rounded-2xl border bg-card overflow-hidden transition-colors ${
                              isOpen ? 'border-primary-line' : 'border-card-border hover:border-primary-line/70'
                            }`}
                          >
                            <button
                              onClick={() => toggle(faq.question)}
                              className="w-full text-left px-6 py-5 flex items-start justify-between gap-5"
                              aria-expanded={isOpen}
                            >
                              <span className="font-semibold text-ink text-[17px] leading-snug">
                                {faq.question}
                              </span>
                              <span
                                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                                  isOpen ? 'bg-primary text-primary-foreground' : 'bg-surface text-ink-soft'
                                }`}
                              >
                                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                              </span>
                            </button>
                            <div
                              className={`grid transition-all duration-300 ease-in-out ${
                                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                              }`}
                            >
                              <div className="overflow-hidden">
                                <p className="px-6 pb-6 text-[15px] text-muted-foreground leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {/* Abschluss-CTA */}
              <div className="rounded-3xl border border-primary-line bg-primary-soft p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-3">Ihre Frage war nicht dabei?</h2>
                <p className="text-ink-soft leading-relaxed mb-7 max-w-xl">
                  Rufen Sie an – die meisten Fragen sind in zwei Minuten geklärt, und wir sehen
                  dabei gleich nach, ob Ihr Wunschtermin überhaupt noch frei ist.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="btn-primary">
                    <Phone className="w-4 h-4" />
                    {company.phoneDisplay}
                  </a>
                  <Link to="/kontakt" className="btn-outline">
                    Nachricht schreiben
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
