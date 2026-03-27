import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import { services } from '@/data/services';
import { company } from '@/data/company';

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const service = services.find(s => s.slug === slug && s.hasDetailPage);
  
  if (!service) {
    return <Navigate to="/" replace />;
  }

  const Icon = service.icon;

  return (
    <>
      <SEOHead 
        title={`${service.title} in Düsseldorf und Umgebung`} 
        description={service.shortDescription}
        path={`/leistungen/${service.slug}`}
      />

      {/* Hero */}
      <section className="bg-zinc-950 py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/20 rounded-3xl flex items-center justify-center shrink-0 border border-primary/30">
              <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
            <div>
              <div className="text-primary font-semibold tracking-wider uppercase mb-2 text-sm">Leistung</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-zinc-300 max-w-2xl">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-zinc-900 mb-6">Wie wir Ihnen helfen</h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  {service.introText}
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold text-zinc-900 mb-6">Das beinhaltet unser Service:</h3>
                <ul className="space-y-4">
                  {service.details?.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-zinc-700 font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold text-zinc-900 mb-6">Ihre Vorteile auf einen Blick:</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits?.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-zinc-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar Sticky */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-zinc-50 rounded-2xl p-8 border border-zinc-200 shadow-xl">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Interesse geweckt?</h3>
                <p className="text-zinc-600 mb-8">
                  Holen Sie sich jetzt ein kostenloses und unverbindliches Angebot für {service.title} ein.
                </p>
                
                <div className="space-y-4">
                  <Link 
                    to="/kontakt"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-[#e5ae06] hover:-translate-y-1 transition-all shadow-lg"
                  >
                    Kostenlos anfragen
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  
                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-zinc-300"></div>
                    <span className="flex-shrink-0 mx-4 text-zinc-400 text-sm">oder</span>
                    <div className="flex-grow border-t border-zinc-300"></div>
                  </div>

                  <a 
                    href={`tel:${company.phone.replace(/\s/g, '')}`}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-white text-zinc-900 border-2 border-zinc-200 font-bold rounded-xl hover:border-primary hover:text-primary transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    {company.phoneDisplay}
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-200">
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Wir arbeiten für private, gewerbliche und öffentliche Auftraggeber im Raum Düsseldorf. Verlässlichkeit und Diskretion sind für uns bei jedem Auftrag selbstverständlich.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
