import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { company } from '@/data/company';
import { motion, AnimatePresence } from 'framer-motion';
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
        isScrolled ? 'bg-zinc-950/95 backdrop-blur-md py-3 shadow-lg shadow-black/20' : 'bg-zinc-950 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-lg flex items-center justify-center overflow-hidden shrink-0 transition-transform group-hover:scale-105">
              <img src="/logo.png" alt="Tolga-Baris Coskun Umzüge & Transporte Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-display font-bold text-lg md:text-xl leading-tight">
                Tolga-Baris Coskun
              </h1>
              <p className="text-primary text-xs md:text-sm font-semibold tracking-wide uppercase">
                Umzüge & Transporte
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => 
                      `text-sm font-medium transition-colors hover:text-primary ${
                        isActive ? 'text-primary' : 'text-zinc-300'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            <a 
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>{company.phoneDisplay}</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <a 
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-full shadow-md active:scale-95 transition-transform"
              aria-label="Anrufen"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button 
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menü öffnen"
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
            className="md:hidden border-t border-zinc-800 bg-zinc-950 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <ul className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink 
                      to={link.path}
                      className={({ isActive }) => 
                        `flex items-center justify-between p-3 rounded-lg text-base font-medium transition-colors ${
                          isActive ? 'bg-primary/10 text-primary' : 'text-zinc-300 hover:bg-zinc-900'
                        }`
                      }
                    >
                      {link.name}
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-zinc-800">
                <p className="text-zinc-500 text-sm mb-3">Direkt Kontakt aufnehmen:</p>
                <a 
                  href={`tel:${company.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold shadow-lg active:scale-[0.98] transition-transform"
                >
                  <Phone className="w-5 h-5" />
                  {company.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
