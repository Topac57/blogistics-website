import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, ThumbsUp, MapPin, Users, Star } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { ContactForm } from '@/components/ContactForm';
import { services } from '@/data/services';
import { company } from '@/data/company';
import { seoData } from '@/data/seo';

export function Home() {
  return (
    <>
      <SEOHead 
        title={seoData.pages.home.title}
        description={seoData.pages.home.description}
        path={seoData.pages.home.path}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80" 
          alt="Umzugskartons" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-zinc-200 text-sm font-medium">Regional in Monheim & Umgebung</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
              Zuverlässige <span className="text-primary relative inline-block">Umzüge<span className="absolute -bottom-2 left-0 right-0 h-2 bg-primary/20 blur-md"></span></span>,<br/>
              Entrümpelungen & Transporte
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed max-w-2xl">
              Professionell, pünktlich und zu fairen Preisen – für Privat- und Gewerbekunden in Monheim am Rhein und der gesamten Region.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
              <a 
                href="#anfrage" 
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-[0_0_40px_-10px_rgba(255,193,7,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,193,7,0.7)] hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center gap-2"
              >
                Jetzt unverbindlich anfragen
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href={`tel:${company.phone.replace(/\s/g, '')}`} 
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/20 backdrop-blur-md transition-all duration-300 text-lg flex items-center justify-center"
              >
                Direkt anrufen
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-zinc-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">Unsere Leistungen</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-zinc-600">
              Wir bieten Ihnen ein umfassendes Leistungsspektrum aus einer Hand. Verlassen Sie sich auf unsere Erfahrung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5 border border-zinc-100 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-primary-foreground text-primary">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">{service.title}</h3>
                  <p className="text-zinc-600 mb-6 flex-grow">{service.shortDescription}</p>
                  
                  {service.hasDetailPage ? (
                    <Link 
                      to={`/leistungen/${service.slug}`}
                      className="inline-flex items-center text-zinc-900 font-bold hover:text-primary transition-colors mt-auto group/link"
                    >
                      Mehr erfahren 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <Link 
                      to="/kontakt"
                      className="inline-flex items-center text-primary font-bold hover:text-zinc-900 transition-colors mt-auto group/link"
                    >
                      Jetzt anfragen
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                  Warum Sie uns vertrauen können
                </h2>
                <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  Ein Umzug oder eine Haushaltsauflösung ist Vertrauenssache. Als lokales Unternehmen aus Monheim am Rhein legen wir größten Wert auf Zuverlässigkeit, Diskretion und erstklassigen Service.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: "Zuverlässig", desc: "Wir halten unsere Zusagen immer ein." },
                  { icon: Clock, title: "Pünktlich", desc: "Ihre Zeit ist uns wichtig – kein langes Warten." },
                  { icon: ThumbsUp, title: "Faire Preise", desc: "Transparente Festpreise, keine versteckten Kosten." },
                  { icon: CheckCircle2, title: "Sorgfältig", desc: "Wir behandeln Ihr Eigentum wie unser eigenes." },
                  { icon: Users, title: "Erfahrenes Team", desc: "Eingespieltes Personal für reibungslose Abläufe." },
                  { icon: Star, title: "Regional & Persönlich", desc: "Ihr Ansprechpartner aus Monheim am Rhein." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">{item.title}</h4>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&q=80" 
                alt="Unser Team im Einsatz" 
                className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-zinc-950 p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-5xl font-display font-bold text-primary mb-2">100%</p>
                <p className="text-white font-medium">Kundenzufriedenheit</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ihr Weg zum stressfreien Umzug</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-1/8 right-1/8 h-0.5 bg-zinc-800 border-t border-dashed border-zinc-700"></div>
            
            {[
              { num: "01", title: "Anfrage senden", desc: "Kontaktieren Sie uns telefonisch oder bequem über unser Formular." },
              { num: "02", title: "Kostenlose Beratung", desc: "Wir besprechen Details und führen ggf. eine Vor-Ort-Besichtigung durch." },
              { num: "03", title: "Angebot & Termin", desc: "Sie erhalten ein faires Festpreisangebot und wir fixieren den Termin." },
              { num: "04", title: "Durchführung", desc: "Wir erledigen die Arbeit pünktlich, sicher und zu Ihrer vollsten Zufriedenheit." }
            ].map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-zinc-900 border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-bold font-display mb-6 relative z-10 shadow-[0_0_20px_-5px_rgba(255,193,7,0.4)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Häufig gestellte Fragen</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { q: "Wie viel kostet ein Umzug?", a: "Die Kosten hängen von Umfang, Entfernung und Leistungspaket ab. Wir erstellen Ihnen gerne ein kostenloses Festpreisangebot." },
              { q: "Wie weit im Voraus muss ich buchen?", a: "Wir empfehlen 2–4 Wochen Vorlauf. In Einzelfällen sind wir auch kurzfristig verfügbar – sprechen Sie uns an." },
              { q: "Erledigen Sie auch Entrümpelungen?", a: "Ja, wir entrümpeln Wohnungen, Häuser, Keller und Dachböden fachgerecht und umweltgerecht in Monheim und Umgebung." },
              { q: "Sind meine Möbel während des Transports versichert?", a: "Wir arbeiten mit größter Sorgfalt. Auf Wunsch klären wir Sie über Haftungsregelungen und Versicherungsmöglichkeiten auf." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-zinc-100 shadow-sm">
                <h3 className="font-bold text-zinc-900 mb-2">{faq.q}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/faq" className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-lg">
              Alle Fragen ansehen <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="anfrage" className="py-24 bg-zinc-50 relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-zinc-950"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Starten Sie jetzt Ihre Anfrage</h2>
            <p className="text-zinc-300 text-lg">Kostenlos und unverbindlich. Wir melden uns umgehend bei Ihnen.</p>
          </div>
          
          <ContactForm />
          
        </div>
      </section>

      {/* ABOUT SHORT & LOCAL TRUST */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
              <MapPin className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">Ihr lokaler Partner aus Monheim am Rhein</h3>
              <p className="text-zinc-600 text-lg leading-relaxed mb-4">
                Wir sind tief in der Region verwurzelt und kennen die Gegebenheiten in Monheim, Langenfeld, Leverkusen und Düsseldorf genau. Kurze Anfahrtswege, schnelle Erreichbarkeit und persönliche Betreuung zeichnen uns aus. Vertrauen Sie auf einen Dienstleister aus Ihrer Nachbarschaft!
              </p>
              <Link to="/ueber-uns" className="text-primary font-bold hover:underline inline-flex items-center">
                Mehr über uns erfahren <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
