import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import { services } from '@/data/services';

export function Services() {
  return (
    <>
      <SEOHead 
        title="Unsere Leistungen | Umzüge, Entrümpelung, Transport" 
        description="Alle Leistungen im Überblick: Privatumzüge, Firmenumzüge, Entrümpelungen, Transporte, Möbelmontage und Haushaltsauflösungen in Monheim am Rhein."
        path="/leistungen"
      />

      <section className="bg-zinc-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Unsere <span className="text-primary">Leistungen</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Maßgeschneiderte Lösungen für Ihr Projekt. Von der kleinen Beiladung bis zur kompletten Haushaltsauflösung.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-zinc-100 flex flex-col hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="h-2 bg-gradient-to-r from-primary/80 to-primary w-full"></div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="w-16 h-16 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-zinc-900 mb-4">{service.title}</h2>
                    <p className="text-zinc-600 mb-6 flex-grow leading-relaxed">
                      {service.shortDescription}
                    </p>
                    
                    {service.hasDetailPage ? (
                      <Link 
                        to={`/leistungen/${service.slug}`}
                        className="inline-flex items-center justify-center w-full py-3 px-4 bg-zinc-900 hover:bg-primary hover:text-primary-foreground text-white font-semibold rounded-xl transition-colors duration-300 group"
                      >
                        Details ansehen
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <Link 
                        to="/kontakt"
                        className="inline-flex items-center justify-center w-full py-3 px-4 bg-primary text-primary-foreground hover:bg-[#e5ae06] font-semibold rounded-xl transition-colors duration-300"
                      >
                        Jetzt anfragen
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">Nicht das Passende gefunden?</h2>
          <p className="text-lg text-zinc-600 mb-10">
            Kontaktieren Sie uns einfach. Wir finden auch für ungewöhnliche Anfragen oder spezielle Transporte eine individuelle Lösung.
          </p>
          <Link 
            to="/kontakt"
            className="inline-flex px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            Individuelle Anfrage stellen
          </Link>
        </div>
      </section>
    </>
  );
}
