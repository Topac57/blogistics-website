import { Link } from 'react-router-dom';
import { Home, Phone } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { company } from '@/data/company';

export default function NotFound() {
  return (
    <>
      <SEOHead 
        title="Seite nicht gefunden (404)" 
        description="Die gesuchte Seite konnte leider nicht gefunden werden." 
      />
      
      <div className="min-h-[80vh] flex items-center justify-center bg-zinc-50 px-4 py-20">
        <div className="max-w-xl w-full bg-white p-10 md:p-16 rounded-3xl shadow-2xl text-center border border-zinc-100">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-5xl font-black text-primary font-display">404</span>
          </div>
          
          <h1 className="text-3xl font-bold text-zinc-900 mb-4">Uups! Seite nicht gefunden</h1>
          <p className="text-lg text-zinc-600 mb-10">
            Die von Ihnen aufgerufene Seite existiert leider nicht oder wurde verschoben.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:bg-[#e5ae06] transition-all"
            >
              <Home className="w-5 h-5" />
              Zur Startseite
            </Link>
            
            <a 
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white font-bold rounded-xl shadow-lg hover:bg-zinc-800 transition-all"
            >
              <Phone className="w-5 h-5" />
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
