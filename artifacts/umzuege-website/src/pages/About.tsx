import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Target, Users, Briefcase, ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { company } from '@/data/company';
import logo from '@/assets/logo.png';

export function About() {
  return (
    <>
      <SEOHead 
        title="Über uns | Das Team" 
        description="Lernen Sie B Logistics kennen. Ihr zuverlässiger Partner für Umzüge und Transporte im Raum Düsseldorf und umliegenden Städten."
        path="/ueber-uns"
      />
      <section className="bg-zinc-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Über <span className="text-primary">uns</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Ihr verlässlicher Partner für Düsseldorf und die gesamte Region. Lernen Sie das Team hinter den Kulissen kennen.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">Wer wir sind</h2>
              <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Hinter <strong>{company.name}</strong> steht ein motiviertes und erfahrenes Team, das sich auf Dienstleistungen rund um Haus und Wohnung spezialisiert hat. Gegründet und geführt von {company.owner}, sind wir mit unserer Geschäftsadresse in Monheim am Rhein der zuverlässige Dienstleister für Düsseldorf und die gesamte umliegende Region.
                </p>
                <p>
                  Wir wissen: Ein Umzug, eine Entrümpelung oder der Transport wertvoller Möbel ist immer Vertrauenssache. Deshalb legen wir größten Wert auf eine persönliche Betreuung, absolute Zuverlässigkeit und transparente Kommunikation vom ersten Kontakt bis zum Abschluss der Arbeiten.
                </p>
                <p>
                  Egal ob privater Wohnungswechsel, Firmenumzug oder die komplette Haushaltsauflösung – wir packen an, damit Sie entlastet werden.
                </p>
                <p>
                  Unser Kundenstamm ist bewusst breit aufgestellt: Neben vielen privaten Haushalten betreuen wir regelmäßig auch Unternehmen und Einrichtungen der öffentlichen Hand im Raum Düsseldorf. Diese Vielfalt hat uns gelehrt, flexibel, diskret und strukturiert zu arbeiten – Eigenschaften, von denen letztlich alle unsere Auftraggeber gleichermaßen profitieren.
                </p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {/* placeholder professional handshake/team */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
                <div className="rounded-3xl w-full h-[500px] flex items-center justify-center overflow-hidden bg-[#f7f7f7]" style={{ backgroundColor: '#f2f2f2' }}>
                  <img
                    src={logo}
                    alt={company.name}
                    className="w-4/5 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 text-center">
              <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Für Düsseldorf und Umgebung</h3>
              <p className="text-zinc-600">
                Unser Einsatzgebiet umfasst Düsseldorf und die umliegenden Städte – von Ratingen über Neuss bis Leverkusen und darüber hinaus.
              </p>
            </div>
            
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 text-center">
              <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Erfahrenes Team</h3>
              <p className="text-zinc-600">
                Unser eingespieltes Personal bringt handwerkliches Geschick und jahrelange Routine für reibungslose Abläufe mit.
              </p>
            </div>

            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 text-center">
              <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Kunden im Fokus</h3>
              <p className="text-zinc-600">
                Ihre Zufriedenheit ist unser Antrieb. Wir arbeiten so lange, bis alles perfekt an seinem Platz steht.
              </p>
            </div>

            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 text-center">
              <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Vielfältige Auftraggeber</h3>
              <p className="text-zinc-600">
                Von privaten Haushalten über mittelständische Unternehmen bis hin zu öffentlichen Einrichtungen – unsere Erfahrung reicht über viele Auftragstypen und Anforderungsprofile hinaus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Möchten Sie uns persönlich kennenlernen?</h2>
          <p className="text-lg mb-10 font-medium">
            Gerne vereinbaren wir einen kostenlosen Besichtigungstermin vor Ort. Rufen Sie uns an oder schreiben Sie uns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/kontakt"
              className="px-8 py-4 bg-zinc-900 text-white hover:bg-zinc-800 font-bold rounded-xl shadow-lg transition-all"
            >
              Zum Kontaktformular
            </Link>
            <a 
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className="px-8 py-4 bg-transparent border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white font-bold rounded-xl transition-all"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
