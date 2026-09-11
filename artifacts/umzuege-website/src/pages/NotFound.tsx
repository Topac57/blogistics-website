import { Link } from 'react-router-dom';
import { Home, Phone, ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { company } from '@/data/company';
import { services } from '@/data/services';
import { LostBox } from '@/components/decor/Silhouettes';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Seite nicht gefunden (404)"
        description="Die gesuchte Seite konnte leider nicht gefunden werden."
      />

      <div className="relative overflow-hidden min-h-[75vh] flex items-center bg-background bg-mesh grain px-5 py-20">
        <LostBox className="pointer-events-none absolute inset-x-0 bottom-0 h-[130px] md:h-[180px] text-tint-sky/20 mask-fade-top" />

        <div className="relative max-w-2xl w-full mx-auto text-center">
          <p className="font-display text-[6rem] md:text-[8rem] leading-none font-extrabold text-primary/25 select-none">
            404
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 -mt-4">
            Hier ist wohl etwas verrutscht
          </h1>
          <p className="lead mb-10 max-w-lg mx-auto">
            Die Seite gibt es nicht mehr oder sie hat eine neue Adresse bekommen. Der Weg zurück
            führt über die Startseite – oder direkt zu einer unserer Leistungen.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
            <Link to="/" className="btn-primary">
              <Home className="w-4 h-4" />
              Zur Startseite
            </Link>
            <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="btn-outline">
              <Phone className="w-4 h-4 text-amber-ink" />
              {company.phoneDisplay}
            </a>
          </div>

          <div className="pt-10 border-t border-card-border">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-5">
              Vielleicht suchen Sie das
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {services.filter(s => s.hasDetailPage).map((service) => (
                <Link
                  key={service.id}
                  to={`/leistungen/${service.slug}`}
                  className="chip hover:border-primary-line hover:text-ink transition-colors"
                >
                  {service.title}
                  <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
