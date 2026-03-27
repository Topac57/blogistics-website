import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import { ContactForm } from '@/components/ContactForm';
import { company } from '@/data/company';

export function Contact() {
  return (
    <>
      <SEOHead 
        title="Kontakt & Anfrage" 
        description="Nehmen Sie Kontakt zu Tolga-Baris Coskun Umzüge & Transporte in Monheim auf. Kostenlose Besichtigung und unverbindliches Angebot."
        path="/kontakt"
      />

      <section className="bg-zinc-950 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nehmen Sie <span className="text-primary">Kontakt</span> auf
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Wir freuen uns auf Ihre Anfrage. Schnelle Antworten und unkomplizierte Kommunikation garantiert.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="lg:col-span-4 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-6">Unsere Kontaktdaten</h2>
                <p className="text-zinc-600 mb-8 leading-relaxed">
                  Sie haben Fragen zu unseren Leistungen oder benötigen kurzfristig Hilfe (z.B. bei Tragearbeiten)? Melden Sie sich gerne direkt bei uns.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-zinc-100">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 text-lg">Adresse</h3>
                    <p className="text-zinc-600">{company.address.street}</p>
                    <p className="text-zinc-600">{company.address.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-zinc-100">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 text-lg">Telefon</h3>
                    <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-zinc-600 hover:text-primary font-medium transition-colors">
                      {company.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-zinc-100">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 text-lg">E-Mail</h3>
                    <a href={`mailto:${company.email}`} className="text-zinc-600 hover:text-primary transition-colors">
                      {company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-zinc-100">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 text-lg">Erreichbarkeit</h3>
                    <p className="text-zinc-600">{company.workingHours}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-primary/10 rounded-2xl border border-primary/20 mt-8">
                <h4 className="font-bold text-zinc-900 mb-2">Tragearbeiten gesucht?</h4>
                <p className="text-zinc-700 text-sm">
                  Wenn Sie nur starke Helfer für internes Umräumen oder Tragen schwerer Güter benötigen, wählen Sie im Formular einfach "Tragearbeiten" aus.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="lg:col-span-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
