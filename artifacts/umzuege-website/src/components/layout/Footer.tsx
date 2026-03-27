import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { company } from '@/data/company';
import logo from '@/assets/logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-16 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Intro */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                <img src={logo} alt="Tolga-Baris Coskun Umzüge & Transporte" className="w-full h-full object-contain p-1" />
              </div>
              <div>
                <h2 className="text-white font-display font-bold text-lg leading-tight">
                  Tolga-Baris Coskun
                </h2>
                <p className="text-primary text-xs font-semibold uppercase tracking-wider">
                  Umzüge & Transporte
                </p>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Ihr zuverlässiger Partner für stressfreie Umzüge, Transporte und fachgerechte Entrümpelungen in Monheim am Rhein und der gesamten Region.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              Kontakt
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{company.address.street}<br/>{company.address.city}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-primary transition-colors">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Clock className="w-5 h-5 text-zinc-600 shrink-0" />
                <span>{company.workingHours}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              Leistungen
            </h3>
            <ul className="space-y-3 text-sm">
              {['Umzüge', 'Entrümpelung', 'Transporte', 'Möbelmontage', 'Haushaltsauflösung'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/leistungen/${item.toLowerCase().replace('ö', 'oe').replace('ü', 'ue')}`}
                    className="flex items-center gap-2 hover:text-primary transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:text-primary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation & Legal */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              Informationen
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Startseite</Link></li>
              <li><Link to="/leistungen" className="hover:text-primary transition-colors">Leistungen</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-primary transition-colors">Über uns</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">Häufige Fragen (FAQ)</Link></li>
              <li><Link to="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
              <li className="pt-4 border-t border-zinc-800 mt-4"><Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link to="/agb" className="hover:text-white transition-colors">AGB</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm text-center md:text-left">
            &copy; {currentYear} {company.name}. Alle Rechte vorbehalten.
          </p>
          <p className="text-zinc-600 text-sm">
            Regional. Zuverlässig. Professionell.
          </p>
        </div>
      </div>
    </footer>
  );
}
