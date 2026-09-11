import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { company } from '@/data/company';
import { services } from '@/data/services';
import logo from '@/assets/logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-strong border-t border-card-border">
      {/* Abschluss-CTA statt eines weiteren grauen Blocks */}
      <div className="shell pt-16 md:pt-20">
        <div className="rounded-3xl bg-ink px-8 py-10 md:px-12 md:py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-[2rem] leading-tight font-bold text-white mb-3">
              Umzug, Entrümpelung oder Transport geplant?
            </h2>
            <p className="text-white/65 leading-relaxed">
              Die Besichtigung ist kostenlos und unverbindlich – auch dann, wenn Sie sich
              danach gegen uns entscheiden.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/kontakt" className="btn-primary">
              Angebot anfordern
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className="btn inline-flex border border-white/20 text-white hover:bg-white/10"
            >
              <Phone className="w-4 h-4" />
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="shell pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">

          {/* Brand & Intro */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-card border border-card-border flex items-center justify-center overflow-hidden shrink-0">
                <img src={logo} alt="B Logistics" className="w-full h-full object-contain p-1" />
              </div>
              <div className="leading-tight">
                <span className="block text-ink font-display font-bold text-lg">
                  {company.name}
                </span>
                <span className="block text-amber-ink text-[10px] font-semibold uppercase tracking-[0.16em]">
                  {company.tagline}
                </span>
              </div>
            </Link>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Kleiner Betrieb aus Monheim am Rhein für Umzüge, Entrümpelungen und Transporte in
              Düsseldorf und dem umliegenden Rheinland.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-ink mb-5">Kontakt</h3>
            <ul className="space-y-3.5 text-[15px] text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-[18px] h-[18px] text-amber-ink shrink-0 mt-0.5" />
                <span>{company.address.street}<br />{company.address.city}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-[18px] h-[18px] text-amber-ink shrink-0" />
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-ink transition-colors font-medium">
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-[18px] h-[18px] text-amber-ink shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-ink transition-colors break-all">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-[18px] h-[18px] text-muted-foreground/60 shrink-0" />
                <span>{company.workingHours}</span>
              </li>
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-display font-bold text-ink mb-5">Leistungen</h3>
            <ul className="space-y-2.5 text-[15px]">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.hasDetailPage ? `/leistungen/${service.slug}` : '/kontakt'}
                    className="text-muted-foreground hover:text-amber-ink transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation & Legal */}
          <div>
            <h3 className="font-display font-bold text-ink mb-5">Informationen</h3>
            <ul className="space-y-2.5 text-[15px] text-muted-foreground">
              <li><Link to="/" className="hover:text-amber-ink transition-colors">Startseite</Link></li>
              <li><Link to="/leistungen" className="hover:text-amber-ink transition-colors">Leistungen</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-amber-ink transition-colors">Über uns</Link></li>
              <li><Link to="/faq" className="hover:text-amber-ink transition-colors">Häufige Fragen</Link></li>
              <li><Link to="/kontakt" className="hover:text-amber-ink transition-colors">Kontakt</Link></li>
              <li className="pt-3 mt-3 border-t border-card-border">
                <Link to="/impressum" className="hover:text-amber-ink transition-colors">Impressum</Link>
              </li>
              <li><Link to="/datenschutz" className="hover:text-amber-ink transition-colors">Datenschutz</Link></li>
              <li><Link to="/agb" className="hover:text-amber-ink transition-colors">AGB</Link></li>
            </ul>
          </div>
        </div>

        {/* Einsatzgebiet als Fließtext – gut für die lokale Suche */}
        <p className="text-[13px] text-muted-foreground/80 leading-relaxed border-t border-card-border pt-6">
          <span className="font-semibold text-ink-soft">Einsatzgebiet:</span>{' '}
          {company.serviceArea.cities.join(' · ')}. {company.serviceArea.note}
        </p>
      </div>

      {/* Dunkler Abschlussbalken – gibt der hellen Seite einen Boden
          und hält das helle Codion-Logo lesbar */}
      <div className="bg-ink">
        <div className="shell py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50 text-center md:text-left">
            &copy; {currentYear} {company.name} · Inhaber {company.owner}
          </p>
          <a
            href="https://www.codion.digital"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Codion – Designed & developed by"
            className="group inline-flex items-center gap-3 rounded-md px-2 py-1 transition-all duration-300 hover:scale-[1.03]"
          >
            <span className="text-[10px] uppercase tracking-[0.18em] text-white/35">
              Designed &amp; developed by
            </span>
            <img
              src="/images/Logo-Neu.webp"
              alt="Codion"
              width="6563"
              height="849"
              loading="lazy"
              decoding="async"
              className="h-4 w-auto animate-codion-shimmer opacity-85 transition-opacity duration-300 group-hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
