import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { faqs } from '@/data/faq';
import { company } from '@/data/company';
import { seoData } from '@/data/seo';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEOHead 
        title={seoData.pages.faq.title}
        description={seoData.pages.faq.description}
        path={seoData.pages.faq.path}
      />

      <section className="bg-zinc-950 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Häufige <span className="text-primary">Fragen</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Hier finden Sie Antworten auf die gängigsten Fragen zu unseren Dienstleistungen.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:border-primary/30 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus:bg-zinc-50"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-bold text-zinc-900 text-lg pr-8">{faq.question}</span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
                    {openIndex === index ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 pt-0 text-zinc-600 leading-relaxed border-t border-zinc-50 mt-2 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Ihre Frage war nicht dabei?</h2>
            <p className="text-lg font-medium mb-8 max-w-2xl mx-auto opacity-90">
              Kein Problem! Kontaktieren Sie uns direkt, wir helfen Ihnen gerne weiter.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/kontakt"
                className="px-8 py-4 bg-zinc-900 text-white hover:bg-zinc-800 font-bold rounded-xl shadow-lg transition-all"
              >
                Nachricht schreiben
              </Link>
              <a 
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="px-8 py-4 bg-transparent border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white font-bold rounded-xl transition-all"
              >
                {company.phoneDisplay}
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
