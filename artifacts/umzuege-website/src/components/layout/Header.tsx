import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import { company } from '@/data/company';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Startseite', path: '/' },
    { name: 'Leistungen', path: '/leistungen' },
    { name: 'Über uns', path: '/ueber-uns' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/85 backdrop-blur-xl py-2.5 border-b border-card-border shadow-[0_10px_30px_-24px_rgba(60,45,10,0.45)]'
          : 'bg-background py-4 border-b border-transparent'
      }`}
    >
      <div className="shell">
        <div className="flex justify-between items-center gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-card border border-card-border flex items-center justify-center overflow-hidden shrink-0 transition-all group-hover:border-primary-line">
              <img src={logo} alt="B Logistics" className="w-full h-full object-contain p-1" />
            </div>
            <div className="hidden sm:block leading-tight">
              <span className="block text-ink font-display font-bold text-lg md:text-xl">
                {company.name}
              </span>
              <span className="block text-amber-ink text-[10px] md:text-[11px] font-semibold tracking-[0.16em] uppercase">
                {company.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative text-[15px] font-medium transition-colors py-1 ${
                        isActive
                          ? 'text-ink after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[3px] after:rounded-full after:bg-primary'
                          : 'text-ink-soft hover:text-ink'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pl-6 border-l border-card-border">
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="hidden xl:flex items-center gap-2 text-ink font-semibold text-[15px] hover:text-amber-ink transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-ink" />
                {company.phoneDisplay}
              </a>
              <Link to="/kontakt" className="btn-primary px-5 py-2.5 text-sm">
                Angebot anfordern
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-full shadow-[0_6px_18px_-8px_rgba(214,158,0,0.9)] active:scale-95 transition-transform"
              aria-label="Anrufen"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              className="text-ink p-2 rounded-lg hover:bg-surface transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-card-border bg-background overflow-hidden"
          >
            <div className="px-5 py-6 space-y-5">
              <ul className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between p-3.5 rounded-xl text-base font-medium transition-colors ${
                          isActive ? 'bg-primary-soft text-ink' : 'text-ink-soft hover:bg-surface'
                        }`
                      }
                    >
                      {link.name}
                      <ChevronRight className="w-4 h-4 opacity-40" />
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="pt-5 border-t border-card-border space-y-3">
                <Link to="/kontakt" className="btn-primary w-full">
                  Kostenloses Angebot anfordern
                </Link>
                <a
                  href={`tel:${company.phone.replace(/\s/g, '')}`}
                  className="btn-outline w-full"
                >
                  <Phone className="w-4 h-4 text-amber-ink" />
                  {company.phoneDisplay}
                </a>
                <p className="text-center text-xs text-muted-foreground pt-1">
                  {company.workingHours}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
